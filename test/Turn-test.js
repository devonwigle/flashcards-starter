const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it('should have a user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.userGuess).to.be.a('string');
  });

  it('should have a current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.card).to.be.an('object');
  });

  it('should return user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.card).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key - value pairs ? ', answers: ['object', 'array', 'function'], correctAnswer: 'object' })
  });

  it('should evaluate as a boolean', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.be.a('boolean');
  });

  it('should return whether the guess is correct', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('Correct!')
  });

  it('should return whether the guess is incorrect', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('Incorrect!')
  });

})