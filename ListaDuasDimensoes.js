// Lista de Duas Dimensões

const alunos = ['Danilo', 'Maria', 'José', 'Ana']
const medias = [10,7,9,6]

let listaAlunosNotas = [alunos, medias] //Array ListaAlunos é composto por outros 2 Arrays, onde o acesso é feito abaixo pelo indice.

console.log(`${listaAlunosNotas[0][1]}, sua média é: ${listaAlunosNotas[1][3]}`)