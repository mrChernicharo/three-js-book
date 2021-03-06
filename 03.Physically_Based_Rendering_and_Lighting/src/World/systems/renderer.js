import { WebGLRenderer } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
