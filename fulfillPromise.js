
const promiseFulfilled = (value, delay, testCallBack = () => { }) => {
  const promise = new Promise((fullfill, reject) => {
    if (value === 'FULFILLED!') {
      setTimeout(fullfill, 300, value);
      testCallBack(value);
    }
  });

  promise.then((passValue) => {
    console.log(passValue);
  });
};

promiseFulfilled('FULFILLED!', 300);

module.exports = promiseFulfilled;
