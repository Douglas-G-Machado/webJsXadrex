// King - Rei
// Queen - Rainha
// Rook - Torre
// Bishop - Bispo
// Knight - Cavalo
// Pawn - Peão

class Pieces {
    constructor(type) {
        this.type = type
        this.x = undefined,
        this.y = undefined,
        this.captured = false
    }

};

module.exports = Pieces;