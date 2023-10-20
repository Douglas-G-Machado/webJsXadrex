const Chess = require("../classes/chess");
const Peça = require("../classes/pieces");

const chess = new Chess;

function createPieces(piece, qntd) {
    const pieces = [];

    for (let i = 1; i <= qntd; i++) {
        pieces.push(new Peça(`white${piece}${i}`));
        pieces.push(new Peça(`black${piece}${i}`));
    }
    
    return pieces;
}

function createAllPieces(){

    const pieces = [];
    pieces.push(createPieces('King',1));
    pieces.push(createPieces('Queen',1));
    pieces.push(createPieces('Rook',2));
    pieces.push(createPieces('Bishop',2));
    pieces.push(createPieces('Knight',2));
    pieces.push(createPieces('Pawn',8));

    return pieces;
};


const pieces = createAllPieces();
console.log(pieces);
