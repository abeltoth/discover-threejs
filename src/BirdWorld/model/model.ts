import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface InterActiveOrbitControls extends OrbitControls {
  tick?: () => void;
}
