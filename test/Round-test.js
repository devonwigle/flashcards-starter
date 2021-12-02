const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const smallData = require('../src/smallData');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  let deck;
  let round;
  let card;
  let turn;

  it('should return the current card being played', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' })
  })

  it('should create a new instance of Turn', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);

    round.takeTurn();

    expect(round.turn).to.be.an.instanceOf(Turn);
  })

  it('should update turns count when guess is correct', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  }) 

  it('should update turns count when guess is incorrect', function () {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  })

  it('should update current card to the next card', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);

    round.takeTurn('object');

    expect(round.returnCurrentCard()).to.equal(smallData.protoData[round.turns]);
  })

  it('should store incorrect guesses in an array', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card.id[1]);
    let turn2 = new Turn('array', card.id[2]);
    let turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('iteration method');

    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  })

  it('should return feedback if incorrect', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card);

    round.takeTurn('array');

    expect(round.turn.giveFeedback()).to.equal('Incorrect!')
  })

  it('should return feedback if correct', function () {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('object', card);

    let correctGuess = round.takeTurn('object');

    expect(round.turn.giveFeedback()).to.equal('Correct!')
  })

  it('should calculate the percent correct', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card.id[1]);
    let turn2 = new Turn('array', card.id[2]);
    let turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('iteration method');
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(33.3);
  })

  it('should end the round', function() {
    deck = new Deck(smallData.protoData);
    round = new Round(deck);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card.id[1]);
    let turn2 = new Turn('array', card.id[2]);
    let turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('iteration method');
    round.calculatePercentCorrect();
    round.endRound();

    expect(round.endRound()).to.equal('**Round over!** You answered 33.3% of the questions correctly!')
  })
})