import * as assert from 'assert';
import { random } from '../js/modules/random';

function equalRandom(min, max) {
  for (let i = 0; i < 10000; i++) {
    const val = random(min, max);
    const res = (val < min || val > max);
    assert.equal(res, false, `Errors: min=${min}, max=${max}, return value=${val}, ${res}`);
  }
}

describe('bouncing-balls', () => {
<<<<<<< HEAD
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
  });
=======
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
});
>>>>>>> 73c67a7a5214339484c204faf28e7a28b01d3d26
