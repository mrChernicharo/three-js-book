import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createLights() {
  // const ambientLight = new AmbientLight('white', 2);

  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    5 // intensity
  );

  const mainLight = new DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);

  return { mainLight, ambientLight };
}

export { createLights };
