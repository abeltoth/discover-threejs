import { World } from './AbstractWorld/World';
import './style.css';

async function main() {
  // Get a reference to the container element
  const container: HTMLElement | null = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container!);

  // complete async tasks
  // await world.init();

  // produce a single frame (render on demand)
  // world.render();

  // start the loop (produce a stream of frames)
  world.start();
}

main();
