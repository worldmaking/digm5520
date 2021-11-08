# Spatial Computing in Responsive Environments

*Also known as "Generative Art in Mixed Reality" (both titles are used in York U course catalogs)*

**Synopsis:** This practice-based course develops computationally literate art practices addressing 3D spaces of mixed reality as creative media, applying the interactive malleability of computation to understand, create and imagine new kinds of artistic, responsive, and generative worlds. That is, it addresses the spatialization of interactive computation, such that every part of peripersonal space around participants, in physical and virtual worlds, is rife with responsive behaviour.

[Zoom meeting](https://yorku.zoom.us/j/94516869391?pwd=cWEyN0JIUFAvYU9xdmVmUXBhdXlxdz09), Tuesdays, 1pm, beginning September 14.

<!-- **[Class video recordings](https://drive.google.com/drive/folders/1ugOFYW7sSkKypBPf_m7uCXDhz0GX8Cg8?usp=sharing)** -->

[Course information](course.html)

Instructor: [Graham Wakefield](https://ampd.yorku.ca/profile/graham-wakefield/) grrrwaaa at york u dot ca

![mixed](img/mixed2.png)

[2021 Project: WebXR Studio](project.html)

<!-- ![inhabitat](img/inhabitat.png) -->


| Week                        | Class   | Due | 
| :--                         | :--     | :-- | 
| Sep 14: [Week 1](#week-1)   | [Overview](course.html), [Project](project.html), [Three.js](three.html) | [Survey](https://forms.gle/aMokgKGcSbigzbwf6) 
| Sep 21: [Week 2](#week-2)   | [Intro to VR](vr.html), [Project Planning](project.html), [Three.js topics](three.html) | Three.js sketches; questions |
| Sep 28: [Week 3](#week-3)   | Development sprint | Project prototypes show & tell, questions/roadblocks/etc |
| Oct 05: [Week 4](#week-4)   | Dev Milestone MVP: A telematic world | MVP Milestone |
| Oct 12: [Reading Week](#reading-week)   | Team planning | Project updates |
| Oct 19: [Week 5](#week-5)   | [Node.js intro](nodejs.html) | Project reports |
| Oct 26: [Week 6](#week-6)   | Development sprint | Project updates |
| Nov 02: [Week 7](#week-7)   | Dev Milestone: Improvising worlds | Milestone |
| Nov 09: [Week 8](#week-8)   | Generative Art, Artificial Nature | Project updates |
| Nov 16: [Week 9](#week-9)   | Tech topic | Project updates |
| Nov 23: [Week 10](#week-10)   | Development sprint | Project updates |
| Nov 30: [Week 11](#week-11)   | Dev Milestone: Online Gallery | Milestone |
| Dec 07: [Week 12](#week-12)   | Exhibition Opening | Launch |
| Dec 14:  | | Final Paper |

-----

### Week 1

- [Course overview](course.html)
- This year's project: ["WebXR Studio"](project.html)
- **Break:** **[Please complete this survey](https://forms.gle/aMokgKGcSbigzbwf6)**
- Sign up for a free account on [Github](https://github.com) (if you haven't already got one), and then connect it to [Stackblitz](https://stackblitz.com). 
- First coding with [Three.js](three.html)
- Homework: 
  - Build your first Three.js scene! Use the [Three.js docs](https://threejs.org/docs/) to explore the possibilities
  - [Read: Ivan Sutherland - The Ultimate Display (1965)](https://my.eng.utah.edu/~cs6360/Readings/UltimateDisplay.pdf) <br> [Listen: Jaron Lanier Voices of VR Podcast](https://voicesofvr.com/600-jaron-laniers-journey-into-vr-dawn-of-the-new-everything/)
  - [Please complete this survey](https://forms.gle/aMokgKGcSbigzbwf6)!

- [Zoom recording](https://yorku.zoom.us/rec/share/zBHcbySo3OQ2TbiUDEETjebBYdTk1zxvIJhkL1FcOJkWEW_v3uITc4WI6Mcofc83.0avGR5hcfZM4p9TY)


### Week 2

- [An introduction to VR](vr.html): history, psychology, technology, art
- Discussion incl. reading/listening materials
- Project planning
- Coding
  - [https://threejsfundamentals.org/](https://threejsfundamentals.org/) -- great resource, if slightly out of date on some aspects
  - [How to update things](https://threejs.org/docs/#manual/en/introduction/How-to-update-things)
  - [How to remove things](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)
  - More [Three.js](three.html)

**Homework**

- Please update the [shared google brainstorm doc](https://docs.google.com/document/d/1328XZqjSkB2JyqNE_EtBIMScVHjwK7qVT0Jdyfvg14A) with your name to identify what area you will focus on over the week. 
- You can coordinate in teams via Discord!
- Please work on at least one of these:
  - Code: building up a proof-of-concept sketch for aspect of the topic
  - Survey: collecting reference URLs for existing example scripts, or external libraries, that can respond to the challenge
  - Research: collecting ideas and/or related work references that can inform this aspect
- Please add to the shared doc links to any codepen or stackblitz scripts, URLs for libraries, or for reference materials as appropriate.
 
- [Zoom recording](https://yorku.zoom.us/rec/share/kkrFcJ311TJegl8JulTeeJluena97W44i_onEIU_wWM1HpF4Io-TmOW-l39WqecF.VK4HRiseJ5WXRd2i)

## Week 3

**Development sprint**

- [Shared design doc]([shared google brainstorm doc](https://docs.google.com/document/d/1328XZqjSkB2JyqNE_EtBIMScVHjwK7qVT0Jdyfvg14A))

Graham's prototypes:
- [https://github.com/worldmaking/nodelab](https://github.com/worldmaking/nodelab) as a very simple demonstration of sharing multiple users' states. Set up as a re-usable script
- a more complex scene, linked to a github, at [https://stackblitz.com/edit/web-platform-re4a34](https://stackblitz.com/edit/web-platform-re4a34)
- (with Haru Ji, OCAD U): a pseudo-gallery hosting p5.js sketches at [https://stackblitz.com/edit/web-platform-mbcqax](https://stackblitz.com/edit/web-platform-mbcqax)

**[Zoom recording](https://yorku.zoom.us/rec/share/lncvLSsr9vPnSfWVPrOadR0O_O1bnsFGJjxCkW5fMDYuoO4REZypH4RWV8pWgMac.6VWYK_C_QJWP3UtT)**


### Week 4

**Milestone A: Minimum Viable Product**

**Development notes**

- **Basic object manipulation**
  - Three.js has a built-in [Transform Controls](https://threejs.org/docs/#examples/en/controls/TransformControls), though it is mouse-centric, and might not be that easy to port to VR
    - [Example](https://threejs.org/examples/#misc_controls_transform)
    - Any such interface that modifies the world, we will need to convert to creating Automerge patches so that world changes are shared.

- **Teleport**
  - [Nice tutorial here](https://ada.is/blog/2020/05/18/using-vr-controllers-and-locomotion-in-threejs/)

- **VR User interfacing**
  - [Basic hand input](https://threejs.org/examples/?q=xr#webxr_vr_handinput)
  - [Ray-based select & drag/orient with VR controllers](https://threejs.org/examples/?q=xr#webxr_vr_dragging)
  - [Hand painting](https://threejs.org/examples/?q=xr#webxr_vr_paint)

- **UI libs**
  - [Three Mesh UI](https://github.com/felixmariotto/Three-Mesh-UI)
    - Uses 3D objects, and nice SDF fonts, to build a UI piece by piece
    - Rich text, inline images; buttons, a floating keyboard!  But no sliders yet
    - Works without VR too
    - Many users, recent commits
  - [CanvasUI](https://github.com/NikLever/CanvasUI)
    - Uses an offscreen HTML5 Canvas to render elements, textured onto a plane in VR
    - Text, images, buttons, scroll, floating keyboard 
    - Last commit 11 months ago
  - Build our own based on CanvasTexture, as they did in [Building an in-game Editor](https://blog.mozvr.com/jinglesmash-editor/)
  - ~~[DatGUI VR](https://github.com/dataarts/dat.guiVR)~~
    - mainly a floating window with folders and **sliders**
    - Last commit 5 years ago :-(
  - ~~[VR UI](https://github.com/artflow-vr/vr-ui)~~
    - Discontinued. 

- **Scene as JSON**
  - [Three.js JSON scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4)
  - [Scene to JSON: call scene.toJSON()!](https://threejs.org/docs/?q=object3d#api/en/core/Object3D.toJSON)
  - [JSON to Scene](https://threejs.org/docs/#api/en/loaders/ObjectLoader)
  - [Very important: how to free memory!](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)
  - [Tutorial on cleanup](https://threejsfundamentals.org/threejs/lessons/threejs-cleanup.html)
  - [Minimal demo](https://codepen.io/grrrwaaa/pen/abwxdPg) -- loads a scene from JSON, then unloads it (freeing GPU memory) every second
  - Insight: it's not a simple problem. You have to manually track what images, textures, geometries, materials, (any others?) have been allocated on the GPU; and when they are to be unloaded, call `dispose()` on them. But only when no other element is referencing them anymore! 
    - If the entire scene is unloaded & recreated, this can be done by traversal of the root world object as in that codepen above.
    - If the scene is being modified incrementally, don't want to dispose a material if another mesh is using it. Possibly requires reference counting. 

- References
  - [Building an in-game Editor](https://blog.mozvr.com/jinglesmash-editor/)
  - [Progressive XR user interfaces](https://blog.mozvr.com/progressive-webxr-ar-store/)
  - [Getting VR headset orientation](https://stackoverflow.com/questions/65673273/access-vr-headset-orientation-in-three-js)

**[Zoom Recording](https://yorku.zoom.us/rec/share/gLAhfR4qzz9Ke7ZbEZ7anCLDoBoWON_fertY97l_lof-101oPBMxPgfrYbyHi-IK.GuoMIygWdfS04M6W)**

### Reading Week

**Homework:**

Please submit a report on your homeworks so far in the course. Please submit this report as a PDF by email to me, by **Friday October 15th**

The PDF should include a written section, and example links to code (codepen, stackblitz, github).

- The written section can be around 300 words (half a page or so) and should include the elements below. This written report contributes to the "Reporting & Discussion" section of the course [evaluation](course.html#evaluation):
  - Your student number and your name  
  - Which section(s) of the project you have been working on, and which sections you want to work on. You can identify your motivations or inspirations here. Was there a core question you wanted to address? Did you have an idea that you wanted to evaluate?
  - Explain in depth your implementation. How you have approached this: building proof-of-concept sketches, or exploratory experiments, or research into literature (written/online -- if so, please provide links), or design documents (if so, please provide a link!) Be sure to focus on the most complex, innovative, or otherwise interesting parts of the code, beyond what we have covered during class sessions.
  - Evaluate the results. Are there significant variable changes that can produce different behaviour? Did you try several variations of your system (if so, show them!) If you had an idea that you explored, but it didn't work as expected, show that too -- and offer your ideas about why you think it didn't. This is valid research! Note any specific challenges or roadblocks you have found along the way, and any solutions if you found them. This will help me coordinate content for the next weeks in the course. 
  - What you see as the next steps for this part of the project. Are there significant limitations that will affect designs going forward? 
  - Who you have been working with (if you have been collaborating) -- and if so, clearly identifying your contributions. 
- Links to your code. Code can be submitted as URL links to either Github, Codepen, or Stackblitz that you have created. Before submitting code, ensure that it meets all of the following formatting requirements. The code submissions contribute to the "Assignments" section of the course [evaluation](course.html#evaluation):
  - Put a block comment at the top of your code with the following information (that is, a multi-line comment starting with `/* and ending with */`).  
    - Your student number, your name, and a description of what the code demonstrates, and how to use it. If there are any specific variables that are worth modifying, please describe these too.
    - A description of the **idea** of the script and **why** it is valuable to the project, interesting, surprising, etc., and 
    - A description of the technical realization: **how** it works (or why it doesn't). Perhaps you tried a few different algorithms until it worked as expected? Then mention them!) If you were inspired by another system, mention it (with links). 
    - Ideas for future extensions or **where** it will integrate to the larger project. 
  - Format your code well:
    - Ensure that there are proper **comments** in the code. 
      - A good rule of thumb is that at least 30% of the lines in your script should be comments (not including the block comments at top & bottom); or another rule of thumb is to expect comments every 1-4 lines. 
      - Comments should actually illuminate the code meaningfully (e.g. "set x to 3" is NOT a useful comment for x = 3). Use the comments to say WHY. 
      - All functions should have a comment to say what they can be used for, what the arguments are expected to be, and what they will return.
    - Ensure that you use **meaningful variable names**: they should help describe what they refer to, as this makes code easier to understand.
      - Single-letter names are usually only used briefly.
      - Boolean variables tend to begin with "is" or "has" etc.
      - Arrays may use plural rather than singular names. Etc. 
    - Ensure you have properly **indented** your code. A lot of code editors can automatically format your code, which will solve this. Code that isn't indented properly is really hard to read, and can often lead you into to strange bugs. Being in the habit of frequently indenting properly helps avoid these bugs.

# Week 5

[nodejs.html](Introduction to Node.js, from zero to multi-user server)

[Zoom recording](https://yorku.zoom.us/rec/share/o5gXgDhqFig6pLtkftXr5d2aQoVzaP8LB8AwVpaF8UMrIV7rfysaPRbIe2kP0wjo.MIyDErTudxcIuZSh)

# Week 6

- Group work

# Week 7

- Development sprint
- Navigation example: [https://stackblitz.com/edit/web-platform-phnvvr](https://stackblitz.com/edit/web-platform-phnvvr)

Groups:
- Navigation/Avatar integration
  - Douglas, Martin, Nick, Jonathan
- Signals-to-mesh
  - Eyal, Grace, Kavi, Kwame
- UI-in-three
  - Faadhi, Filiz, Jamie, Jorge
- Generative geometry & agents
  - Andrew, Hrysovalante, Kimberly

**[Zoom recording](https://yorku.zoom.us/rec/share/iJkXi_Y6Dpn8eNy11AmHjLMTivpMDRueh5nKSkoItW-FAJyy8HL6FH2OJ2kehv8E.YzjqQLOQPgaaLiwH)**

# Week 8

**Generative buffer geometry**

In Three.js, a Mesh is a combination of a Geometry and a Material. 
- The Geometry defines the positions of vertices of a shape, as well as its texture coordinates, normals, etc. It is stored on the CPU, and gets uploaded to the GPU when wrapped in a Mesh. 
- The Material defines how the Mesh is rendered to the screen, including handling lighting, shadows, texturing, etc.

There are many kinds of Geometry (search "Geom" in the Three.js docs), such as BoxGeometry, OctahedronGeometry, ConeGeometry, etc. They are all subclasses of the more generic [BufferGeometrry](https://threejs.org/docs/?q=geom#api/en/core/BufferGeometry). That means, anything you can do with a BufferGeometry, you can do with a BoxGeometry, etc., and they share the same underlying structure of data. 

It also means, you can create your own geometries directly by manipulating a BufferGeometry.

Here's a minimal example:

```javascript
// create an empty geometry
const geometry = new THREE.BufferGeometry();

// create an array to hold our point data:
const pts = []
// fill it with random values:
for (let i = 0; i < NUM_POINTS; i++) {
  let x = Math.random() - 0.5;
  let y = Math.random() - 0.5;
  let z = Math.random() - 0.5;
  pts.push(x, y, z); // add to end of the array
}
// create a raw memory block of floating point numbers for the vertices 
// (because that's what BufferGeometry wants)
// fill it with the data from our javascript array:
const vertices = new Float32Array(pts);
// add an "attribute" to the geometry, in this case for the vertex "position"
// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// for simplicity, we'll render with points:
const material = new THREE.PointsMaterial({
  color: 0x888888,
  size: 0.02
});
const points = new THREE.Points(geometry, material);
scene.add(points);
```   

Now you can create any geometric shape if you know the mathematics/algorithm to specify the vertex positions!  (For example, how about trying one of the parametric geometries on Paul Bourke's [amazing website](http://paulbourke.net/geometry)).


Alternatively, rather than building a geometry from scratch, you can take any existing geometry constructor (such as `CylinderGeometry`) and then modify the attributes it already has. Use `console.log()` to inspect the geometry and its attributes to understand them first. 

For example, you can access the raw positions array under `geometry.attributes.position.array`. After modifying it, you need to tell Three.js to update the GPU using `geometry.attributes.position.needsUpdate = true;`

**Parametric GUI**

For a parameteric geometry, you'll likely want to be able to tweak the parameters to see how they change the shape. 

For prototyping, you can use the excellent `dat.GUI` library:

```javascript
import dat from "https://cdn.skypack.dev/dat.gui";
const gui = new dat.GUI()
```

Any object members can be added to the gui, along with min/max ranges, step sizes, and a callback when the parameter changes. 

```javascript
const params = {
  a: 0, b: 1
}
// add params.a to the GUI:
// minimum=0, maximum=10, step=1
// call function "rebuild" when this changes: 
gui.add(params, "a", 0, 10).step(1).onChange(rebuild)
```

Here of course, function `rebuild` must be defined, and would reconstruct geometry by modifying its attributes. For example:

```javascript
function rebuild() {
  let positions = mesh.geometry.attributes.position.array;

  // modify the values of `positions` 
  // using the values of `params` parametrically
  // ... insert your algorithm here ...

  // let Three.js know it needs to upload these to the GPU:
  mesh.geometry.attributes.position.needsUpdate = true;
}
```

For example: 

https://codepen.io/grrrwaaa/pen/zYdjPNm?editors=0010

**Surfaces**

To draw surfaces rather than points, it gets a little more complex. Surfaces are made of triangle faces. 

The simplest way to do this is to insert positions in triplets, for each point of each triangle face. Example: https://threejs.org/examples/#webgl_buffergeometry

This is quite wasteful, since for most surfaces, points are shared between faces. So, another way to do it is to fill the positions array with the points needed, then fill another array (called the Index) with triplets of integer indices for each triangle face. Example: https://threejs.org/examples/#webgl_buffergeometry_indexed

Additionally, for any surface lighting to work, you will need to add normals for each vertex.  This works similar to creating the `position` attribute, but with a new buffer attribute called `normal`: `geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );`  This means you need to know the algorithm that can compute the correct normal direction for your parametric geometry!
Fortunately, Three.js has a fallback to automatically compute these normals: you can just call `geometry.computeVertexNormals()`

Example: 

https://codepen.io/grrrwaaa/pen/gOxzzPx?editors=0010 

**Instanced mesh**

Drawing lots of different meshes in a scene can quite quickly become expensive on the GPU, but there's a fantastic method to speed this up when most of the objects have the same basic geometry, such as a field of trees, asteroid field, etc, using what's called "GPU instancing". Here, the GPU uses the same basic geometry and material for each "instance", but with a few small variations such as the world matrix transform (position, rotation, scale) or base material color.

In this case we can use [InstancedMesh](https://threejs.org/docs/?q=instan#api/en/objects/InstancedMesh).

For example: 

https://codepen.io/grrrwaaa/pen/Vwzxxgr?editors=0010

**Agents**

Instancing can be particularly useful for a multi-agent system, where several "agents" are moving around the space according to internal rules, and often look very simliar to one another (e.g. NPCs). 

In general, I recommend separating out the simulation/control logic entirely from the rendering code. This is helpful when scaling a system up, e.g. for distributed applications. This means, having one data structure representing the state of the population, and a completely different data structure (such as our InstancedMesh) representing how to draw them.  Similarly, one function that handles the simulation updates, that makes no direct contact with the GPU, which we can call `update()` or `simulate()` for example.

Example: 

https://codepen.io/grrrwaaa/pen/xxLjzqX?editors=0010


**Refactoring**

Refactoring mostly means shuffling things around without changing the actual behavior, but making it much easier to adapt and further develop the code. It's a bit like driving away from the destination in order to get on a highway that will get you there faster. Refactoring can also make it easier to read code (but not always). Basically, humans have a limited cognitive range, can only hold a few things in mind at once, and once a script gets over a few hundred lines of code, it can quickly seem impenetrable and impossible to modify. Refactoring can reduce this size and complexity be abstracting (hiding) internal steps. 

Caveat: refactoring can be a lot of work, with no actual gain, until you use the freedom it provides. It's not always a good idea to refactor.

- Rule #1: Don't type code twice.  ("Abstraction", and DRY -> Don’t Repeat Yourself)
  - If you use the same number in two places, you probably want to turn that into a variable (or `const` variable if it never changes). 
    - Maybe it is global, and should sit near the start of the script. Maybe it's an object parameter for a `dat.GUI` interface. 
  - If you use the same segment of code in two places, maybe it should be turned into a function. (If you use it in four places, it should definitely be a function). 
    - "Helper" functions should be very small & generic. They shouldn't rely on global variables, other than constants, but they probably use other functions.  Pass in only the state the function needs to do the job. For example: 
      `function pick(list) { return list[Math.floor(Math.random()*list.length)]; }`
    - Another common "helper" type of function is a "Factory": it wraps up a bunch of steps that result in the construction of some object, which it returns. Often you pass in a configuration object as an argument to the factory function.   
    - Helpers and factories can often become the basis of a library or module of re-usable utilities, such that you can call upon the behaviour without needing to look at the internals. 
  - If the same variables tend to get used together, you might want to wrap them in an Object, so that you can pass them around under one name. A good example here is in representing an agent in a simulation. Each agent is an object that keeps track of its position, orientation, and other internal state. 
    - Many such objects could be stored in a list (like a population of agents). 
    - If there are helper functions that apply only to these objects, you could put the functions inside the objects themselves (as "methods"), in which case they can use the special variable `this`
    - At a certain point, it *might* make more sense to turn these into classes. (Classes are basically objects with methods, but have a couple of syntax short-cuts that make them a bit cleaner.)

- Rule #2: Limit dependencies
  - Dependencies are what prevent you from lifting code from one script and dropping it into another -- anything that's missing to prevent the code from working is a dependency, and limits portability, and makes exploratory coding more difficult. 
  - Among this is avoiding lots of global variables. A really nicely designed app will have very few global variables, with data organized structurally, and good separation between general library code and application-specific data. 
  - If you have things that really need to be global, 
    - are they parameters? Can you stick them in a shared Parameter structure?
    - are they behaviours? Can you put them in a library of helpers, or as methods of an object/class?
  - As much as possible, functions should read or write data outside of their scope. (For object methods, this means outside of the object). Anything else needed should be passed in as an argument. 

- Rule #3: Declarative > Functional > Procedural
  - The easiest code to write is procedural: do this, then this, exactly how I say. This is also the hardest to modify, as it is super-specific and brittle.
  - Refactoring into more generic functions makes it easier to move the building blocks of an algorithm around, or stringing together processes in different ways. Ultimately this can lead to functions of functions of functions, which can start to get a bit difficult to read. 
  - Even better is refactoring into *data structures*. The more you can define what you want to do in a plain-old-data format (like JSON), the more freedom you have to modify the structure and the result, and the easier to make something distributed, serializable, and all other things that data-oriented processing makes possible. This is why factory functions, iterators and parsers are so useful. 
  - Node graph interfaces are essentially declarative structures that determine how functions are wired up. 

- Other rules: 
  - Use meaningful variable & function names. Longer names are better than confusing names. 
  - Use comments to remind a future self what this actually does (and what it expects, what will break it, etc.)!
  - Single Responsibility Principle: each function should do one task
  - Avoid impure functions when possible (impure means the function modifies some data that wasn't passed to the function as an argument)
  - Test often: Make sure when you refactored, it still works! Try not to make too many changes at once. 


### Classes

I don't recomend going too deep into this, but there are some times where this is a good interface:

```javascript
// notice that a class definition isn't like an object
// no commas, no colons, etc.
class Agent {

  // define properties first:
  pos = new THREE.Vector3();

  // "constructor" is a special property:
  // what happens when you say `new Agent(x, y, z)`
  constructor(x, y, z) {
    this.pos.set(x, y, z);
  }

  // most other properties are methods:
  moveX(dx) {
    this.pos.x += dx;
  }
};

let a = new Agent(1, 2, 3);
console.log(a.name) // -> "Agent"
a.moveX(1);
```

There's a lot more syntax sugar available (getters, setters, generators, static methods, private fields, subclassing, ...), see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes



<!--

Github team: https://github.com/orgs/worldmaking/teams/webxr-nodelab
- add all users who need to work on the server

SERVER

https://github.com/worldmaking/nodelab is the repo that automatically pushes to https://alicelab.herokuapp.com/ 
Note that pushes can take a few minutes to propagate

Heroku has a 500mb limit
Heroku doesn't handle github submodules correctly, so we can't go that way.

Heroku *could* be allowed to set up remote access by enabling CORS


-->


<!--




- All about VR and [WebXR](webxr.html) 



Technical baseline / template / engine to provide all the basic requirements for a project
High-level “blocks” (education materials, and/or components) to build common needs quickly
Server compute to negotiate shared experiences. Suggest Node.js capability to keep things in a single language.
Now WebXR requires secure HTTPS hosting and other security settings (e.g. allow=”vr” on iframe). That means we need a bit more framing setup to get custom projects going. (These challenges also hold for anything that is exporting to web (unity etc.))
How to hyperlink between sites (even on different domains) without exiting VR? (This was possible in WebVR, haven’t tested WebXR yet)
Hot loading assets is fairly straightforward, but how to hot-load code in an XR session? Basic capacity exists in JS (new Function etc.) but some software design needed. 
Assets have to download / stream to client. Better to structure experience such that waiting is minimized, and background load things that aren’t needed immediately. (Like 90’s web). 

-->
<!--


## What is Generative Art? 

*...and Generative Music, Generative Architecture, etc...*

> Generative Art refers to any art practice where the artist uses a system, such as a set of natural language rules a computer program, a machine, or other procedural invention, which is then set into motion with some degree of autonomy to or resulting in a complex work of art (Philip Galanter).

> "Generative art is a term given to work which stems from concentrating on the processes involved in producing an artwork, usually (although not strictly) automated by the use of a machine or computer, or by using mathematic or pragmatic instructions to define the rules by which such artworks are executed." Adrian Ward, 1999, on the eu-gene mailing list welcome page.

> "In essence, all generative art focuses on the process by which an artwork is made and this is required to have a degree of autonomy and independence from the artist who defines it." [McCormack, Jon, Oliver Bown, Alan Dorin, Jonathan McCabe, Gordon Monro, and Mitchell Whitelaw. "Ten questions concerning generative computer art." Leonardo 47, no. 2 (2014): 135-141.](http://jonmccormack.info/wp-content/uploads/2012/10/TenQuestionsV3.pdf)

> See [more definitions here](http://www.generative.net/read/definitions)

**Q:** How do you make art outside your own control?

**Autonomous systems** used in generative art have included:

- sets of rules or procedures: algorithms and games
- geometries and symmetries
- abstract mathematical or logical models
- mechanics and kinetics
- materials behaviors (such as fluid flow or chemical reactions)
- relationships and navigations in huge data-sets
- randomization, probability, statistics
- interactions between, and interpretations by, multiple agents

**Not just with computers.** Although "Generative Art" is often used to refer to computer-generated artwork that is algorithmically determined, the definition makes no reference of computers, and arguably generative artworks have existed throughout human history. Composers used strict rule systems (the counterpoint of Bach, the serialism of Schoenberg) as well as chance (the dice-game of Mozart and chance operations of Cage). Pointilism, cubism, and other abstractions in painting are rule-based constraints. Many art theorists refer to Sol LeWitt's textual instructions, to be carried out by others; a direction also explored in alternative scores in music. One might also mention kinetic sculpture and generative texts (particularly the Oulipo group), or the pattern-based arts of Islamic tiling and weaving, Celtic knots, and other traditional arts.

![Sol Lewitt #797 instructions](img/Lewitt-instruction2-420x315.jpg) ![Sol Lewitt #797 instructions](img/Lewitt-result2-420x315.jpg)

**Is all art generative?** The term generative is usually used for art in which these systems play a major role in the work, with significant autonomy from the artist's urges. **Q:** Is procedural content generation generative art?


**Computational technology revolutionized generative art.** The computer brings new ideas and possibilities that were previously been impossible or impractical to realise -- making it *qualitatively* different. Notably, a great deal of the earliest computer art was also generative. **Q:** Is generative art is one of the most essential forms of computational art? **Q:** What are the most singular features of computational media -- that is, what differentiates it from most other media?


### Complexity 

[Galanter, Philip. "What is generative art? Complexity theory as a context for art theory." In In GA2003–6th Generative Art Conference. 2003.](http://philipgalanter.com/downloads/ga2003_what_is_genart.pdf) Galanter locates generative art in terms of scientificy complexity theory, placing it at the peak of complexity in the order/disorder spectrum, where information processing is maximised, and both entropy and compressibility are minimized. This is comparable to the peak in physical complexity between orderly and chaotic matter, where the organizations of living systems are found. 

![Galanter Complexity Spectrum](img/galanter_complexity.jpg)


Please read these papers and formulate your thoughts and questions for next week. Two volunteers are needed to lead focused discussions on each of them. That means bringing some in depth insights drawn from the reading, and one or more questions to spark conversation in class about them.

	- [Sutherland, Ivan E. "The ultimate display." Multimedia: From Wagner to virtual reality (1965): 506-508.](http://worrydream.com/refs/Sutherland%20-%20The%20Ultimate%20Display.pdf). [Also here](reading/Sutherland - The Ultimate Display.pdf).
	- McCormack et al. addressed the field by proposing 10 questions for its future. [McCormack, Jon, Oliver Bown, Alan Dorin, Jonathan McCabe, Gordon Monro, and Mitchell Whitelaw. "Ten questions concerning generative computer art." Leonardo 47, no. 2 (2014): 135-141.](http://jonmccormack.info/wp-content/uploads/2012/10/TenQuestionsV3.pdf). [Also here](reading/TenQuestionsConcerningComputerGenerativeArt.pdf).

-->


![Coding](img/coding.png)
