const rejectOrNot = require('./rejectOrNot');

describe('Output validation', () => {
  test('Error message printed', () => {
    const testCallback = (value) => {
      expect(value).toBe('I FIRED');
    };
    rejectOrNot(testCallback);
  });
});

