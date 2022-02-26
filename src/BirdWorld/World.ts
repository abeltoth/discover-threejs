import { loadBirds } from './components/birds/birds';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class World {
  camera: PerspectiveCamera;
  controls;
  renderer: WebGLRenderer;
  scene: Scene;
  loop;
  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = createScene();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);
    this.controls = createControls(this.camera, this.renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    this.loop.updatables.push(this.controls);
    this.scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    this.controls.target.copy(parrot.position);

    this.scene.add(parrot, flamingo, stork);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };
