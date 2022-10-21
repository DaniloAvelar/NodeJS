//Filtrando Elementos 

const nomes = ['Danilo', 'Maria', 'José', 'Ana']
const notas = [7, 4.5, 6, 2]

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5) //Posso Utilizar um _ ao inves do 'aluno' do parametro do filter.

console.log(`Reprovados: ${reprovados}`)