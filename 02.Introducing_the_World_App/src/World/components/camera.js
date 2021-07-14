import { PerspectiveCamera } from "../../../vendor/three/build/three.module.js";

// To do...

// We'll follow this pattern here for most of the classes we'll create:
// import { Item } from 'three';

// function createItem() {
//   const instance = new Item();

//   return instance;
// }

function createCamera() {
  //   const [fov, aspect, near, far] = [35, 1, 0.1, 100];
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
