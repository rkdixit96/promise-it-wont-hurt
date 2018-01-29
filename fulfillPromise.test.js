const promiseFulfilled = require('./fulfillPromise');

describe('Output validation', () => {
  test('Console log called after 300ms', () => {
    global.setTimeout = jest.fn();
    promiseFulfilled('FULFILLED!', 300);
    expect(global.setTimeout.mock.calls[0][1]).toBe(300);
  });

  test('Fulfilled with FULFILLED!', (done) => {
    const testCallback = (data) => {
      expect(data).toBe('FULFILLED!');
      done();
    };
    promiseFulfilled('FULFILLED!', 300, testCallback);
  });
});
