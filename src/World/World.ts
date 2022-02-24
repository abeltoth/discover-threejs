import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createMeshGroup } from './components/meshGroup';

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

    const { ambientLight, mainLight } = createLights();

    const meshGroup = createMeshGroup();

    this.loop.updatables.push(controls, meshGroup);
    this.scene.add(ambientLight, mainLight, meshGroup);

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
