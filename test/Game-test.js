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

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  })

  it('should start with no rounds', () => {
    expect(game.currentRound).to.deep.equal({})
  })

  it('should keep track of the current round', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

})