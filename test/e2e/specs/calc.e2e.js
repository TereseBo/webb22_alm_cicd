const CalcPage = require('../pageobjects/calc.page');

describe('My server', function () {
  it('should show result', async function () {
    await CalcPage.open('calc/add?val=1&val=2');
    await expect(CalcPage.findResult).toBeExisting();
    await expect(CalcPage.findResult).toHaveTextContaining(
      '3',
    );
  });

  it('should show correct text', async function () {
    await CalcPage.open('calc/add?val=1&val=2');

    await expect(CalcPage.findMethod).toBeExisting();
    await expect(CalcPage.findMethod).toHaveTextContaining(
      'Add',
    );
  });

  it('should show correct title', async function () {
    await CalcPage.open('calc/add?val=1&val=2');

    await expect(CalcPage.findInput).toBeExisting();
    await expect(CalcPage.findInput).toHaveTextContaining(
      '1,2',
    );
  });
});
