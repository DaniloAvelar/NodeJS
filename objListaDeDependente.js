// Criando uma lista de objeto dentro de um Objeto


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
    fone: ["(16)99112-3344", "(16)3333-8888"], //Lista de telefone dentro do Objet
    dependente: [{
        nome: "Theo",
        parentesco: "Filho",
        dtNasc: "04/06/2018",
    }]
}

//Adicionando um novo dependente em um array dentro do objeto.
cliente.dependente.push({
    nome: "Victoria",
    parentesco: "Filha",
    dtNasc: "24/09/2014"
})

const filhoMaisNovo = cliente.dependente.filter(dependente => dependente.dtNasc < Date.now)

console.log(filhoMaisNovo[0].nome)

