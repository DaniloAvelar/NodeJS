const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasSalas){
    const somaNotas = notasSalas.reduce((acumulador, nota)=> {
        return acumulador + nota;
    }, 0)

    const media = somaNotas / notasSalas.length;

    return media
}

console.log(`A média da sala de JS é: ${calculaMedia(salaJS)}`)
console.log(`A média da sala de JV é: ${calculaMedia(salaJava)}`)
console.log(`A média da sala de PY é: ${calculaMedia(salaPython)}`)