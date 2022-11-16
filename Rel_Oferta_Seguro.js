// Puxando relatório do Objeto, checando se existe dependente, se sim, ofertar seguro..

const cliente = 
{
    nome: 'Danilo',
    idade: 36,
    cpf: '32165432156',
    email: 'email@dominio.com.br',
    fone: '(16)99999-8877',       
    ag: '0001',
    cc: '01010101-1',
    cep: '14000-555',
    fone: ["(16)99112-3344", "(16)3333-8888"], //Lista de telefone dentro do Objet
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
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}






/*Object.keys(obj); --> Traz todas as chaves (Indice) de um Obj Array
Object.values(obj); --> Traz os valores de cada chave (Posição) do Array
Object.entries(obj); -->  Traz os valores de cada chave (Transformando a estrutura de dados em chaves separadas, ou seja, cada dado é um novo array com posição 0 para o titulo e 1 para o valor.) do Array*/


function ofertaSeguro(obj){
    const propsClientes = Object.keys(obj); // Metodo para pegar as Chaves dos Arrays (Titulos)
    if(propsClientes.includes("dependente")){ // .: include :. é o metodo que checa se (CONTÉM), oou seja, Contem "depedente" dentro da variavel? 
        console.log(`Oferta de Seguro de vida para: ${obj.nome}`)
    }
}

ofertaSeguro(cliente)

