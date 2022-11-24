const cliente = {
    nome: "Danilo",
    idade: 36,
    cpf: "32165498754",
    email: "email@dominio.com.br"
}

console.log(`O nome do cliente é ${cliente["nome"]}, o mesmo tem ${cliente["idade"]} anos!`)
console.log(`Os 3 primeiros digitos do seu CPF são: ${cliente["cpf"].substring(0, 3)}`)