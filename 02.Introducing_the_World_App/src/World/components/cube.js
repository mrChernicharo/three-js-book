import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
} from "../../../vendor/three/build/three.module.js";

// To do...
function createCube() {
  const geometry = new BoxBufferGeometry(1.4, 1.4, 1.4);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
