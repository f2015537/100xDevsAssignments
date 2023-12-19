function displayTime(mode) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const now = new Date();
      let hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      if (mode === 1) resolve(`${hours}:${minutes}:${seconds}`);
      else {
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        resolve(`${hours}:${minutes}:${seconds} ${meridiem}`);
      }
    }, 1000);
  });
}

async function main(mode) {
  while (true) {
    const timeData = await displayTime(mode);
    console.log(timeData);
  }
}

main(2);
