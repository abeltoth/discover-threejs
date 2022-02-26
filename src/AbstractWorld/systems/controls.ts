import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { InterActiveOrbitControls } from '../model/model';

function createControls(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
  const controls: InterActiveOrbitControls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
