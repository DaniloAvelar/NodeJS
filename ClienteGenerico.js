// Criando modelo de Cliente genérico

function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const pessoa = new Cliente("Danilo", "12365498754", "email@dominio.com", 100);

console.log(pessoa)

