
# Three.js

[Three.js](https://threejs.org/) is probably the widest-used library for working with GPU-accelerated 3D graphics in the browser. 

- [Documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- [Amazing collection of examples](https://threejs.org/examples/)

## Overview

Three.js builds upon the [WebGL](https://github.com/worldmaking/worldmaking.github.io/wiki/WebGL-notes) API available in recent browsers, which is built upon OpenGL, one of the oldest and most established 3D hardware graphics APIs. But whereas the WebGL (and OpenGL) APIs are relatively low-level and state-based, Three.js offers a more mid-level object-based interface, including a "scene-graph", "materials", and other elements you might find in a modern game engine. But on the other hand, unlike a game engine, we create a scene not through a drag & drop user interface, but by typing code (as we might with Processing or P5.js etc.) The structure of a Three.js code document might look something like this:

- Setup code to create/generate/load/define resources their properties
- An `animate()` function that defines the core animation loop, updating at 60fps (desktop) or higher (VR)
- Other event handler functions to deal with interaction etc.

At the heart of any Three.js project is an animation loop in which a `THREE.WebGLRenderer` takes a `THREE.Camera` and a `THREE.Scene` to actually draw to the screen. 

```javascript
function render() {
	// update members & properties of the scene here for animation
	// TODO

	// now render the scene:
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(render);
```

Before this loop there will be setup code to define the `renderer`, the `camera`, but most of all, the actual contents of the `scene`. The `scene` is much like the scene graph of game engines: a tree-like structure in which each node contains child objects. 

### Ontology

![overview](https://01.org/sites/default/files/resize/users/u71223/process-overview-530x275.png)

The `Three.js` ontology is roughly as follows:

- Renderer (`THREE.WebGLRenderer`)
  - Mostly static settings for rendering options, e.g. `antialias: true`
- Camera (`THREE.PerspectiveCamera`, `THREE.OrthographicCamera`, `THREE.StereoCamera`, etc.). For VR/XR we will always be using `THREE.PerspectiveCamera`.
  - There could be many cameras, but only one is used to render per frame
  - Camera is also an Object3D
- Scene (`THREE.Scene`) -- root object of a scene graph tree
  - There could be many scenes, but only one is used to render per frame
  - Every object in the tree inherits from the base class [THREE.Object3D](https://threejs.org/docs/index.html?q=object3#api/en/core/Object3D)
    - Has a pose (position/orientation/scale), children, parent, visible, etc. properties
    - can be an empty container (but better to use `THREE.Group` for that)
    - `.layers`: an object is only rendered if it has a layer tag in common with the camera. Also used to filter raycasting.
    - Static objects should set `object.matrixAutoUpdate  = false;`

  - Meshes (usually `THREE.Mesh`)
    - Geometry (THREE has lots of built-in geometry constructors and loaders
      - For procedural geometries use `THREE.BufferGeometry` (actually everything uses this under the hood). Geometry based on Javascript Typed Arrays -- more flexible, faster
    - Material (THREE has lots of built-in material types from `MeshBasicMaterial` and `MeshStandardMaterial` to customized `ShaderMaterial`)
      - Materials may use textures ("maps") for some of their surface details. 
        - For dynamic textures, keep setting texture.needsUpdate = true;
  - For many objects, use [THREE.InstancedMesh](https://threejs.org/docs/index.html?q=instance#api/en/objects/InstancedMesh), InstancedBufferAttribute, InstancedBufferGeometry, etc.
  - Lights (THREE has several light types to choose from, such as `HemisphereLight`, `AmbientLight`, `SpotLight`, `PointLight`, `DirectionalLight`, etc.
  - Possibly other scene entities
- For postprocessing, see [the docs](https://threejs.org/docs/index.html#manual/en/introduction/How-to-use-post-processing) -- but be careful, as many screen-space post-processing effects do not work well for VR/XR. 
- Also: animation, raycasting, physics, positional audio, and many more.
  

## Starter code

Three.js code is written in Javascript, embedded within a normal HTML5 page. 

For online code sketching, I recommend signing up for an account on [stackblitz.com](stackblitz.com). 
- You can build HTML5 projects entirely in the cloud
- It will reload the preview live as you edit
- Your project lives on a URL, accessibe anywhere
- You can link it to a Github repo, so every "save" becomes a git "commit", and the entire history of your project is available. 

Here's the initial HTML boilerplate. It's mostly standard HTML boilerplate, with a little CSS to help the canvas fill the page, and a Javascript `<script>` element with an `import` to pull in the Three.js library:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style> 
/* remove extra spacing around elements so we can fill the available page */
* { margin: 0; } 
</style>
</head>
<body>
<script type="module">
// import the Three.js module:
import * as THREE from "https://unpkg.com/three@0.126.0/build/three.module.js";

// Our Javascript will go here.
</script>
</body>
</html>
```

Everything from now on will be Javascript code inside that `<script>` element.

To render anything, we need a renderer. We also need an HTML `<canvas>` to render to; which the renderer can create for us. Here we configure the renderer to use better-than-default quality:

```javascript
// create a renderer with better than default quality:
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
// make it fill the page
renderer.setSize(window.innerWidth, window.innerHeight);
// create and add the <canvas>
document.body.appendChild(renderer.domElement); 
```

The renderer also needs a definition of a `camera` to define the optics used, and also the viewpoint and direction. Here we use a perspective-based camera (this is always used for VR/XR).

The renderer also needs a `scene` to know what it should draw. This scene will contain all the objects in the world.

```javascript
// create a perspective camera
const camera = new THREE.PerspectiveCamera( 
	75,  // this camera has a 75 degree field of view in the vertical axis
	window.innerWidth / window.innerHeight, // the aspect ratio matches the size of the window
	0.05, // anything less than 5cm from the eye will not be drawn
	100  // anything more than 100m from the eye will not be drawn
);
// position the camera 2m in the Z axis and 1.5m in the Y axis
// the Y axis points up from the ground
// the Z axis point out of the screen toward you
camera.position.y = 1.5;
camera.position.z = 2;

// create the root of a scene graph
const scene = new THREE.Scene();
```

To actually create an object we can see, we need to know both its `Geometry` (it's shape), as well as its `Material` (how its surfaces respond to light). Together, the geometry and material are combined as a `Mesh`, which is also an `Object3D`. 

Here we make a very simple cube, with a standard grey material, add it to the scene and position it 1.5m above ground:

```javascript
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial();
const cube = new THREE.Mesh( geometry, material );
// position the cube, and add it to the scene:
cube.position.y = 1.5;
scene.add( cube );
```

But, since materials respond to light, we also need a light source! A light is also an `Object3D`, and needs to be added to the scene. Here we use the generic `HemisphereLight`: 

```javascript
const light = new THREE.HemisphereLight(0xfff0f0, 0x606066);
scene.add(light);
```

Finally, we can add our animation loop -- this is a function that is called on every frame. Here we can update the scene for animation, and finally use the `renderer`, `camera` and `scene` to draw the world to the `<canvas>`. 

Here we added a little code to rotate the cube, so we can see that animation is working:

```javascript
function animate() {
  // update the scene:
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // draw the scene:
  renderer.render( scene, camera );
};
// start!
renderer.setAnimationLoop(animate);
```

All together:

https://stackblitz.com/edit/web-platform-a9gien

If you want the canvas to resize when the page resizes, you can add this:

```javascript
// do this now and whenever the window is resized()
window.addEventListener("resize", function () {
  // ensure the renderer fills the page, and the camera aspect ratio matches:
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}, false);
```

If you want to know how well the page is performing, you can add the Stats module:

```javascript
// load in the module:
import Stats from "https://unpkg.com/three@0.126.0/examples/jsm/libs/stats.module";

// add a stats view to the page to monitor performance:
const stats = new Stats();
document.body.appendChild(stats.dom);

// wrap everything in the animate function with stats.begin() and stats.end():
function animate() {
  // monitor our FPS:
  stats.begin();

  //... everything as it was before ...
  
  // monitor our FPS:
  stats.end();
};
```

## WebXR starter code

For a WebXR scene, we need to add a few more lines of code:

```javascript
// load in the VRButton module for the "Enter VR" button
import { VRButton } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/webxr/VRButton.js';

// enable XR option in the renderer
renderer.xr.enabled = true;
```

https://stackblitz.com/edit/web-platform-filbdd

### Mirroring the VR scene on the desktop while in VR

This works for PC-based VR, but might not be what you want for mobile-based VR. 
TODO: find a way to detect that case.

```javascript
        if (renderer.xr.isPresenting) {
          renderer.xr.isPresenting = false;
          renderer.setFramebuffer(null);
          renderer.setRenderTarget(renderer.getRenderTarget()); // Hack #15830
          renderer.clear();
          renderer.render(scene, camera);
          renderer.xr.isPresenting = true;
        }
```



<!-- 
## Point clouds

`new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial())`

https://threejs.org/docs/?q=point#api/en/objects/Points
- Optionally, set index attribute for indexed buffer geometry
- supports raycast intersections
- has some kind of morph target capability
- draw subranges: `geometry.setDrawRange(start, count)` and `attributes.setUsage( THREE.DynamicDrawUsage ) )`
- optionally, add groups. Each group can be a different drawRange, and have a different material

https://threejs.org/docs/?q=point#api/en/materials/PointsMaterial
- colour / map / alphaMap for setting colour/texture (color all points at once, or use vertexColors: true for per-vertex `color` attribute)
- size / sizeAtten (bool) for size-by-distance (all points at once)
- may also want to set blending: THREE.AdditiveBlending, depthTest: false, transparent: true
- For anything fancier, will need a custom RawShaderMaterial 

Examples
- https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html -- raycasting points
- https://github.com/mrdoob/three.js/blob/master/examples/webgl_points_dynamic.html -- cloud from OBJ, and also modifying geometry
- https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_points_interleaved.html -- using interleaved arraybuffer to store e.g. 32-bit position and 8-bit colour in a single 128-bit struct-per-particle 
- https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_drawrange.html -- varying the drawRange of the buffer

To generate particle sprite textures, can load from images of course, but can also generate via HTML5 Canvas and new THREE.CanvasTexture(), or from raw data using new THREE.DataTexture(). 

Possibly also consider using instancedBufferGeometry with a quad? E.g. https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/

Codepen demo: https://codepen.io/grrrwaaa/pen/gOWyPNY 


## Live Coding Three.js? In VR?

- Basic live code editor written by Three.js author https://mrdoob.com/projects/htmleditor/
  - Source: https://github.com/mrdoob/htmleditor
  - Essentially a document-level reloader: entire HTML doc is edited in text overlay and reloaded into iframe below it on each (successful) edit

- A more visual editor also by Three.js https://threejs.org/editor/
  - Source: https://github.com/mrdoob/three.js/tree/master/editor
  - More of a scene-graph, unity-like interface. 
  - Top of tree has Camera, Scene (Renderer is in a settings page)
  - Each node has inspector for object, material, geometry, and possible script components. ```this``` used to access the object (e.g. the Scene in the Scene's script),
  - an ```update(event)``` routine allows per-frame actions, ```pointermove(event)```, probably other callbacks. 
  - Scene script acts as the main game script in most of the exmaples.
  - ```scene.getObjectByName( 'Brick' )``` to find other objects.
  - Materials can be standard three.js materials or custom shaders (with GLSL code editors for interface / vertex shader / fragment shader)

- A similar approach, more fleshed out, by Mozilla Hubs https://hubs.mozilla.com/spoke
  - Includes asset import from google poly etc.

- Built on React https://github.com/ekatzenstein/three.js-live
- Built on Coffee etc. https://livecodelab.net
- Built on Clojure script https://github.com/cassiel/threejs-figwheel-main 



### Memory & cleanup

- See these docs: https://threejs.org/docs/index.html#manual/en/introduction/How-to-dispose-of-objects

### no text input in VR

From within VR, a code-oriented interface is almost unworkable. Some kind of visual interface would make more sense: editing in terms of structural components, intentions, relations, flows etc. rather than JS directly. In concept this is certainly feasible: A-Frame does the very same thing, using a DOM interface to generate Three.js code. 

> Perhaps in a form that can still be code-edited from desktop experiences. That means a projectional editor. (https://www.martinfowler.com/bliki/ProjectionalEditing.html, https://en.wikipedia.org/wiki/Structure_editor). 

### What level of abstraction?

- Reload entire sub-page as an iframe (https://mrdoob.com/projects/htmleditor/)? 
- Or modify scene graph / replace scene/renderer and replace animate() ?
- Something somewhere in between, in a more p5 style. Minimal example here: https://codepen.io/grrrwaaa/pen/yLMaYeR

iframe option has advantage of no leaky state (instead we have to provide serialization/deserialization to preserve state if & as desired). Any preference from VR perspective?

## Setting up a project



-->