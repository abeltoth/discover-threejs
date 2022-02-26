import {
  Group,
  Mesh,
  MeshStandardMaterial,
  CylinderBufferGeometry,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
} from 'three';
import { InterActiveGroup } from '../model/model';

function createMeshGroup() {
  const group: InterActiveGroup = new Group();

  const coordGeometry = new CylinderBufferGeometry(0.01, 0.01, 2, 8, 1);
  const coordMaterial = new MeshStandardMaterial({
    color: 'indigo',
  });

  const yAxis = new Mesh(coordGeometry, coordMaterial);
  const xAxis = yAxis.clone();
  const zAxis = yAxis.clone();

  xAxis.rotateX(Math.PI / 2);
  zAxis.rotateZ(Math.PI / 2);

  const material = new LineBasicMaterial({ color: 0x0000ff });

  group.add(yAxis, xAxis, zAxis);

  for (let i = 0; i < 1; i += 0.1) {
    const points = [];
    points.push(new Vector3(i, 0, 0));
    points.push(new Vector3(0, 1 - i, 0));
    points.push(new Vector3(-i, 0, 0));
    points.push(new Vector3(0, -1 + i, 0));
    points.push(new Vector3(i, 0, 0));
    points.push(new Vector3(0, 0, 1 - i));
    points.push(new Vector3(-i, 0, 0));
    points.push(new Vector3(0, 0, -1 + i));
    points.push(new Vector3(i, 0, 0));

    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    group.add(line);
  }

  return group;
}

export { createMeshGroup };
