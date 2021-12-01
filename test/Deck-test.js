const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const data = require('../src/data')

describe('Deck', function() {
  it('should contain an array', function() {
    const deck = new Deck();
    expect(deck).to.be.an(array);
  })

  it('should contain 30 objects', function() {
    const deck = new Deck();
    expect(deck).to.have.lengthOf(30);
  })
})