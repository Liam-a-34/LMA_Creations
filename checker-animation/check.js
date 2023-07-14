let blackCount = 2;
let whiteCount = 22;

function blackSpin() {
  $("#black1").toggleClass("rotate-left");
  setTimeout(() => {
    $("#black1").toggleClass("rotate-left");
  }, 1000);

  let intervalId = setInterval(() => {
    $(`#black${blackCount}`).addClass("rotate-left");
    console.log(`Black Count: ${blackCount}`)

    setTimeout(() => {
      $(`#black${blackCount}`).removeClass("rotate-left");
    }, 1000);

    blackCount++; // Increment blackCount

    if (blackCount > 39) {
      console.log("Stopping the interval");
      clearInterval(intervalId);
      blackCount = 2;
      blackSpin(); // Stop the interval once all elements have been animated
    }
  }, 200);
}

function whiteSpin() {
  let intervalId2 = setInterval(() => {
    $(`#white${whiteCount}`).addClass("rotate-right");
    console.log(`White Count: ${whiteCount}`)

    setTimeout(() => {
      $(`#white${whiteCount}`).removeClass("rotate-right");
    }, 1000);

    whiteCount++; // Increment whiteCount

    if (whiteCount > 40) {
      console.log("Stopping the interval");
      clearInterval(intervalId2);
      whiteCount = 2;
      whiteSpin(); // Stop the interval once all elements have been animated
    }
  }, 200);
}

blackSpin();
whiteSpin();