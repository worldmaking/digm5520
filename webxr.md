# WebXR

> "The WebXR device API is for accessing virtual reality (VR) and augmented reality (AR) devices, including sensors and head-mounted displays on the Web."

<!--

## Emulator

[WebXR Emulator Extension](https://blog.mozvr.com/webxr-emulator-extension/) (for Chrome, Firefox, and Edge) -- install this if you don't have a VR headset. It will allow you to open a "WebXR" tab in the developer console, with which you can preview emulating with different VR headsets. 

**Do not install this extension if you have a WebXR headset, as it will prevent the real headset from working!**

![webxr emulator](https://blog.mozvr.com/content/images/2020/07/big_screenshot.jpg)

## Constraints

Condition: Because of concerns of data privacy in VR settings, the WebXR specification is only supported from pages and content hosted on an HTTPS (SSL certified) web server. Local files will not work, and local servers need special handling for HTTPS.  This may also have implications for CORS (Cross-Origin Resource Sharing) or any other factor that could break HTTPS encryption obligations.

**Constraint**: Use an HTTPS web server. 

Condition: The earlier WebVR spec had the capability to stay in VR through a hyperlink or page reload, but this was later removed as a severe security vulnerability. At present, WebXR does not have the capability to stay in VR through a hyperlink or page reload. The implication for our project is that, to remain in VR, all content, including all dynamic updates to a scene or world, as well as all transitions between scenes and worlds, needs to happen as dynamic changes within a single webpage, and a single Three.js renderer session. 

**Constraint**: Single-page website with all content dynamically loaded/hot-loaded as visitors move from world to world, or modify a world from within.

A further implication of this is that we need to be careful when items are *unloaded*: we need to clean up any memory used, remove any event handlers no longer needed, etc., so that the page doesn't gradually slow down as it eats up CPU and RAM. 

**Constraint:** Must carefully `dispose` no-longer used items and `detach` no-longer used handlers.

Condition: Virtual Reality requires rendering at high **frame rates** (90, 120, and higher FPS are typical), as well as extremely low **latencies** (handfuls of milliseconds). If these constraints are not met, the viewer experience can rapidly become dizzying and cause a severe physiological response of "cybersickness". This means that any CPU-bound process must complete quickly; nothing should hold up processing for longer than a millisecond. The same also applies for synethesized audio: typically audio synthesis needs to complete in a few milliseconds to be rendered without causing audio glitches and dropouts (which at higher volumes can be very unpleasant). This is a hard condition to meet, as ordinarily Javascript is single-threaded. However, we *can* move processing to separate parallel threads (called Web Workers in the browser context), which means they run independently, possibly on a separate CPU core, and need not interrupt rendering.

**Constraint:** Any unpredictably compute-intensive algorithm must not interrupt rendering, so should be implemented as a Web Worker thread.

### Summary

- Use an HTTPS web server
- Single-page website 
- All content dynamically loaded/hot-loaded, no hyperlinks or page reloads
- Must carefully `dispose` no-longer used items and `detach` no-longer used handlers
- Potentially compute-intensive algorithms should be implemented on Web Worker threads

-->