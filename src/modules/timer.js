const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let idSetInterval = 0;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const substituteZero = (val) => {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = substituteZero(getTime.hours);
    timerMinutes.textContent = substituteZero(getTime.minutes);
    timerSeconds.textContent = substituteZero(getTime.seconds);
    if (getTime.timeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      clearInterval(idSetInterval);
    }
  };
  updateClock();
  idSetInterval = setInterval(updateClock, 1000);
};
export default timer;
