// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]; // Juntando os 2 arrays em uma lista unica, porém separada por seus indices

function ExibeNomeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadastrado!`)
        // const listaAluno = listaDeAlunosEMedias[0]; // Passando o 1 Array para uma variavel
        // const listaMedia = listaDeAlunosEMedias[1]; // Passando o 2 Array para uma variavel

        const [alunos, medias] = listaDeAlunosEMedias; // Dessa forma eu atribuo para a ( = ) as posições 0 e 1, 0=alunos e 1=medias 

        const indice = alunos.indexOf(aluno) 
        const media = medias[indice]

        console.log(`Sua média é: ${media}`)

    }else{
        console.log("Aluno não cadastrado!")
    }
}

ExibeNomeNota("Ana")
