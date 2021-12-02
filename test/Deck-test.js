const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const data = require('../src/data')

describe('Deck', () => {
  let deck;

  it('should contain an array', () => {
    deck = new Deck(data.prototypeData);
    expect(deck.pack).to.be.an('array');
  })

  it('should contain 30 objects', () => {
    deck = new Deck(data.prototypeData);
    expect(deck.countCards()).to.equal(30);
  })
})