const notas = [7, 7, 8, 9];

const novasNotas = notas; // Dessa forma o JS entende que ambos serão iguais, apontando para o mesmo campo da memoria, e não é isso que queremos

const novasNotas2 = [...notas, 10] // Dessa forma o Array Original se mantem Original e alteramos somente a cópia (novasNotas2)

console.log(`As novas notas são ${novasNotas2}`)
console.log(`As notas originais são ${notas}`)