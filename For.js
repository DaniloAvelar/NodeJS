// Laço FOR

// const number = [100,200,300,400,500,600]

// for(let i = 0; i < number.length; i++){
//     console.log(i, number[i])
// }

//======================================================================

// Média de Notas com -FOR-

const medias = [10,6.5,8,7.5]
let somaNotas = 0

for (let i=0; i < medias.length; i++){ // Somando as notas com um FOR
    somaNotas += medias[i]
}

let media = somaNotas/medias.length // Dividindo o Montante das notas (32) dividindo pela quantiodade de notas (4) = Total: 8

console.log(media)