// Localizando dados em um ARRAY

const alunos = ['Danilo', 'Maria', 'José', 'Ana']
const medias = [10,7,9,6]

let listaAlunosNotas = [alunos, medias] 

const exibeNomeNota = (nomeAluno) =>{
    if (listaAlunosNotas[0].includes(nomeAluno)){ //INCLUDES = verifica se tem o que precisa dentro do Array
        indice = listaAlunosNotas[0].indexOf(nomeAluno) // IndexOf = Recebe o Indice de um elemento quando o encontra.
        return listaAlunosNotas[0][indice] + ', sua média é: '+
        listaAlunosNotas[1][indice]
    }else{
        return "Aluno não encontrado!"
    }
}

console.log(exibeNomeNota("Theo"))