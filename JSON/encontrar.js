// Encontrar dados em CLIENTES.JSON
const clientes = require("./clientes.json")


function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes (valor))
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "18977479960");
console.log(encontrado2)