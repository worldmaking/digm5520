#!/usr/bin/env node

const fs = require("fs"),
	path = require("path"),
	url = require("url"),
	http = require("http"),
	assert = require("assert");
const { networkInterfaces } = require('os');

const express = require("express")
const WebSocket = require("ws")
const JSON5 = require("json5")
const marked = require("marked")
const hljs   = require('highlight.js')
const template = require('es6-dynamic-template')

const server_path = __dirname;
const public_path = server_path; //path.join(server_path, "public");
const PORT = 8080

const meta_default = {
	author: "Graham Wakefield",
	template: "template.html",
	title: "",
	description: "",
}

function generate(file) {
	let src = fs.readFileSync(path.format(file), "utf8");

	console.log("parsing", file.name)
	// lazy deep copy of meta defaults:
	let meta = JSON.parse(JSON.stringify(meta_default)) 
	meta.src = src;
	
	// update metadata from JSON header:
	let match = (/<!--\s*(\{[\S\s]+?\})\s*-->/gm).exec(src)
	if (match) {
		try {
			let header = JSON5.parse(match[1])
			Object.assign(meta, header);
			src = src.replace(/<!--\s*(\{[\S\s]+?\})\s*-->/gm, "")
		} catch (e) {
			//console.warn("unable to find/parse JSON header for", file.name)
		}
	}
	//  parse title from md:
	try {
		if (!meta.title) meta.title = (/\n#\s+(.+)/gm).exec(src)[1];
	} catch (e) {
		//console.warn("unable to find/parse title")
	}

	const isSlides = meta.template == "slides.html";

	if (isSlides) {
		meta.src = meta.src
			// auto slide break at any heading titles:
			.replace(/\n(#+\s[^\n]+)/g, "\n---\n\n$1")
			// replace @image:path as background contain 
			.replace(/\n---image:([^\s]+)/g, `\n---\n<!-- .slide: data-background-image="$1" data-background-size="contain" -->\n\nnotes:\n`)
			// // replace @youtube:ID as background video
			.replace(/\n---youtube:([^\s]+)/g, `\n---\n<!-- .slide: data-background-interactive data-background-iframe="https://youtube.com/embed/$1?rel=0&autoplay=1&start=0" -->\n\nnotes:\n`)
	} else {
		meta.src = meta.src
		// auto hr break at heading 1 titles:
		.replace(/\n(#\s[^\n]+)/g, "\n---\n\n$1")
		// replace @image:path as background contain 
		.replace(/\n---image:([^\s]+)/g, `\n<img src="$1" />\n`)
		// // replace @youtube:ID as background video
		.replace(/\n---youtube:([^\s]+)/g, `<iframe width="720" height="540" src="https://youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>`)
		.replace(/\n---vimeo:([^\s]+)/g, `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/$1?loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`)
		// auto-embed codepens:
		.replace(/\n---codepen:https?:\/\/codepen.io\/+([^\/]+)\/pen\/([^\/\n]+)\/?/g, 
			`<p class="codepen" data-height="520" data-default-tab="js,result" data-user="$1" data-slug-hash="$2" data-preview="true"><span><a href="https://codepen.io/$1/pen/$2">Open pen.</a></span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>`)
		// auto-embed google slides:
		.replace(/\nhttps?:\/\/docs.google.com\/presentation\/d\/([^\n\r\/]+)[^\n\r]*/g,
			`<div class="responsive-google-slides"><iframe src="https://docs.google.com/presentation/d/$1/embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>`)
		// auto-embed stackblitz
		.replace(/\nhttps?:\/\/stackblitz.com\/edit\/([^\n\r\/]+)[^\n\r]*/g,
		`
<div id="$1">$1</div>
<script>
StackBlitzSDK.embedProjectId('$1','$1',{ openFile: 'index.html', theme: 'light', width: "100%", height: "50%", hideExplorer: true, hideNavigation: true, forceEmbedLayout: true, clickToLoad: true, view: "editor" });
</script>`)
	}
	
	let toc = []
	let renderer = new marked.Renderer();
	let heading = renderer.heading.bind(renderer);
	renderer.heading = function(text, level, ...args) {
		const html = heading(text, level, ...args)
		const match = /id="(.+)"/gm.exec(html)
		if (match && match.length > 1 && level < 3) {
			const id = match[1]
			console.log(text, level, id)
			toc.push({
				level: level,
				text: text,
				id: id,
			})
		}
		return html
	}
	marked.setOptions({
		renderer: renderer,
		highlight: function(code, lang) {
			return hljs.highlight(hljs.getLanguage(lang) ? lang : 'plaintext', code).value;
		}
	});

	meta.body = marked(meta.src);
	meta.toc = toc.length > 1 ? marked(toc.map(item => `${"  ".repeat(item.level-1)}- [${item.text}](#${item.id})`).join("\n")) : "";
	console.log(meta.toc)

	let html = template(fs.readFileSync(meta.template, "utf8"), meta);

	const writename = `${file.name}.html`
	const writepath = path.join(__dirname, writename)
	fs.writeFileSync(writepath, html)
	return writename;
}

function generateAll() {
	console.log("written:", fs.readdirSync(server_path, "utf8").map(file=>path.parse(file)).filter(file=>file.ext==".md").map(generate))
}
generateAll();


// watch for file changes:
fs.watch(server_path, (event, filename)=>{
	console.log(event, filename)
	let file = path.parse(filename)
	if (file.ext == ".md") {
		console.log("generating", file)
		generate(file);
		send_all_clients("reload")
	} else if (filename == "template.html") {
		// rebuild everything:
		generateAll()
	}
})

// start a little server:

const app = express();
app.use(express.static(public_path))
app.get('/', function(req, res) {
	res.sendFile(path.join(public_path, 'index.html'));
});

//app.get('*', function(req, res) { console.log(req); });
const server = http.createServer(app);
// add a websocket service to the http server:
const wss = new WebSocket.Server({ server });

// send a (string) message to all connected clients:
function send_all_clients(msg) {
	wss.clients.forEach(client => {
		try {
			client.send(msg);
		} catch (e) {
			console.error(e);
		};
	});
}


// whenever a client connects to this websocket:
wss.on('connection', function(ws, req) {
	console.log("server received a connection");
	console.log("server has "+wss.clients.size+" connected clients");
	
	const location = url.parse(req.url, true);
	// You might use location.query.access_token to authenticate or share sessions
	// or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
	
	ws.on('error', function (e) {
		if (e.message === "read ECONNRESET") {
			// ignore this, client will still emit close event
			console.error("websocket ECONNRESET: ", e.message);
		} else {
			console.error("websocket error: ", e.message);
		}
	});

	// what to do if client disconnects?
	ws.on('close', function(connection) {
		console.log("connection closed");
        console.log("server has "+wss.clients.size+" connected clients");
	});
	
	// respond to any messages from the client:
	ws.on('message', function(e, isBinary) {
		if (isBinary) {
			// get an arraybuffer from the message:
			const ab = e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);
			console.log("received arraybuffer", ab);
			// as float32s:
			//console.log(new Float32Array(ab));
		} else {
			e = e.toString()
			console.log("message", e)
		}
		// echo back:
		ws.send(e);
    });
});

const nets = networkInterfaces();
const selfIPs = []
const results = Object.create(null); // Or just '{}', an empty object
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
			selfIPs.push(net.address)
        }
    }
}

server.listen(PORT, "127.0.0.1", function() {
	console.log(server.address())
	//console.log(`server listening on http://${server.address().address}:${server.address().port}`);
	console.log(`server listening on http://localhost:${server.address().port}`);
});
