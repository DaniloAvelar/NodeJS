// Dividindo a quantiodade de elementos de um array 

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0,10) // CUIDADO o Slice nao adiciona o elemente do ultimo indice, nesse caso o 10, e sim o 9.
// O slice nao altera o Array original, é necessario criar uma variavel e retornar o valor desejado para ela.

const sala2 = alunos.slice(10)

//Podemos ser mais dinamicos, dividindo a quantidade de alunos direto no SLICE
const sala11 = alunos.slice(0,alunos.length / 2)
const sala22 = alunos.slice(alunos.length / 2)


console.log(sala1)
console.log(sala2)

console.table(sala11)
console.table(sala22)