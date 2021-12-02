class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      return true
    }
    return false
  }

  giveFeedback() {
    let checkGuess = this.evaluateGuess()
    if (checkGuess) {
      return 'Correct!'
    }
    return 'Incorrect!'
  }
}

module.exports = Turn;