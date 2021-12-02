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
    this.turn = new Turn(guess, currentCard)
    if (!this.turn.evaluateGuess()) {
      console.log("id: ",currentCard.id)
      console.log("guess: ", guess)
      console.log("answer: ", currentCard.correctAnswer)
      this.incorrectGuesses.push(currentCard.id)
      return this.turn.giveFeedback()
    } else if (this.turn.evaluateGuess()) {
      return this.turn.giveFeedback();
    }
    this.turns++;
  }
  calculatePercentCorrect() {
    return (1 - (this.incorrectGuess/this.deck))*100
  }
}

module.exports = Round;