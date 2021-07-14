import { Color, Scene } from "../../../vendor/three/build/three.module.js";

// To do...
function createScene() {
  const scene = new Scene();
  scene.background = new Color("lightcoral");

  return scene;
}

export { createScene };
