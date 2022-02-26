import { Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface InterActiveOrbitControls extends OrbitControls {
  tick?: () => void;
}

export interface InterActiveGroup extends Group {
  tick?: (delta: number) => void;
}
