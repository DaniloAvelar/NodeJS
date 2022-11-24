// Ordenando lista

const clientes = require("./clientes.json");

//passando a lista e a propriedade que sera ordenada.
function ordenar(lista, prop){
    const resultado = lista.sort((a,b) => {
        if (a[prop] < b[prop]){
            return -1;
        }
        if (a[prop] > b[prop]){
            return 1;
        }
        return 0;
    });

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome")

console.log(ordenadoNome)