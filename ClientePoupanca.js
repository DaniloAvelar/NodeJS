// Utilizando ClienteGenerico como Herança de dados para Poupança

function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const pessoa = new ClientePoupanca("Maria","65432198754","maria@email.com",100,200)

console.log(pessoa)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}


pessoa.depositarPoup(30)

console.log(pessoa.saldoPoup)