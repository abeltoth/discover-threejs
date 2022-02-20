import { WebGLRenderer } from 'https://cdn.skypack.dev/three';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
