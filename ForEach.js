// ForEach = Para Cada

const medias = [10,6.5,8,7.5]
let somaNotas = 0

//Escrevendo ForEach, é diferente de C# (Para Cada item)

medias.forEach(nota => {
    somaNotas += nota
})

console.log(somaNotas/medias.length)