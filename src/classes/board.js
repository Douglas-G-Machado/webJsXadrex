class Board {
    constructor() {
        for (const iterator of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
            this[iterator] = {
                1: '.',
                2: '.',
                3: '.',
                4: '.',
                5: '.',
                6: '.',
                7: '.',
                8: '.'
            };
        }
    }
}

module.exports = Board;