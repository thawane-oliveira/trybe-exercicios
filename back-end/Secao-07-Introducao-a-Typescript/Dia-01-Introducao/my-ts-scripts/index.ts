// ./index.ts

import readline from "readline-sync"; // importamos o pacote readline-sync

// array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

// novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pessoa usuária escolhe um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script); // executamos o script escolhido usando o require