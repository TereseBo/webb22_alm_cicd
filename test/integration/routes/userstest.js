const assert = require('assert');
const request = require('supertest');
const { members } = require('../../../utils/members');
const app = require('../../../app');

describe('users route', function () {
  describe('GET /users', function () {
    it('responds with json', function (done) {
      request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('responds with members', async function () {
      const res = await request(app)
        .get('/users')
        .set('Accept', 'application/json');
      assert.equal(JSON.stringify(res.body), JSON.stringify(members));
    });
  });
});
