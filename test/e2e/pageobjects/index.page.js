const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IndexPage extends Page {
  /**
     * define selectors using getter methods
     */
  get findImg() {
    return $('#groupimg');
  }

  get findText() {
    return $('#text');
  }

  get findTitle() {
    return $('#title');
  }

  open(path) {
    return super.open(path);
  }
}

module.exports = new IndexPage();
