let num1 = 1;
let num2 = 2;

num1++ // pos fixada (menor prioridade)
console.log(num1);

--num1 // pre fixada (maior prioridade)
console.log(num1)

console.log(++num1 === num2--) // incrementou, comparou, decrementou = true
console.log(num1 === num2)