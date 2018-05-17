var assert = require('assert');
var random = require('../random').default;

function equalRandom(min, max) {
    for (let i=0; i<1000; i++) {

        const val = random(min, max);
        const res = (val < min || val > max);
        assert.equal(res, false, `Errors: min=${min}, max=${max}, return value=${val}, ${res}`);
    }
}

describe("bouncing-balls", function () {

    describe("Проверка подключения тестов", function () {

        it("Ищем истину", function () {
            assert.strictEqual(true, true, 'Истины нет!');
        });

        it("random", function () {
            equalRandom(-10, 10);
            equalRandom(0, 10);
            equalRandom(-10, 0);
            equalRandom(0, 0);
            equalRandom(-1, -1);
            equalRandom(1, 1);
            equalRandom(1, 10);
            equalRandom(-10, 1);
        });
    })
})