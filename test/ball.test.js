import * as assert from 'assert';
import { Ball } from '../js/modules/ball';

describe('bouncing ball', () => {
  it('should collide with the nearby ball and change color', () => {
    const collidingBalls = [
      new Ball(0, 0, 0, 0, 'rgb(0, 0, 0)', 5),
      new Ball(1, 1, 0, 0, 'rgb(200, 200, 200)', 5)
    ];
    collidingBalls[0].collisionDetect(collidingBalls);
    assert.equal(collidingBalls[0].color, collidingBalls[1].color);
  });

  it('should not collide with the spaced ball and keep color', () => {
    const spacedBalls = [
      new Ball(0, 0, 0, 0, 'rgb(0, 0, 0)', 5),
      new Ball(10, 10, 0, 0, 'rgb(200, 200, 200)', 5)
    ];
    spacedBalls[0].collisionDetect(spacedBalls);
    assert.equal(spacedBalls[0].color, 'rgb(0, 0, 0)');
    assert.equal(spacedBalls[1].color, 'rgb(200, 200, 200)');
    assert.equal(spacedBalls[0].size, 5);
    assert.equal(spacedBalls[1].size, 5);
  });
});
