// Criando Objeto (Ex: Banco)

const cliente = {
    nome:"Danilo",
    idade:36,
    cpf:"32165432156",
    email:"email@dominio.com.br",
}


// Buscando exatamente pela chave que deseja.
console.log(`Ola ${cliente.nome}, seja bem vindo.`)
console.log(`Para sua segurança, exibiremos somente os 3 primeiros númos do seu CPF: ${cliente.cpf.substring(0,3)}`)


const chaves = ["nome", "idade", "cpf", "email"]

//Buscando por indice em um Objeto
console.log(cliente[chaves[0]])

//Percorrendo as chaves e impriindo um por um
chaves.forEach(i => console.log(cliente[i]))