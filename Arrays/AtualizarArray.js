// Atualizando um Array

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.table(nomes)

nomes.splice(1,2) // Splice, Inicia com a posilçao inicial de onde quer começar a remover.
               // O segundo Parametro é a quantidade de registros que vc quer remover. 
               // O Terceiro parametro, nao é obrigatório, mas pode ser passado o valor que vai entrar no lugar dos valores removidos
// EX: nomes.splice(1, 2, "Rodrigo")

console.table(nomes)

nomes.push("Rodrigo") // Push adiciona um registro sempre na ultima posilçao do array

console.table(nomes)