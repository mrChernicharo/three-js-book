import {
  Color,
  Mesh,
  MeshBasicMaterial,
  TorusKnotBufferGeometry,
} from "../../../vendor/three/build/three.module.js";

function createTorusKnot() {
  // const [radius, tube, tubularSegments, radialSegments, p, q]
  //   const geometry = new TorusKnotBufferGeometry(10, 2, 57, 10, 2, 3);
  const geometry = new TorusKnotBufferGeometry(1, 0.2, 200, 10, 2, 3);
  const material = new MeshBasicMaterial();
  material.color = new Color("lightblue");
  material.wireframe = true;

  const torusKnot = new Mesh(geometry, material);

  return torusKnot;
}
export { createTorusKnot };
