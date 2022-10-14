// Expressão de Função

const soma = function(num1, num2){return num1 + num2}
console.log(soma(5,3))

// Arrow Function

function mostraNome (nome){
    return nome;
}

// Só funciona se o return for somente 1 linha
const exibeNome = nome => `meu nome é ${nome}`;

console.log(exibeNome("Danilo"));

