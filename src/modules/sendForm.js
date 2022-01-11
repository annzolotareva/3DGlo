const sendForm = (formId) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  statusBlock.style.color = "#ffffff";

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.name == "user_phone") {
        if (/[^\+\d\(\)\-]/g.test(input.value.trim())) {
          success = false;
        }
      }

      if (input.name == "user_name") {
        if (/[^а-я\-\s]/gi.test(input.value.trim())) {
          success = false;
        }
      }

      if (input.name == "user_message") {
        if (/[^а-я\-\!\.\,\?\:\;\(\)\"\s]/gi.test(input.value.trim())) {
          success = false;
        }
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json);
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
