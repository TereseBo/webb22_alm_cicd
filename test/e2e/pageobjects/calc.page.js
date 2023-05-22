const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalcPage extends Page {
  /**
     * define selectors using getter methods
     */
  get findImg() {
    return $('#groupimg');
  }

  get findMethod() {
    return $('#method');
  }

  get findInput() {
    return $('#input');
  }

  get findResult() {
    return $('#result');
  }

  get findTitle() {
    return $('#title');
  }

  open(path) {
    return super.open(path);
  }
}

module.exports = new CalcPage();
