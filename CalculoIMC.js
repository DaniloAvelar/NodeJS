// Calcular IMc de uma pessoa


const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:107,
    altura:1.86,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }


  console.log(paciente.calcularIMC())
  console.log(paciente.nomeCompleto())
