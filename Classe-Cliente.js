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

const pessoa = new Cliente("Danilo","eu@email.com","15975687542", 300)

pessoa.exibirSaldo()

console.log(pessoa)