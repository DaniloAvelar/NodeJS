// Iterando Objeto (Ex: Banco)

const cliente = {
    nome:"Danilo",
    idade:36,
    cpf:"32165432156",
    email:"email@dominio.com.br",
}

//console.log(cliente)

cliente.fone = "(16)99999-8877"

//console.log(cliente)

cliente.ag = "0001"
cliente.cc = "01010101-1"
// console.log(cliente)

cliente.cep = "14000-555"
console.log(cliente)

//Deletando Chave de objeto
delete cliente.cep
console.log(cliente)
