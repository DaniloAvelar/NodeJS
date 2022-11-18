const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set(nomes); //Não permite que tenham elementos diferentes.

const nomesAtuais = [...new Set(nomes)] // Espalhando meu set em uma nova lista com (...)

//console.log(meuSet);
console.log(nomesAtuais);