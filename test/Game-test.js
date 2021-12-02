const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', () => {
  let deck;
  let round;
  let card;
  let turn;
  let game;

  beforeEach(() => {
    game = new Game()
  });

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

  it('should put cards in a deck', () => {
    game.start();

    expect(deck).to.be.an.instanceOf(Deck);
  })
})