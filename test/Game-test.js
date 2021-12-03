const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  let card;
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

  it('should be an instance of Card', () => {
    card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

})