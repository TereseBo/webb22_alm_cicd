const IndexPage = require('../pageobjects/index.page');

describe('My server unsig index template', function () {
  describe('My server on /', function () {
    it('should have group image', async function () {
      await IndexPage.open('');

      await expect(IndexPage.findImg).toBeExisting();
    });
    it('should show correct text', async function () {
      await IndexPage.open('');

      await expect(IndexPage.findText).toBeExisting();
      await expect(IndexPage.findText).toHaveTextContaining(
        'Welcome to our fabulous group-page',
      );
    });

    it('should show correct title', async function () {
      await IndexPage.open('');

      await expect(IndexPage.findTitle).toBeExisting();
      await expect(IndexPage.findTitle).toHaveTextContaining(
        'Pandemonium',
      );
    });
  });
  describe('My server on /calc', function () {
    it('should show group image', async function () {
      await IndexPage.open('calc');
      await expect(IndexPage.findImg).toBeExisting();
    });

    it('should show correct text', async function () {
      await IndexPage.open('calc');

      await expect(IndexPage.findText).toBeExisting();
      await expect(IndexPage.findText).toHaveTextContaining(
        'Welcome to the calculator',
      );
    });

    it('should show correct title', async function () {
      await IndexPage.open('calc');

      await expect(IndexPage.findTitle).toBeExisting();
      await expect(IndexPage.findTitle).toHaveTextContaining(
        'Calc',
      );
    });
  });
});
