const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// _ NESSE CASO É APENAS PARA NOMEAR O 1 PARAMETRO (OBRIGATORIO A NOMEAÇÃO) PARA PODERMOS ACESSAR O 2 PARAMETRO.
const reprovados = alunos.filter((_, indice)=>{
    return medias[indice] < 7;
})
console.log(`Reprovado(s): ${reprovados}`)

const aprovados = alunos.filter((aluno, indice)=>{
    return medias[indice] >= 7;
})
console.log(`Aprovado(s): ${aprovados}`)
