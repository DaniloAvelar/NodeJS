const cliente = {
    nome: "Joao",
    idade: 26,
    email: "email@email.com",
    fone: ["1699999954", "1633339999"]
};

cliente.endereco = [{
    log: "Rua",
    endereco: "Jose de Pernanbuco",
    numero: 1254,
    cep: "140222-870",
    cidade: "Piraporinha do norte",
    estado: "SP",
    complemento: "Bl:9 - AP: 109",
}];

function ligarCliente(foneComercial, foneResidencial)
{
    console.log(`Ligando para: ${foneComercial}`);
    console.log(`Ligando para: ${foneResidencial}`);
}

// ... é o espalhamento (método)
ligarCliente(...cliente.fone);

const encomenda = {
    destinatario: cliente.nome,
    rua: cliente.endereco[0].log,
    numero: cliente.endereco[0].numero,
    cidade: cliente.endereco[0].cidade,
    estado: cliente.endereco[0].estado,
    cep: cliente.endereco[0].cep,
    //enderecoDestino: cliente.endereco[0]
}

// Utilizando o (...) espalhamento dentro de um objeto para nao ficar massante igual acima.
const encomenda2 = {
    destinatario2: cliente.nome,
    ...cliente.endereco[0],
}

console.log(encomenda2)
