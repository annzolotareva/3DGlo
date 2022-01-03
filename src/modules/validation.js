const validation = () => {
  const inputsText = document.querySelectorAll('input[type="text"]');
  const inputPlaceholder = document.querySelector('input[placeholder="Ваше сообщение"]');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsTel = document.querySelectorAll('input[type="tel]');
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      inputsText.forEach((input) => {
        if (/^[а-я\-\s]/gi.test(input.value)) {
          alert("В инпуте должна быть только кириллица, дефис или пробел!");
        }
        if (input.value == " ") {
          alert("Введите значения");
        }
      });

      if (/^[а-я\-\s]/gi.test(inputPlaceholder.value)) {
        alert("В инпуте должна быть только кириллица, дефис или пробел!");
      }

      if (inputPlaceholder.value == " ") {
        alert("Введите значения");
      }

      inputsEmail.forEach((input) => {
        if (/^[\w\@\-\.\!\~\*\']/gi.test(input.value)) {
          alert("В инпуте должна быть только латиница в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '");
        }
        if (input.value == " ") {
          alert("Введите значения");
        }
      });

      inputsTel.forEach((input) => {
        if (/^[\d\(\)\-]/gi.test(input.value)) {
          alert("В инпуте должны быть только цифры, круглые скобки и дефис");
        }
        if (input.value == " ") {
          alert("Введите значения");
        }
      });
    });
  });
};

export default validation;
