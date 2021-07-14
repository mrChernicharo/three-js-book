// just waiting for your beautiful creations!
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from "../vendor/three/build/three.module.js";

const container = document.querySelector("#scene-container");

const scene = new Scene();
scene.background = new Color("skyblue");

let fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

// const ortho = { left: 10, right: 10, top: 10, bottom: 10, near, far };
// const camera = new OrthographicCamera(-10, 10, 0.1);

// prettier-ignore
const camera = new PerspectiveCamera(fov, aspect, near, far)
camera.position.set(1, 1.4, 10);

const cubeGeometry = new BoxBufferGeometry(1, 1, 1);
const material = new MeshBasicMaterial();
const cube = new Mesh(cubeGeometry, material);

scene.add(cube);

const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);
renderer.render(scene, camera);

// console.log({ camera, scene, cube, renderer });

// Initial Setup
// Create the Scene
// Create the Camera
// Create a Visible Object
// Create the Renderer
// Render the Scene
