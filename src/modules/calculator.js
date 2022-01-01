const calculator = () => {
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");

  const inputNumber = (value) => {
    value.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  };

  inputNumber(calcSquare);
  inputNumber(calcCount);
  inputNumber(calcDay);
};

export default calculator;
