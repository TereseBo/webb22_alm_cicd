const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

describe('calc/multiply', function () {
  describe('GET /multiply calculations', function () {
    it('responds with "Result: 2 for 1 and 2', async function () {
      const res = await request(app)
        .get('/calc/multiply/?val=1&val=2');
      assert.notEqual(res.text.search(/Result: 2/i), -1);
    });

    it('responds with "Result: 1 for 1, 1, 1, 1 and 1', async function () {
      const res = await request(app)
        .get('/calc/multiply/?val=1&val=1&val=1&val=1&val=1');
      assert.notEqual(res.text.search(/Result: 1/i), -1);
    });
  });
  describe('GET /multiply errormessages', function () {
    it('responds with Error page for missing param', async function () {
      const res = await request(app)
        .get('/calc/multiply/?val=1');
      assert.notEqual(res.text.search(/Error/i), -1);
    });

    it('responds with Error page for missing params', async function () {
      const res = await request(app)
        .get('/calc/multiply/?');
      assert.notEqual(res.text.search(/Error/i), -1);
    });
  });
});
