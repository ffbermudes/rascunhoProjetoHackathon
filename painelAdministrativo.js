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
				<td>${pessoa.telefone}</td>
				<td>${pessoa.email}</td>
				<td>${pessoa.cep}</td>
				<td>${pessoa.rua}</td>
				<td>${pessoa.numero}</td>
				<td>${pessoa.cidade}</td>
				<td>${pessoa.estado}</td>
				<td>${pessoa.bairro}</td>
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
    telefone: document.getElementById("telefoneText").value,
    email: document.getElementById("emailText").value,
    cep: document.getElementById("adressCepText").value,
    rua: document.getElementById("adressStreetText").value,
    numero: document.getElementById("adressNumText").value,
    cidade: document.getElementById("adressCityText").value,
    estado: document.getElementById("adressStateText").value,
    bairro: document.getElementById("adressNeighborhoodText").value,
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

atualizarTabela();
