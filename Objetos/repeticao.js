const cliente = {
    nome: "Joao",
    idade: 26,
    email: "email@email.com",
    fone: ["1699999954", "1633339999"]
};

cliente.endereco = [
    {
        local: "Residencial",
        log: "Rua",
        endereco: "Jose de Pernanbuco",
        numero: 1254,
        cep: "140222-870",
        cidade: "Piraporinha do norte",
        estado: "SP",
        complemento: "Bl:9 - AP: 109",
    }, // Poderia ter utilisado o metodo PUSH para adicionar um novo endereço
    {
        local: "Trabalho",
        log: "Rua",
        endereco: "João marques silveira",
        numero: 154,
        cep: "140211-650",
        cidade: "Ilheus",
        estado: "BH",
        complemento: "Bl:3 - AP: 103",
    },
];

for (let i in cliente){
    let tipo = typeof cliente[i];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`Chave: ${i} --> Valor: ${cliente[i]}`)
    }
}

