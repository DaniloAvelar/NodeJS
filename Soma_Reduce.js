// Soma com Reduce

const salaJS = [7,8,6.5,4.3,9,6,10]
const salaCS = [6,5,9,10,4.2,3,5,7]
const salaPY = [7,2,4,9,8,10,2,3.5]

//Reduce (ACUM = Acumulador) :: (ATUAL = Valor Atual, que esta percorrendo o array no momento) :: 0 = Valor que vai ser iniciado, no caso '0'
// pode ser chamado tb de a,b :: notasDaSala.reduce((a, b) => a + b,0)

function mediaSala(notasDaSala){
    const somaNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaNotas/notasDaSala.length
}

console.log(`Média JS: ${mediaSala(salaJS)}`)
console.log(`Média CS: ${mediaSala(salaCS)}`)
console.log(`Média PY: ${mediaSala(salaPY)}`)