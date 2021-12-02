const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const data = require('../src/data')

describe('Deck', () => {
  it('should contain an array', () => {
    const deck = new Deck(data.prototypeData);
    expect(deck.pack).to.be.an('array');
  })

  it('should contain 30 objects', () => {
    const deck = new Deck(data.prototypeData);
    expect(deck.countCards()).to.equal(30);
  })
})