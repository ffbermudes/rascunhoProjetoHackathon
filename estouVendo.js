(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          inserir();
          form.classList.remove("was-validated");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_pessoas")) ?? [];
}

function setLocalStorage(bd_veiculos) {
  localStorage.setItem("bd_pessoas", JSON.stringify(bd_veiculos));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() {
  limparTabela();
  const bd_pessoas = getLocalStorage();
  let index = 0;
  for (pessoa of bd_pessoas) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${pessoa.nome}</td>
        <td>${pessoa.sobrenome}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  const pessoa = {
    nome: document.getElementById("nameFirstNameText").value,
    sobrenome: document.getElementById("nameLastNameText").value,
  };
  const bd_pessoas = getLocalStorage();
  bd_pessoas.push(pessoa);
  setLocalStorage(bd_pessoas);
  atualizarTabela();
}

function excluir(index) {
  const bd_pessoas = getLocalStorage();
  bd_pessoas.splice(index, 1);
  setLocalStorage(bd_pessoas);
  atualizarTabela();
}

function validarModelo() {
  const bd_pessoas = getLocalStorage();
  for (veiculo of bd_veiculos) {
    if (sobrenome.value == veiculo.sobrenome) {
      sobrenome.setCustomValidity("Este modelo de veículo já existe!");
      feedbackModelo.innerText = "Este modelo de veículo já existe!";
      return false;
    } else {
      sobrenome.setCustomValidity("");
      feedbackModelo.innerText = "Informe o modelo do veículo corretamente.";
    }
  }
  return true;
}

atualizarTabela();
const sobrenome = document.getElementById("sobrenome");
const feedbackModelo = document.getElementById("feedbackModelo");
sobrenome.addEventListener("input", validarModelo);
