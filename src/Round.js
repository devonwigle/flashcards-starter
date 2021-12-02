const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.pack;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.turn;
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    this.turns++;
    this.turn = new Turn(guess, currentCard)
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    this.turn.giveFeedback()
    };
  calculatePercentCorrect() {
    return Math.round(10*(1 - (this.incorrectGuesses.length/this.deck.length))*100)/10
  }
}

module.exports = Round;