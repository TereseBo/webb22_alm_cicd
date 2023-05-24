const assert = require('assert');
const request = require('supertest');

const SERVER_URL = process.env.APP_URL || 'http://localhost:3000';

describe('calc/add', function () {
  describe('GET /add calculations', function () {
    it('responds with "Result: 3 for 1 and 2', async function () {
      const res = await request(SERVER_URL)
        .get('/calc/add/?val=1&val=2');
      assert.notEqual(res.text.search(/Result: 3/i), -1);
    });

    it('responds with "Result: 5 for 1, 1, 1, 1 and 1', async function () {
      const res = await request(SERVER_URL)
        .get('/calc/add/?val=1&val=1&val=1&val=1&val=1');
      assert.notEqual(res.text.search(/Result: 5/i), -1);
    });
  });
  describe('GET /add errormessages', function () {
    it('responds with Error page for missing param', async function () {
      const res = await request(SERVER_URL)
        .get('/calc/add/?val=1');
      assert.notEqual(res.text.search(/Error/i), -1);
    });

    it('responds with Error page for missing params', async function () {
      const res = await request(SERVER_URL)
        .get('/calc/add/?');
      assert.notEqual(res.text.search(/Error/i), -1);
    });
  });
});
