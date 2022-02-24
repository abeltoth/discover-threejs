import { createCamera } from './components/camera';
import { createCube } from './components/cube';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

// These variables are module-scoped: we cannot access them
// from outside the module

class World {
  public camera: PerspectiveCamera;
  public scene: Scene;
  public renderer: WebGLRenderer;
  public loop: Loop;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);

    const controls = createControls(this.camera, this.renderer.domElement);

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    this.loop.updatables.push(controls);

    // disabled mesh rotation
    // this.loop.updatables.push(cube);

    this.scene.add(ambientLight, mainLight, cube);

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    // draw a single frame
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
