import { AnimationMixer, Event, Object3D } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface InterActiveOrbitControls extends OrbitControls {
  tick?: () => void;
}

export interface InterActiveModel extends Object3D<Event> {
  tick?: (delta: number) => AnimationMixer;
}
