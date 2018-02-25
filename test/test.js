const expect = require('chai').expect;
const { parse } = require('../dist');

describe('parse', () => {
  it('should parse "* * * * *"', () => {
    const result = parse('* * * * *');
    expect(result).to.deep.equal({
      errors: [],
      fields: [
        {
          type: 'minute',
          hash: false,
        },
        {
          type: 'hour',
          hash: false,
        },
        {
          type: 'dayOfMonth',
          hash: false,
        },
        {
          type: 'month',
          hash: false,
        },
        {
          type: 'dayOfWeek',
          hash: false,
        },
      ],
    });
  });
});
