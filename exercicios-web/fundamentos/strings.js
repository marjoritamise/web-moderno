const escola = "Cod3r";

console.log(escola.charAt(4));// caracter 5 da string
console.log(escola.charAt(5)); // caracter 6 da string
console.log(escola.charCodeAt(3)); // Relacionado a tabela Unicode
console.log(escola.indexOf('3')); // determinando o indice que eu quero
console.log(escola.substring(1)); // Indice inicial
console.log(escola.substring(0, 3)); // Indice inicial e final
console.log('Escola '.concat(escola).concat("!")); // concatenação com função
console.log('Escola ' + escola + "!"); // concatenação com simbulos aritiméticos (+)
console.log('3 ' + 2); // concatenação prevalece
console.log(escola.replace(3, 'e')); //substituição
console.log("Ana,Maria,Pedro");
console.log("Ana,Maria,Pedro".split(',')); //quebra de string em array