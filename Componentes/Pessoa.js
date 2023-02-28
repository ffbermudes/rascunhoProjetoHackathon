export class Pessoa {
  nome = this.getName();
  sobrenome = this.getSobrenome();

  //Endereço
  cep = this.getCep();
  rua = this.getRua();
  cidade = this.getCidade();
  estado = this.getEstado();
  bairro = this.getBairro();
  numero = this.getNumero();
  telefone = this.getTelefone();

  getName() {
    return document.querySelector("#nameFirstNameText").value;
  }

  getNumero() {
    return document.querySelector("#adressNumText").value;
  }

  getSobrenome() {
    return document.querySelector("#nameLastNameText").value;
  }

  getCep() {
    return document.querySelector("#adressCepText").value;
  }

  getRua() {
    return document.querySelector("#adressStreetText").value;
  }

  getCidade() {
    return document.querySelector("#adressCityText").value;
  }

  getEstado() {
    return document.querySelector("#adressStateText").value;
  }

  getBairro() {
    return document.querySelector("#adressNeighborhoodText").value;
  }

  getTelefone() {
    return document.querySelector("#telefoneText").value;
  }

  transformToJson() {
    console.log(this);
    return JSON.stringify(this);
  }
}
