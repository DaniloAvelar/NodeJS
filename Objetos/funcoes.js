const cliente = {
    nome: "Joao",
    idade: 26,
    email: "email@email.com",
    fone: ["1699999954", "1633339999"],
    saldo: 200,
    efetuaPgto: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
        }else{
            this.saldo -= valor;
            console.log(`Pgto realizado. Seu novo saldo é: ${this.saldo},00 reais`)
        }
    },
};


cliente.efetuaPgto(215);
//cliente.efetuaPgto(19);

//console.log(cliente)