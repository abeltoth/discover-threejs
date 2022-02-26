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

  for (let i = 0; i < 0.9; i += 0.1) {
    // 1
    const points1 = [];
    points1.push(new Vector3(i + 0.1, 0, 0));
    points1.push(new Vector3(0, 1 - i, 0));

    const geometry1 = new BufferGeometry().setFromPoints(points1);
    const line1 = new Line(geometry1, material);
    group.add(line1);

    // 2
    const points2 = [];
    points2.push(new Vector3(-i - 0.1, 0, 0));
    points2.push(new Vector3(0, 1 - i, 0));

    const geometry2 = new BufferGeometry().setFromPoints(points2);
    const line2 = new Line(geometry2, material);
    group.add(line2);

    // 3
    const points3 = [];
    points3.push(new Vector3(i + 0.1, 0, 0));
    points3.push(new Vector3(0, -1 + i, 0));

    const geometry3 = new BufferGeometry().setFromPoints(points3);
    const line3 = new Line(geometry3, material);
    group.add(line3);

    // 4
    const points4 = [];
    points4.push(new Vector3(-i - 0.1, 0, 0));
    points4.push(new Vector3(0, -1 + i, 0));

    const geometry4 = new BufferGeometry().setFromPoints(points4);
    const line4 = new Line(geometry4, material);
    group.add(line4);
  }

  return group;
}

export { createMeshGroup };
