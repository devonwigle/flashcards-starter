class Round {
  constructor(deck) {
    this.deck = deck.pack;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.pack[this.turns];
  }
}

module.exports = Round;