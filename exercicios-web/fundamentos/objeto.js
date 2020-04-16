// JSON => JavaScript Object Notation (formato textual) é diferente de Objeto(JS)
// Em JS um objeto é uma coleção(grupo) de chave/valor
// [] => Array | {} => Objeto

const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2);