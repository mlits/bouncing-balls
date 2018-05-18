import * as assert from 'assert';
import { random } from '../js/modules/random';
import { Ball } from '../js/modules/ball';

function equalRandom(min, max) {
  for (let i = 0; i < 10000; i++) {
    const val = random(min, max);
    const res = (val < min || val > max);
    assert.equal(res, false, `Errors: min=${min}, max=${max}, return value=${val}, ${res}`);
  }
}

function equalСollisionDetect(ballsArr, shouldColorChange, color) {
  let changeCount = 0;
  let curColor = color;
  for (let i = 0; i < 10000; i++) {
    ballsArr[0].collisionDetect(ballsArr);
    if (curColor !== ballsArr[0].color) {
      curColor = ballsArr[0].color;
      changeCount++;
    }
    assert.equal(ballsArr[0].color, ballsArr[1].color, 'Errors: colors in balls are not identical');
  }

  if (shouldColorChange) {
    assert.equal(Math.round(changeCount * 10 / 10000) / 10, 1, `Errors (color can be changed): the number of coincidences of colors does not correspond to the error! Count ${changeCount}`);
  } else {
    assert.equal(Math.round(changeCount * 10 / 10000) / 10, 0, `Errors (color can not be changed)): the number of coincidences of colors does not correspond to the error! Count ${changeCount}`);
  }
}

describe('bouncing-balls', () => {
  describe('Проверка подключения тестов', () => {
    it('Ищем истину', () => {
      assert.strictEqual(true, true, 'Истины нет!');
    });

    it('random', () => {
      equalRandom(-10, 10);
      equalRandom(0, 10);
      equalRandom(-10, 0);
      equalRandom(0, 0);
      equalRandom(-1, -1);
      equalRandom(1, 1);
      equalRandom(1, 10);
      equalRandom(-10, -1);
      equalRandom(-100, 100);
    });
    it('collisionDetect', () => {
      let ballsArr = [
        new Ball(0, 0, 0, 0, 0, 5),
        new Ball(1, 1, 0, 0, 0, 5)];

      equalСollisionDetect(ballsArr, true);
      ballsArr = [
        new Ball(0, 0, 0, 0, 0, 5),
        new Ball(10, 10, 0, 0, 0, 5)];
      equalСollisionDetect(ballsArr, false, 0);
    });
  });
});
