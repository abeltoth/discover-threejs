import { Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface InterActiveGroup extends Group {
  tick?: (delta: number) => void;
}

export interface InterActiveOrbitControls extends OrbitControls {
  tick?: () => void;
}
