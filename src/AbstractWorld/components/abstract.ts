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

  const coordGeometry = new CylinderBufferGeometry(0.005, 0.005, 6, 8, 1);
  const coordMaterial = new MeshStandardMaterial({
    color: 'indigo',
  });

  const yAxis = new Mesh(coordGeometry, coordMaterial);
  const xAxis = yAxis.clone();
  const zAxis = yAxis.clone();

  xAxis.rotateX(Math.PI / 2);
  zAxis.rotateZ(Math.PI / 2);

  const material = new LineBasicMaterial({ color: 0xffd700 });

  group.add(yAxis, xAxis, zAxis);

  const length = 3;
  for (let i = 0; i < length; i += 0.05) {
    const points = [];
    points.push(new Vector3(i, 0, 0));
    points.push(new Vector3(0, length - i, 0));
    points.push(new Vector3(-i, 0, 0));
    points.push(new Vector3(0, -length + i, 0));
    points.push(new Vector3(i, 0, 0));
    points.push(new Vector3(0, 0, length - i));
    points.push(new Vector3(-i, 0, 0));
    points.push(new Vector3(0, 0, -length + i));
    points.push(new Vector3(i, 0, 0));
    points.push(new Vector3(0, 0, length - i));
    points.push(new Vector3(0, i, 0));
    points.push(new Vector3(0, 0, -length + i));
    points.push(new Vector3(0, -i, 0));
    points.push(new Vector3(0, 0, length - i));

    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    group.add(line);
  }

  return group;
}

export { createMeshGroup };
