const promiseRejected = require('./rejectPromise');

describe('Output Validation', () => {
  test('Console log called after 300ms', () => {
    global.setTimeout = jest.fn();
    promiseRejected();
    expect(global.setTimeout.mock.calls[0][1]).toBe(300);
  });

  test('Error message printed', () => {
    const testCallback = (value) => {
      expect(value).toBe('REJECTED!');
    };
    promiseRejected(testCallback);
  });
});
