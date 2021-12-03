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
    let answer = this.turn.evaluateGuess();
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return this.turn.giveFeedback(answer)

  }

  calculatePercentCorrect() {
    const percent = Math.round(10 * (1 - (this.incorrectGuesses.length / this.deck.length)) * 100) / 10
    return percent
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;