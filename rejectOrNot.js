
const rejectOrNot = (testCallback = () => { }) => {
  const promise = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(Error('I DID NOT FIRE'));
  });

  const onRejected = (error) => {
    console.log(error.message);
  };

  promise.then((successValue) => {
    console.log(successValue);
    testCallback(successValue);
  }, onRejected);
};

rejectOrNot();

module.exports = rejectOrNot;
