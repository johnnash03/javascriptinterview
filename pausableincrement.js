const timer = (initialVal = 0, step = 1) => {
  let intervalId;
  let val = initialVal;
  function startTimer() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(val);
        val += step;
      }, 1000);
    }
  }
  function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }
  return {
    startTimer,
    stopTimer,
  };
};

const timerObj = timer(10, 10);
//start
timerObj.startTimer();
//stop
setTimeout(() => {
  timerObj.stopTimer();
}, 5000);
