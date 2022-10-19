// MAP CallBack

const notas = [10, 6.5, 8, 7.5]
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) // Nesse casso o ++ vem antes, para incremetnar antes +1

console.log(notasAtualizadas)