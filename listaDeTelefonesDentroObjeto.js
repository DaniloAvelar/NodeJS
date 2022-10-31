// Criando uma lista de Telefones dentro de um objeto.

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

//console.log(cliente.fone)

cliente.fone.forEach(i => console.log(i))
