const fs = require("fs");

function readFromFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function removeSpaces(originalString) {
  const stringWithoutExtraSpaces = originalString.replace(/\s+/g, " ");
  return stringWithoutExtraSpaces;
}

function writeToFile(filename, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filename, data, "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  try {
    const dataReadFromFile = await readFromFile("spaces.txt");
    const cleanedData = removeSpaces(dataReadFromFile);
    await writeToFile("spaces.txt", cleanedData);
  } catch (err) {
    console.log(err);
  }
}

main();
