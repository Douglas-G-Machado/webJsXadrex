const Board = require("./board");
const Pieces = require("./pieces");

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
    
    setBoard(){
        const whiteIcons = ['♜','♞','♝','♛','♚','♝','♞','♜','♟'];
        const blackIcons = ['♖','♘','♗','♔','♕','♗','♘','♖','♙'];
        const coluns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (let index = 0; index < 8; index++) {
            this.board[coluns[index]][2] = whiteIcons[8];
            this.board[coluns[index]][1] = whiteIcons[index];            
            this.board[coluns[index]][7] = blackIcons[8];            
            this.board[coluns[index]][8] = blackIcons[index];            
        }

    }

    createPiece(piece, qntd) {
        const pieces = [];
    
        for (let i = 1; i <= qntd; i++) {
            pieces.push(new Pieces(`white${piece}${i}`));
            pieces.push(new Pieces(`black${piece}${i}`));
        }
        
        return pieces;
    }

    createAllPieces() {
        const kings = this.createPiece('King', 1);
        const queens = this.createPiece('Queen', 1);
        const rooks = this.createPiece('Rook', 2);
        const bishops = this.createPiece('Bishop', 2);
        const knights = this.createPiece('Knight', 2);
        const pawns = this.createPiece('Pawn', 8);

        const allPieces = [...kings, ...queens, ...rooks, ...bishops, ...knights, ...pawns];

        return allPieces;
    }

}

module.exports = Chess;
