import { Pessoa } from "./Componentes/Pessoa.js";
import { navegadorCache } from "./Componentes/LocalStorage.js";

// Variávies obrigatórias
const pessoa = new Pessoa("Filipe", "dsadasdsa");
const storage = new navegadorCache(localStorage);

//Transformando em JSON
const pessoaJson = pessoa.transformToJson();

console.log(pessoaJson);
storage.save('vitima1', pessoaJson);