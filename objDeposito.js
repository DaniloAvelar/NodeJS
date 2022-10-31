// Deposito, função dentro do objeto.


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
    dependente: [
        {
            nome: "Theo",
            parentesco: "Filho",
            dtNasc: "04/06/2018",
        },
        {
            nome: "Victoria",
            parentesco: "Filha",
            dtNasc: "24/09/2014"

        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }

}

//Adicionando um novo dependente em um array dentro do objeto.


console.log(cliente.saldo)
cliente.depositar(70)
console.log(cliente.saldo)
cliente.depositar(45)
console.log(cliente.saldo)
