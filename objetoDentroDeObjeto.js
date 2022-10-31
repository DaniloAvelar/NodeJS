// Criando um objeto dentro de um Objeto


const cliente = 
{
    nome: 'Danilo',
    idade: 36,
    cpf: '32165432156',
    email: 'email@dominio.com.br',
    fone: '(16)99999-8877',       
    ag: '0001',
    cc: '01010101-1',
    cep: '14000-555',
    fone: ["(16)99112-3344", "(16)3333-8888"] //Lista de telefone dentro do Objet
}

//Adicionando um novo objeto dentro de um objeto existente

cliente.dependente = {
    nome: "Theo",
    parentesco: "Filho",
    dtNasc: "04/06/2018",
}

// Acessar propriedade do objeto criado dentro do onbjeto pai
console.log(cliente)

cliente.dependente.nome = "Theo Avelar"

console.log(cliente)