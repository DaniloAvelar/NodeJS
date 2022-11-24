const cliente = {
    nome: "Joao",
    idade: 26,
    email: "email@email.com",
    fone: ["1699999954", "1633339999"]
};

cliente.endereco = {
    log: "Rua",
    endereco: "Jose de Pernanbuco",
    numero: 1254,
    cep: "140222-870",
    cidade: "Piraporinha do norte",
    estado: "SP",
    complemento: "Bl:9 - AP: 109",
}

console.log(cliente)
console.log(cliente.endereco)
console.log(cliente.endereco.complemento)
