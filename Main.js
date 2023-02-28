import { Pessoa } from "./Componentes/Pessoa.js";
import { navegadorCache } from "./Componentes/LocalStorage.js";
import { adressFind } from "./public/js/adressFind.js";

//Seleciona o campo de CEP. E permite apenas números.
const buscadorEnderecos = new adressFind("#adressCepText");

//LIGA O EVENTLISTENER DE KEYPRESS E KEYUP
//KEYPRESS >> SOMENTE NÚMEROS SERÃO PERMITIDOS NO CAMPO.
//KEYUP >> RECOLHE OS DADOS DIGITADOS NO CEP E CONSULTA DADOS NA API.
buscadorEnderecos.onlyNumbers(); //KEYPRESS
buscadorEnderecos.onAftereightDigits(); //KEYUP