// Remover dados do Array

const notas = [10, 7, 8, 5, 10]

notas.pop() // Remove o ultimo indice do Array, ele Não aceita nenhum parametro, sempre exclui o ultimo
console.log(notas)

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(media)