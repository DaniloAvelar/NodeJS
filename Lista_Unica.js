// Extrair dados e juntar todos em uma unica liesta.
//Operador de Espalhamento <---

const cliente = 
[
    {
        nome: 'Danilo',
        idade: 36,
        cpf: '32165432156',
        dependente: [
            {
                nome: "Theo",
                parentesco: "Filho",
                dtNasc: "04/06/2018",
            },
            {
                nome: "Victoria",
                parentesco: "Filha",
                dtNasc: "24/09/2014"
            }
        ],
    },
    {
        nome: 'Marcela',
        idade: 32,
        cpf: '32154875454',
        dependente: [
            {
                nome: "Mario",
                parentesco: "Filho",
                dtNasc: "04/06/2018",
            },
            {
                nome: "Thais",
                parentesco: "Filha",
                dtNasc: "24/09/2014"
            }
        ],
    }
]

const listaDependentes = [...cliente[0].dependente, ...cliente[1].dependente]

console.table(listaDependentes);