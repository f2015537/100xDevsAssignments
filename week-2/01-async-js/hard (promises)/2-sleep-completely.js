/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(function (resolve) {
    const startTime = new Date();
    let endTime = new Date();
    let executionTime = endTime - startTime;
    while (executionTime < milliseconds) {
      endTime = new Date();
      executionTime = endTime - startTime;
    }
    resolve();
  });
}

// sleep(2000);
// console.log("Hello");

module.exports = sleep;
