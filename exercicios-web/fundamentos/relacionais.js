console.log('01)','1' == 1) // é igual sem comparação de tipo (number, string, etc)
console.log('02)', '1' === 1) // é igual com comparação de tipo (extritamente igual)
console.log('03)', '3' != 3) // é diferente sem comparação de tipo (number, string, etc)
console.log('04)', '3' !== 3) // é diferente com comparação de tipo (extritamente diferente)

console.log('05)', 3 < 2) // menor que
console.log('06)', 3> 2) // maior que
console.log('07)', 3 <= 2) // menor igual
console.log('08)', 3 >= 2) // maior igual

const d1 = new Date(0)
const d2 = new Date (0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime());
console.log('12)', undefined == null)
console.log('13)', undefined === null)