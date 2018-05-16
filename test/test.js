var assert = require('assert');

// function equalRandom(min, max) {
//     let err = false;
//     for (let i = 0; i < 100; i++) {
//         const val = random(min, max);
//         if (val < min || val > max) {
//             err = true;
//             console.log(min, max, val);
//         }
//     }
//     if (!err) {
//         console.log('Тест прошел успешно!', min, max);
//     }
//     return err;
// };

describe("random", function () {

    it("Ищем истину", function () {
        assert.equal(true === true, true);
    });

    // it("Ищем истину", function () {
    //     if (true === true) {
    //         console.log('42');
    //     } else {
    //         console.log('Истины нет!')
    //     }
    // });

    // it("Проверяем random", function () {
    //     debugger;
    //     equalRandom(-10, 10);
    //     equalRandom(0, 0);
    //     equalRandom(0, 10);
    //     equalRandom(-10, 0);
    // });
})