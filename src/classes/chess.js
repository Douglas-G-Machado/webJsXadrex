const Board = require("./board");

class Chess {
    constructor() {
        this.board = new Board();
    }

    printBoard() {
        console.log('   a  b  c  d  e  f  g  h ');
        for (let i = 1; i <= 8; i++) {
            let linha = `${i} `;
            for (let letra of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
                linha += `[${this.board[letra][i]}]`;
            }
            console.log(linha);
        }
    }
}

module.exports = Chess;