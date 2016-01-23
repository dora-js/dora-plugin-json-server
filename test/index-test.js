import dora from 'dora';
import { join } from 'path';
import request from 'request';
import expect from 'expect';

const port = '12345';

describe('index', () => {

  before(done => {
    dora({
      port,
      plugins: [`../../../src/index`],
      cwd: join(__dirname, './fixtures/normal'),
    });
    setTimeout(done, 1000);
  });

  it('GET /package.json', done => {
    request(`http://localhost:${port}/api/posts`, (err, res, body) => {
      expect(res.statusCode).toEqual(200);
      expect(JSON.parse(body)).toEqual([
        {
          id: 1,
          content: 'foo',
        },
        {
          id: 2,
          content: 'bar',
        },
      ]);
      done();
    });
  });
});

