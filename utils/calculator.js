class Calculator {
  constructor() {
    this.calculatorResult = 0;
    this.previousResult = 0;
    this.hide = ['constructor', 'methods', 'result'];
  }

  methods() {
    return Object.getOwnPropertyNames(Calculator.prototype).filter(
      (method) => !this.hide.includes(method),
    );
  }

  multiply(factor) {
    this.storePreviousResult();

    this.calculatorResult *= factor;
  }

  subtract(value) {
    this.storePreviousResult();
    this.calculatorResult -= value;
  }

  divide(divisor) {
    this.storePreviousResult();
    this.calculatorResult /= divisor;
  }

  add(value) {
    this.storePreviousResult();
    this.calculatorResult += value;
  }

  clear() {
    this.calculatorResult = this.previousResult;
  }

  clearAll() {
    this.storePreviousResult();
    this.calculatorResult = 0;
  }

  getResult() {
    return this.calculatorResult;
  }

  getPreviousResult() {
    return this.previousResult;
  }

  storePreviousResult() {
    this.previousResult = this.calculatorResult;
  }
}

module.exports = { Calculator };
