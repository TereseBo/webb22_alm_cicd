const assert = require('assert');
const { reverse } = require('../../../utils/functions/reversestring');

describe('Reverse string function ', function () {
  describe('Returns the reverse of input', function () {
    it('should return jeh! for input hej', function () {
      assert.equal(reverse('hej'), 'jeh!');
    });

    it('should return %! for input %', function () {
      assert.equal(reverse('%'), '%!');
    });

    it('should return A B c D for input D c B A!', function () {
      assert.equal(reverse('A B c D'), 'D c B A!');
    });
  });
});
