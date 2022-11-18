// Criando uma lista, a partir de duas listas com tipos diferentes

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias]

console.log(`Aluno(a): ${listaAlunosMedias[0][3]}
Média: ${listaAlunosMedias[1][3]}`)