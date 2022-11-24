// Filtando clientes por apartamento sem complemento

const clientes = require("./clientes.json");

function filtrarClienteSemApartamento(clientes){
    return clientes.filter((cliente) => {
        return(
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarClienteSemApartamento(clientes);

console.log(filtrados)