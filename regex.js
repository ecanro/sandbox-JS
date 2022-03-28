//expresiones reguales en js
var cadena = 'este es un test';

//queremos saber si a palabra test esta na cadena
//usamos o metodo test()
var resultTrue = /test/.test(cadena);//en este caso si existe la cadena test dentro de la variabla cadena
var resultFalse = /^test/.test(cadena);//en este caso el simbolo ^ verifica si test esta al inicio, false

console.log(resultTrue); // true;
console.log(resultFalse);// false;

//usando o metodo match(), que devolta um array de ocurrencias
const testString = "Repeat repeat rePeAT";//olha que o texto ten tres palabras iguais mais com letras en mayusc e minisc.
const regexWithAllMatches = /Repeat/gi;//uso o flags g de global e i caseinsensitive
console.log(testString.match(regexWithAllMatches));//-> ["Repeat", "repeat", "rePeAT"]

//ahora que so devolta 2 valores no array
//usando a mesma const testString
const regexWithTwoMatches = /([A-Z])\w+/g;//->so palabra que tenhan mayusculas
console.log(testString.match(regexWithTwoMatches));//->['Repeat', 'PeAT]

//que retorne -1 ou positivo usando o string methods search()
console.log(testString.search('repeat'))//->7, neste caso consigue o string repeat a partir da 7 posicao
console.log(testString.search('0'))//->-1, como o numero 0 nao esta na string entao resultado é -1 