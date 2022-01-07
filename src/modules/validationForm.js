const validationForm = (formId) => {
  const form = document.getElementById(formId);
  const formElements = form.querySelectorAll("input");

  formElements.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (input.type == "tel") {
        e.target.value = e.target.value.replace(/\D+/, "");
      }
      if (input.type == "text" || input.placeholder == "Ваше сообщение") {
        e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, "");
      }
      if (input.type == "email") {
        e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\'\"]/gi, "");
      }
    });
  });
};

export default validationForm;
