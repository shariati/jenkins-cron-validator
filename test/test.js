const expect = require('chai').expect;
const index = require('../dist/index');

describe('parse', () => {
  it('should return empty string', () => {
    const result = index.parse();
    expect(result).to.be.true;
  });
});
