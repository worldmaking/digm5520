# Node.js

Node.js was designed to support scalable network applications. Initially conceived as a *server-side* engine, it has grown to become a fantastic environment for desktop console-based scripting in general. 

> Actually, these course notes were generated using Node.js!

- Tutorial/guides: [https://nodejs.org/en/docs/guides/](https://nodejs.org/en/docs/guides/)
- API: [https://nodejs.org/dist/latest-v14.x/docs/api/](https://nodejs.org/dist/latest-v14.x/docs/api/). 
  


## Installing

- Download and install Node.js from [https://nodejs.org/en/](https://nodejs.org/en/) -- recommend the most recent "LTS" edition
- I recommend Visual Studio Code as an editor -- it has an integrated terminal, is consistent between Mac and Windows, and has good Javascript support built in. Get it from [https://code.visualstudio.com/download](https://code.visualstudio.com/download)


## Using Node.js

Look at the API again. Notice some of the features: File System/Path, OS, Timers, HTTP(S), etc. 

A core concept is that it is **event-driven**: responding to network, file, sub-processes, and many other events and data streams via callback functions.  For example, look at [`fs.readFile()`](html#fs_fs_readfile_path_options_callback). But many offer non-event-based equivalents, such as [`fs.readFileSync()`](https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_readfilesync_path_options).

You can run Node.js as an interactive interpreter (REPL = Read Eval Print Loop, a basic conversational model dating back to teletype days), simply with `node` on the console. Type in an expression, it will print the result. 

But most of the time Node is used to run a main script, invoked with the filename. Let's make a simple Node.js script. We can use VS Code (integrated file editor & terminal, with good default syntax colouring). A minimal script:

```javascript
// save as `index.js`
console.log("hello")
```

`node index.js` will run it.  (Hint, tab-complete)

How about something dangerous?

```js
// load in the "fs" (file system) module, so that we can use its API
const fs = require("fs");

// 1st arg is the file name/path
// 2nd arg is the file encoding. Use "utf8" for most text files
let content = fs.readFileSync("index.js", "utf8")   

console.log("Know thyself:")
console.log(content)

// as a risky demo, let's rewrite our own file!
// using the `` backtick quotes here for a multi-line string
// it also allows string interpolation (aka quasiquoting) via ${expr}
content = `
console.log("I repeat myself when under stress,");
${content}
`
fs.writeFileSync("index.js", content, "utf8");
```

Run a few times. (Hint, up arrow)


## NPM

Notice that we use `require` to load in modules (to make new functions available to our script). The "fs" module is one of the few modules that comes with Node.js, but there are many, many, more that can be downloaded and installed. 

One of the most remarkable features of Node.js is the ["Node Package Manager" (NPM)](https://www.npmjs.com/), a collection of a million libraries -- the single-largest open-source package manager in the world, underlining the dictum that "anything that can be written in Javascript eventually will". NPM is installed along with Node.js. 


### Package.json

To start a new project, usually it's a good idea to run `npm init`. It will ask you for some parameters; I recommend changing the version to 0.0.1. Others you can go with the defaults usually. This will create a file called `package.json` which stores all your configuration for the project, including library dependencies, start scripts, etc. 

Typing `npm start` into the terminal should now run your script.

### Live coding tip:

`npm install -g nodemon` then `nodemon index.js` to reload the server after each edit.

## Express

To add a library, such as [express](https://www.npmjs.com/package/express), simply:

`npm install --save express`

This will place the library folder `express` in a `node_mmodules` subfolder; and it will add the dependency to `package.json`. That way, if someone else was to check out your git repository, they could simply run `npm install` and it would download `express` for them too. 

Express itself is one of the popular web server frameworks -- it makes it very easy to host html pages from Node.js. 

```js
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
```

To serve HTML pages, there's quite a bit of plumbing needed in terms of formatting messages, but fortunately [`express` makes this very easy](https://expressjs.com/en/starter/static-files.html):

```js
// assumes 'app' was created as above
// assumes 'public' is a subfolder relative to index.js
app.use(express.static('public'))

// alternatively, try with path.join(__dirname, "public")
// where const path = require("path"); Node utilities for resolving filepaths
// and __dirname is the path to the folder where index.js lives
```

Create an `index.html` in the /public folder, and add the basic html5 template:

```html
<!doctype html>  
<html lang="en">  
<head>
<meta charset="utf-8">  
<title>My page</title>  
</head>  
<body>

HTML objects go here.

<script>
// Javascript code goes here.
// (or link to an external 'js' file using '<script src="myscript.js"></script>')
</script>
</body>  
</html>
```

Great -- now you can see your page at localhost:3000 -- and anyone on your local network can see it too, so long as they know your machine's IP address (or possibly machine name). E.g. try it on your phone. 

Google: `what is my ip?`

Or `ifconfig`/`ipconfig` in the terminal. 

To make it visible beyond the local network, on the internet as a whole, you may need to configure your router quite a bit. But it's probably much simpler to set up a free account on a service like [Heroku](#heroku). 

## WS

Serving HTML pages is fine enough for passive experiences, but what if you want something more dynamic -- where the browser and the Node 'server' are talking to each other continuously? Here, [WebSockets](https://en.wikipedia.org/wiki/WebSocket) can help. They are a bi-directional message-passing network protocol (not the only such thing, but a very commonly-supproted one) which can sit upon the HTTP protocol. It works on most browsers already.  To use them in Node.js, we need another library. [Try this one](https://github.com/websockets/ws):

`npm install --save ws`

And in our `index.js`:

```js
const ws = require('ws');

//... and after we've set up our 'app' server:
// add a websocket server for continuous communication with clients:
const wss = new ws.Server({ server });
// handle each new connections from a client:
wss.on('connection', function(client) {
	console.log("I got a connection!");
});
```

Meanwhile, in the browser ("client") javascript code, add some code to try to connect to this server: 

```js

// connect to websocket at same location as the web-page host:
const addr = `ws://${window.location.hostname}:${window.location.port || 80}`
console.log("connecting to", addr)

// this is how to create a client socket in the browser:
let socket = new WebSocket(addr);

// let's know when it works:
socket.onopen = function() { 
	// or document.write("websocket connected to "+addr); 
	console.log("websocket connected to "+addr); 
}
socket.onerror = function(err) { 
	console.error(err); 
}
socket.onclose = function(e) { 
	console.log("websocket disconnected from "+addr); 
}
```

Assuming this hand-shaking works, we can start adding some conversational back & forth. In the client, let's tell the server if our mouse is moving:

```js
document.addEventListener("pointermove", e => {
	// is the socket available?
	if (socket.readyState !== WebSocket.OPEN) return;

	// we can send any old string:
	socket.send("boo!")
});

socket.onmessage = function(msg) {
	console.log(msg.data);
}
```

And, in the server, we can make a reply. Now here we have to be more careful: the server might have connections to MANY clients at once, so we need to handle it *inside* the wss.on('connection') handler:

```js
wss.on('connection', function(client) {
	console.log("I got a connection!");
	// all per-client code goes here now.

	client.on('message', msg => {
		console.log("I got a message!", msg);
		
		// reply:
		client.send("who?")
	});
});

// to send a message to *everyone*:
function sendAllClients(message) {
  wss.clients.forEach(client => {
  	client.send(message);
  });
}
```


### Complex data on websockets

To send more structured, arbitrary data back & forth, we can encode it using JSON:

```js
// most js objects can be encoded as JSON
// except for functions, complex structures that contain multiple references to the same object, or binary arrays, etc.
let obj = { 
	a: ["complex", "object"],
	is: { fine: 2 },
	encode: "as json"
}
let str = JSON.stringify(obj)  // this is the compact version
//let str = JSON.stringify(obj, null, "  ") // human-readable version
console.log(str) // -> suitable for sending on a websocket

let obj1 = JSON.parse(str) 
console.log(obj1) // it's a js object again! 
```

You could even look at the 1st character of a message string (`substring(0,1)`) and see if it `== "{"` to detect a potential JSON-encoded message.

### Binary data on websockets

Sometimes you want to send a LOT of numbers (e.g. an array of sensor measurments, an image, etc.); in this case, using an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) would make more sense. We can do this too. We just need to do a couple more things:

```js
socket.binaryType = 'arraybuffer';

socket.onmessage = function(msg) {
	if (msg.data instanceof ArrayBuffer) {
	    // do stuff with msg.data
	    console.log("ws received arraybuffer of " + msg.data.byteLength + " bytes")
	} else {
		// as before
	}
}
```

Similarly in the server:

```js
// before calling socket.open():
socket.binaryType = 'arraybuffer';

client.on('message', msg => {
	msg.buffer
})
```

Your server probably wants to maintain a list of clients (sessions) data. It might collect updates from each client, merge them into a combined "scene" representation, and broadcast that scene to all clients.

You might need some way of uniquely identifying each client, so that they can render their own data locally rather than waiting for the server reply.

You could store the scene data into a file (e.g. JSON, or binary), so if the server crashes, you can re-open it and continue where it left off.

## Writing your own modules

You can write your own JS modules very easily. It's a good idea if you want to package up some code that will be re-used in many projects. 

It can also be a good way to break up a complex project into smaller components that are easier to work with. 	

`require` can take a relative path, e.g. `require("./mylib")` or `require(path.join(__dirname, "mylib"))` will both find a `mylib.js` in the same folder. 

There are some standard paths that `require` will always look into -- you can check out `module.paths` to know what they are. 

In the code of a module, we declare what it 'exports' to the `require()` call via `module.exports`. Usually it looks like this:

```js
// save as ultimate.js

// module.exports can be a function, an object, an anything really.
// objects make sense when exporting an API:
module.exports = {
	question: "what is the meaning of life?",
	answer: 42,
}
```

```js
// save as test.js

const ultimate = require("./ultimate")

console.log(ultimate.question)
console.log(ultimate.answer)
```

----

## Github

One of the most widely-used platforms for working on code bases in teams, built upon `git`, a technology for versioning, merging, and forking code. 

- First you need to install `git`, [tutorial here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [first time setup tutorial](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- Sign up for an account on [Github](https://github.com) and link your SSH keys; [SSH set up tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [tutorial on adding SSH key to github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Github Pages

One nice feature about github repositories is that, if you create a branch with the specific branch name `gh-pages`, it will automatically turn that into a static public website. (Static means that there is no active server code, only fixed files like images, HTML, etc.) 

> E.g. if your github username is `arthurdent` and your repo name is `golgafrincham` then your `gh-pages` branch contains a file called `slartibartfarst.html`, then it will be visible at https://arthurdent.github.io/golgafrincham/slartibartfarst.html. 

A particularly useful thing about this is that github pages are CORS-enabled, which means, you can load them from another website without the browser blocking them for being on a different domain.  So this can be a good way to store GLTF models, image textures, etc. that can be accessed from another site such as Codepen, Stackblitz, etc. 

Note however that there is a 25mb size limit on github pages. 


## Heroku

Heroku provides server space and bandwidth with the ability to run Node.js under a flexible and powerful control panel. One nice thing is that, if you have set up a Github account, you can link a github repository to a Heroku site, so that each time you push to your github repository, it automatically updates and reloads the web server. 

- [Sign up here](https://signup.heroku.com)
- It gives you 550 free "dyno" hours per month. 
- [Getting started guide](https://devcenter.heroku.com/categories/nodejs-support)
- [How to link to github](https://devcenter.heroku.com/articles/github-integration)

One unusual quirk: Heroku sites are secure (https) by default, even if you set them up using `http` rather than `https`.  This is good for us: WebXR requires an https connection. 

Here's a more involved example that should work both on localhost and Heroku:

```javascript
// internal modules:
const fs = require('fs');
const path = require("path")
const url = require('url');
const assert = require("assert");
const http = require("http");
// external modules:
const express = require("express");
const ws = require("ws");

// this will be true if this server is running on Heroku
const IS_HEROKU = (process.env._ && process.env._.indexOf("heroku") !== -1);
// what port should this server be accessed on?
const PORT = process.env.PORT || 3000
// where static HTML etc. files are found
const PUBLIC_PATH = path.join(__dirname, "public")


// create an Express app:
const app = express();
// serve static files from PUBLIC_PATH:
app.use(express.static(PUBLIC_PATH)); 
// default to index.html if no file given:
app.get("/", function(req, res) {
    res.sendFile(path.join(PUBLIC_PATH, "index.html"))
});
// uncomment this to allow cross-domain access (CORS):
// app.use(function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	return next();
// });

// create the primary server from this app:
const server = http.createServer(app);

// add a websocket to it:
const wss = new ws.Server({ server });
// handle websocket connections and events from clients:
wss.on('connection', (socket, req) => {
	console.log("received a new websocket connection to", req.url)
	
	socket.on('message', (msg) => {
		console.log(msg)
		// send it back:
		socket.send(msg)
	});

	socket.on('error', (err) => {
		console.log(err)
	});

	socket.on('close', () => {
		console.log("client closed socket")
	});
});

// start the server:
server.listen(PORT, function() {
	console.log("\nNode.js listening on port " + PORT);
});
```


## Native modules

Modules can also be written in C or C++ ("native code"), which is what most of Node's own libraries are written in.  Why?

- You want to hook your script into another C++ library or code base (e.g. binding to OpenGL). Most operating system frameworks and APIs are C-based, as are most device drivers etc. For example, I have worked on node modules for [Kinect sensors, VR headsets (and gloves), as well as OpenGL, native windowing](https://github.com/worldmaking/node-gles3), and so on, which all meant mapping to a C/C++ SDK. 
- You want to write some routines that run much faster. C++ is usually a lot faster than JS for large scale numeric operations (though this can depend on a lot of factors -- see the [benchmarks game here](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/node-gpp.html), which shows 2-4x speedups in many tests). For example, in some of the Artificial Nature exhibits, I have written some parts of the simulations in JS, but others, such as 3D fluid and other physics simulations, were C++ native modules. 

It's a lot more layered than just writing some JS, but after a while it gets easier. [See notes here](https://github.com/worldmaking/worldmaking.github.io/wiki/Node.js-native-C-modules) 
