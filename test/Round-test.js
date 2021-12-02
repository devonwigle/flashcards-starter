const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const smallData = require('../src/smallData');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should return the current card being played', function() {
    const deck = new Deck(smallData.protoData);
    const round = new Round(deck);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' })
  })

  it('should create a new instance of Turn', function() {
    const round = new Round()
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    round.takeTurn();

    expect(round.takeTurn()).to.be.an.instanceOf(turn, Turn);
  })

  it('should update turns count when guess is correct', function() {
    const round = new Round()
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    round.taketurn();

    expect(round.turnCount).to.equal(1);
  }) 

  it('should update turns count when guess is incorrect', function () {
    const round = new Round()
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    round.taketurn();

    expect(round.turnCount).to.equal(1);
  })

  it('should update current card to the next card', function() {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)

    round.takeTurn();

    expect(round.returnCurrentCard()).to.deep.equal({
      id: 2,
      question: 'What is a comma-separated list of related values?',
      answers: ['array', 'object', 'function'],
      correctAnswer: 'array'
    });
  })

  it('should store incorrect guesses in an array', function() {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)
    const turn1 = new Turn('array', card.id[1]);
    const turn2 = new Turn('array', card.id[2]);
    const turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  })

  it('should return feedback if incorrect', function() {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)
    const turn1 = new Turn('array', card.id[1]);

    round.takeTurn();

    expect(round.takeTurn()).to.equal('Incorrect!')
  })

  it('should return feedback if correct', function () {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)
    const turn1 = new Turn('object', card.id[1]);

    round.takeTurn();

    expect(round.takeTurn()).to.equal('Correct!')
  })

  it('should calculate the percent correct', function() {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)
    const turn1 = new Turn('array', card.id[1]);
    const turn2 = new Turn('array', card.id[2]);
    const turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect).to.equal(33.3);
  })

  it('should end the round', function() {
    const deck = new Deck(smallDeck)
    const round = new Round(deck)
    const turn1 = new Turn('array', card.id[1]);
    const turn2 = new Turn('array', card.id[2]);
    const turn3 = new Turn('iteration method', card.id[3])

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    round.calculatePercentCorrect();
    round.endRound();

    expect(round.endRound()).to.equal('**Round over!** You answered 33.3% of the questions correctly!')
  })
})