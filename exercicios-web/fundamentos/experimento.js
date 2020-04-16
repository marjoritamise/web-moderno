// - window = variavel global no Browser
// - Consigo acessar uma variavel criada com var no window, ex: var a = 1 | para acessar = window.a
// - Já declarando uma variavel com let ou const ela se torna global no projeto porém não acessamos com o window
// - this, no console é igual a window
// - criando uma função nomeada consigo acessa-la globalmente, ex: function marjori(a=0,b=0){return a === b}, para acessar a função posso chamar(marjori() ou this.marjori() ou window.marjori())
// - criando uma função com variavel e arrow consigo acessa-la globalmente somente de uma forma, ex: const marcelo = (a =0,b=0) => console.log(a, b);, para acessar a função somente com marcelo()

let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a);
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var ou let
abc = 3 // nao faça isso em casa!!!
console.log(global.abc)

//module.exports = {e: 456, f: false, g: 'teste'}