
const printTimeout = require('./warmUp');

describe('Output validation', () => {
  test('Console log called after 300ms', () => {
    global.setTimeout = jest.fn();
    printTimeout('Hello', 300);
    expect(global.setTimeout.mock.calls[0][1]).toBe(300);
  });
  test('Printed TIMED OUT!', () => {
    global.console.log = jest.fn();
    printTimeout('TIMED OUT!', 300);
    expect(global.console.log).toHaveBeenCalledWith('TIMED OUT!');
  });
});
