const fs = require("fs");

function readFromFile() {
  return new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

readFromFile().then((data) => console.log(data));

let a = 0;

for (let i = 0; i < 1000000000; ++i) {
  a++;
}

console.log(a);
