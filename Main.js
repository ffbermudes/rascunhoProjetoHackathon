import { Pessoa } from "./Componentes/Pessoa.js";
import { navegadorCache } from "./Componentes/LocalStorage.js";
import { adressFind } from "./public/js/adressFind.js";
import { Conversor } from "./Conversor.js";

//Seleciona o campo de CEP. E permite apenas números.
const viaCepApi = new adressFind("#adressCepText");
//LIGA O EVENTLISTENER DAS DUAS FUNÇÕES COM INPUT
//SOMENTE NÚMEROS SERÃO PERMITIDOS NO CAMPO.
//RECOLHE OS DADOS DIGITADOS NO CEP E CONSULTA DADOS NA API.
viaCepApi.onlyNumbers();
viaCepApi.onAftereightDigits();

//IMPEDIR EXECUÇÃO DO FORMULÁRIO.
document.querySelector("form").addEventListener("submit", e => {
  const pessoa = new Pessoa();
  console.log(pessoa);
  e.preventDefault();
});

const conversor = new Conversor("João", "Paraguai");

conversor.saveToLocalStorage();
// conversor.converteToJSON();
