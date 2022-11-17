// Orientação a Objeto

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email 
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const pessoa = new ClientePupanca("Danilo","eu@email.com","65498732145",500,250)

console.log(pessoa)

pessoa.depositarPoup(200)
pessoa.depositar(50)

console.log(pessoa)