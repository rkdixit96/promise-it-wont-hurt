
function printTimeout(message, delay) {
  setTimeout(console.log, delay, message);
}

printTimeout('TIMED OUT!', 300);


module.exports = printTimeout;

