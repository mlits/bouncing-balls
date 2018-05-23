import * as assert from 'assert';

describe('number a', () => {
  it('a must be even number', () => {
    const a = 20;
    assert.equal(a % 2, 0, 'a is not an even number');
  });
});

