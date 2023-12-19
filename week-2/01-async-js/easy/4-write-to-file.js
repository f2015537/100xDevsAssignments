const fs = require("fs");

function writeToFile() {
  return new Promise(function (resolve, reject) {
    let data = "This is a test";
    fs.writeFile("b.txt", data, "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("success");
      }
    });
  });
}

// writeToFile()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const main = async () => {
  try {
    const data = await writeToFile();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

main();
