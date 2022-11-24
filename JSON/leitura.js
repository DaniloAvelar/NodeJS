// Lendo o arquivo JSON (cliente.json)

const dados = require("./cliente.json")

console.table(dados)
console.log(dados)

//Transformando um objeto JS em JSON (string puro)
// stringfy = tranforma um objeto em string puro
const clienteString = JSON.stringify(dados)

console.log(clienteString)
console.log(typeof clienteString)

//Transformando um (string puro) JSON em Objeto JS 
// Parse = tranforma uma string em Objeto JSON
const clienteStringJSON = JSON.parse(clienteString)

console.log(clienteStringJSON)