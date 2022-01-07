import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import calc from "./modules/calc.js";
import validationForm from "./modules/validationForm.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import sendForm from "./modules/sendForm.js";

timer("30 december 2021");
menu();
modal();
calc(100);
validationForm("form1");
validationForm("form2");
validationForm("form3");
tabs();
slider();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
