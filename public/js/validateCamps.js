const form = document.querySelector("form");

const nameCamp = function () {
  //Campo que será validado.
  const campo = document.querySelector(["#nameFirstNameText"]);
  //Div que contem a mensagem de erro.
  const campoErro = document.querySelector("[data-msg-erro-nome]");

  campo.addEventListener("focus", () => {
    console.log("Focou no campo nome");
  });

  //border-3 border-danger
  campo.addEventListener("blur", () => {
    if (campo.value === "") {
      campo.classList.remove("border-success");
      campoErro.classList.remove("msgErroOff");
      campo.classList.add("border-danger");
      campo.classList.add("border-2");
    } else {
      campoErro.classList.add("msgErroOff");
      campo.classList.remove("border-danger");
      campo.classList.remove("border-2");
      campo.classList.add("border-success");
    }
  });
};

const lastNameCamp = function () {
  const campo = document.querySelector(["#nameLastNameText"]);
  const campoErro = document.querySelector("[data-msg-erro-sobrenome]");

  campo.addEventListener("focus", () => {
    console.log("Focou no campo nome");
  });

  //border-3 border-danger
  campo.addEventListener("blur", () => {
    if (campo.value === "") {
      campo.classList.remove("border-success");
      campoErro.classList.remove("msgErroOff");
      campo.classList.add("border-danger");
      campo.classList.add("border-2");
    } else {
      campoErro.classList.add("msgErroOff");
      campo.classList.remove("border-danger");
      campo.classList.remove("border-2");
      campo.classList.add("border-success");
    }
  });
};

const phoneCamp = function () {
  const campo = document.querySelector("#telefoneText");
  const campoErro = document.querySelector("[data-msg-erro-telefone]");

  campo.addEventListener("focus", () => {
    console.log("Focou no campo Telefone");
  });

  //border-3 border-danger
  campo.addEventListener("blur", () => {
    const regextelefone = /^\([0-9]{2}\) \d{5}\-\d{4}$/;
    if (!regextelefone.test(campo.value)) {
      campo.setCustomValidity("Padrão (99) 99999 9999");
      campo.classList.remove("border-success");
      campoErro.classList.remove("msgErroOff");
      campo.classList.add("border-danger");
      campo.classList.add("border-2");
    } else {
      campo.setCustomValidity("");
      campoErro.classList.add("msgErroOff");
      campo.classList.remove("border-danger");
      campo.classList.remove("border-2");
      campo.classList.add("border-success");
    }
  });
};
export { nameCamp, lastNameCamp, phoneCamp };
