class Round {
  constructor(deck) {
    this.deck = deck.pack;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess) {

  }
}

module.exports = Round;