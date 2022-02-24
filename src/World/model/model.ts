import { BoxBufferGeometry, Group, Mesh, MeshStandardMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface InterActiveCube extends Mesh<BoxBufferGeometry, MeshStandardMaterial> {
  tick?: (delta: number) => void;
}

export interface InterActiveGroup extends Group {
  tick?: (delta: number) => void;
}

export interface InterActiveOrbitControls extends OrbitControls {
  tick?: () => void;
}
