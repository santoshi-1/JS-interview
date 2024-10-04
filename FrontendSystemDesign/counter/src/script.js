(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");

  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countDownTimer = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      return;
    }

    const startInterval = () => {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    };

    startInterval();
  });

  const timer = () => {
    if (sec.value > 60) {
      min.value += 1;
      sec.value = parseInt(sec.value) - 59;
    }

    if (min.value > 60) {
      hour.value += 1;
      min.value = parseInt(min.value) - 60;
    }

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
      sec.value = 59;
    } else if (hour.value != 0 && min.value == 0) {
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      min.value = 60;
    }
    return;
  };

  const stopInterval = (state) => {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

    stopBtn.style.display = "none";
    startBtn.style.display = "initial";

    clearInterval(countDownTimer);
  };

  stopBtn.addEventListener("click", () => {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", () => {
    hour.value = "";
    min.value = "";
    sec.value = "";

    stopInterval();
  });
})();
