const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card;

  it('should be a function', () => {
    card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should have an id', () => {
    
    expect(card.id).to.equal(1);
  });

  it('should store a question', () => {
    
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {

    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    
    expect(card.correctAnswer).to.equal('object');
  });
});