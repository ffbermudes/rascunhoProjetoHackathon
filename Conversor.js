// const pessoa = {
//   nome: "João",
//   sobrenome: "Brasil",
//   idade: 77,
// };

// JSON.parse(localStorage.getItem());
// localStorage.setItem("pessoa", JSON.stringify(pessoa));

export class Conversor {
  constructor(objeto) {
    this.object = objeto;
    // this.sobrenome = b;
    // this.idade = c;
  }

  converteToJSON() {
    const pessoaJson = JSON.stringify(this.object);
    return pessoaJson;
  }

  saveToLocalStorage() {
    localStorage.setItem("pessoa", this.converteToJSON());
  }
}
