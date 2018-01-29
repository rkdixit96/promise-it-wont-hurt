
const promiseRejected = (testCallback = () => { }) => {
  const promise = new Promise(((fulfill, reject) => {
    setTimeout(reject, 300, Error('REJECTED!'));
  }));

  function onReject(error) {
    testCallback(error.message);
    console.log(error.message);
  }

  promise.then(() => { }, onReject);
};

promiseRejected();

module.exports = promiseRejected;
