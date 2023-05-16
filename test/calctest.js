const assert = require('assert');
const { Calculator } = require('../utils/calculator');

describe('Calculator ', function () {
  let calc;
  beforeEach(function () {
    calc = new Calculator();
    this.retries(2);
  });
  describe('getResult()', function () {
    it('should return 0 when the calculator is created', function () {
      assert.equal(calc.getResult(), 0);
    });
  });

  describe('clearAll()', function () {
    it('should return 0 when the calculator is cleared after add()', function () {
      calc.add(5);
      assert.equal(calc.getResult(), 5);
      calc.clearAll();
      assert.equal(calc.getResult(), 0);
    });

    it('should return 0 when the calculator is cleared after add<89 and multiply()', function () {
      calc.add(5);
      calc.multiply(5);
      assert.equal(calc.getResult(), 25);
      calc.clearAll();
      assert.equal(calc.getResult(), 0);
    });
  });

  describe('clear', function () {
    it('should return previous value of result', function () {
      const previous = calc.getResult();
      calc.add(5);
      assert.equal(calc.getResult(), 5);
      calc.clear();
      assert.equal(calc.getResult(), previous);
    });

    it('should return previous value of result after add and multiply', function () {
      calc.add(5);
      const previous = calc.getResult();
      calc.multiply(5);
      assert.equal(calc.getResult(), 25);
      calc.clear();
      assert.equal(calc.getResult(), previous);
    });

    it('should return previous value of result after multiple add and multiply', function () {
      calc.add(5);
      calc.multiply(5);
      const previous = calc.getResult();
      calc.add(5);
      calc.clear();
      assert.equal(calc.getResult(), previous);
    });

    it('should return previous value after cleareAll()', function () {
      calc.add(5);
      assert.equal(calc.getResult(), 5);
      calc.clearAll();
      assert.equal(calc.getResult(), 0);

      calc.clear();
      assert.equal(calc.getResult(), 5);
    });
  });
});
