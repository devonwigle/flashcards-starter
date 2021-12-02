const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(card => {
      card = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;