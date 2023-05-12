class Calculator {
  constructor() {
    this.calculatorResult = 0;
    this.hide = ['constructor', 'methods', 'result'];
  }

  methods() {
    return Object.getOwnPropertyNames(Calculator.prototype).filter(
      (method) => !this.hide.includes(method),
    );
  }

  multiply(factor) {
    this.calculatorResult *= factor;
  }

  subtract(value) {
    this.calculatorResult -= value;
  }

  divide(divisor) {
    this.calculatorResult /= divisor;
  }

  add(value) {
    this.calculatorResult += value;
  }

  // Add Clear (last action)
  // Add ClearAll

  getResult() {
    return this.calculatorResult;
  }
}

module.exports = { Calculator };
