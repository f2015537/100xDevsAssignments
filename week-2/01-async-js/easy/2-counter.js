let t = 0;
function myPromisifiedTimeout() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      ++t;
      resolve(t);
    }, 1000);
  });
}

async function main() {
  while (true) {
    const data = await myPromisifiedTimeout();
    console.log(data);
  }
}

main();
