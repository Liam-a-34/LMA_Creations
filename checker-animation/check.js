let blackCount = 1;
let whiteCount = 1;
const blackItemCount = 40; // Adjust this based on the actual number of black items
const whiteItemCount = 40; // Adjust this based on the actual number of white items

function resetAndRestart() {
  blackCount = 1;
  whiteCount = 1;
  spinElements();
}

function spinElements() {
  let intervalId = setInterval(() => {
    $(`#black${blackCount}`).addClass("rotate-left");
    $(`#white${whiteCount}`).addClass("rotate-right");

    setTimeout(() => {
      $(`#black${blackCount}`).removeClass("rotate-left");
      $(`#white${whiteCount}`).removeClass("rotate-right");
    }, 1000);

    blackCount++; // Increment blackCount
    whiteCount++; // Increment whiteCount

    // Wrap around to the beginning if the end of the row is reached
    if (blackCount > blackItemCount) {
      blackCount = 1;
    }
    if (whiteCount > whiteItemCount) {
      whiteCount = 1;
    }

    if (blackCount > 40 && whiteCount > 40) {
      console.log("Stopping the interval");
      clearInterval(intervalId);
      setTimeout(resetAndRestart, 1000); // Delay restart to avoid overlapping intervals
    }
  }, 100);
}

spinElements();