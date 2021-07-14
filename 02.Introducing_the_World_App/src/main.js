// To do...
import { World } from "./World/World.js";

// world.render();

function main() {
  // code to set up the World App will go here
  const container = document.querySelector("#scene-container");
  const world = new World(container);

  world.render();

  // console.log({
  //   camera: world.camera,
  //   renderer: world.renderer,
  //   scene: world.scene,
  // });
}
main();
