// Dividindo arrays

const nomes = ['Danilo', 'Juniala', 'Ana',
'Caio','Laura','Marjore','Guilherme',
'André','Carlos','Paulo','Bia','Vivian',
'Isabela','Victor','Renan','Renata','Daisy',
'Priscila',]

const sala1 = nomes.slice(0,nomes.length/2) // Slice depende de 2 parametros, (Inicio e Fim)
const sala2 = nomes.slice(nomes.length/2) // Aqui eu comecei do meio do array, e o fim não precisa de parametro, ou seja, ele vai até o final sozinho

console.log(`Alunos Sala 1: `+sala1,"\n" + `Alunos Sala 2: `+sala2)