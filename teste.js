function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() {
  limparTabela();
  const bd_pessoas = saveToLocalStorage();
  let index = 0;
  for (cadastro of bd_pessoas) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${cadastro.nome}</td>
        <td>${cadastro.sobrenome}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  const cadastro = {
    nome: document.getElementById("nameFirstNameText").value,
    sobrenome: document.getElementById("nameLastNameText").value,
  };
  const bd_pessoas = saveToLocalStorage();
  bd_pessoas.push(cadastro);
  setLocalStorage(bd_pessoas);
  atualizarTabela();
}

function excluir(index) {
  const bd_pessoas = saveToLocalStorage();
  bd_pessoas.splice(index, 1);
  converteToJSON(bd_pessoas);
  atualizarTabela();
}
export { inserir };
