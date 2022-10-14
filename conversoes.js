// conversão implicita ****************************************

const numero = 456;
const numStr = "456";

console.log(numero === numStr) // False
console.log(numero == numStr) // True

//Nesse caso o JavaScript pegou a (const numero) e converteu em String, e depois, conferiu se uma é igual a outra, como ele conveteu, agora uma é == a outra

console.log(numero + numStr) // Após converter o numero em String, o sinal ( + ) nao é uma soma, e sim uma concatenação tendo seu resultado "456456"

// Conversão Explicita *****************************************
console.log(numero + Number(numStr)) // Convertendo em Number e somando com total = 912


