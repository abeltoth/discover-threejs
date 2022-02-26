import { createCamera } from './components/camera';
import { createAxesHelper, createGridHelper } from './components/helpers';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { Train } from './components/Train/Train';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class World {
  public camera: PerspectiveCamera;
  public scene: Scene;
  public renderer: WebGLRenderer;
  public loop: Loop;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = createScene();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);

    const controls = createControls(this.camera, this.renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    const train = new Train();

    this.loop.updatables.push(controls, train);
    this.scene.add(ambientLight, mainLight, train);

    const resizer = new Resizer(container, this.camera, this.renderer);

    this.scene.add(createAxesHelper(), createGridHelper());
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
