class Deck {
  constructor(cards) {
    this.pack = cards;
  }

  countCards() {
    return this.pack.length
  }
}

module.exports = Deck;