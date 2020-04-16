// Tipos primitivos é uma cópia por valor ex: 3 ou 100
// Atribuições de objeto compartilham a referencia do objeto (apontam pro mesmo lugar)

let valor; // não iniciada
console.log(valor);
//undefied = indefinido| not defined = não foi definida

valor = null; // ausencia de valor
console.log(valor);


// console.log(valor.toString()) Erro!
const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto);
// delete produto.preco;
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);

