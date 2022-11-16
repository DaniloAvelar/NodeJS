// Lista com integrantes e objetos utilizados do filme O Senhor dos Aneis

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "Guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "Elfica + 2",
    escudo:"Sim",
    cavalo: "Não",
}

const fichaMago = {
    nome: "Gandalf",
    classe: "Mago"
}

const fichaRanger = {
    nome: "Legolas",
    classe: "Ranger"
}


//const guerreiro = {fichaGuerreiro, equipoGuerreiro} A diferença na impressão é gritante
//const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}

const classes = {...fichaGuerreiro, ...fichaMago, ...fichaRanger}

console.log(classes)
console.table(fichaGuerreiro)
console.table(fichaMago)
console.table(fichaRanger)

