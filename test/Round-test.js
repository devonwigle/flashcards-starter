const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should return the current card being played', function() {
    const round = new Round()
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    round.returnCurrentCard();
    
    expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key - value pairs ? ', answers: ['object', 'array', 'function'], correctAnswer: 'object' })
  })

  it('should create a new instance of Turn', function() {
    const round = new Round()
    const card = new Card(1, 'What allows you to define a set of related information using key - value pairs ? ', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    round.takeTurn();

    expect(round.takeTurn()).to.be.an.instanceOf(turn, Turn);
  })
})