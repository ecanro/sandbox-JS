//arreglos o arrays
//son variables que en su valor llevan [] y dentro de estos llevan elementos(strings, number, boolean, arrays, functions, objects) separados por comas
//estos elementos estan indexados o numerados comenzandos por 0 ... n

var testScores = [];

testScores = [77, 85, 99, 90];//este array tiene 4 elementos indexados [0], [1], [2], [3]

//accesamos a los elementos por medio de bracket notation e indicando la posicion o index
//por ejemplo quiero acceder a 99, este esta en el index 2(pero posicion 3)

testScores[2];//99

//para saber el numero de elementos del arreglo, usamos la propiedades estan no llevan()
testScores.length;//4

//array = [];
//object = {};
//normalmente usados par listas y son untyped


//practica
var footballTeams = ['Barcelona', 'Real Madrid', 'Valencia', 'Mallorca', 'Betis', 'Elche'];
 //agregamos un nuevo equipo, para eso tenemos que saber el tamano de nuestro array 0.1.2
footballTeams[3] = 'Villareal';
console.log(footballTeams);

//cambiar algun elemento
footballTeams[2] = 'Atletico de Madrid';
console.log(footballTeams);

//agregar el elemento 0(barcelona) a una nueva variable
var myFavoriteTeam = footballTeams[0];
console.log(myFavoriteTeam);

//metodos para manipular arrays, estos llevan ()
//[].metodo()
//pop(), push(), shify(), unshift()

//pop() elimina el ultimo elemento del array y devuelve la nueva longitud
var popFootballTeams = footballTeams.pop();
console.log(footballTeams.pop());

//push() agrega uno o mas elementos al final del array y devuelve el nuevo array
footballTeams.push('Levante');
footballTeams.push('Valladolid', 'Real Sociedad');

//shift() elimina el primer elemento del array, siempre el elemento en el index [0] y mueve los demas elementos,  luego devuelve el elemento eliminado
var shiftfootballTeams = footballTeams.shift();

//unshift() agrega uno o mas elementos al comienzo del array, moviendo los demas elementos y devuelve longitud nueva
console.log(footballTeams.unshift('Elche', 'Huesca'))


//concat(), reverse(), sort(), slice()
//concat() se usa para unir dos o mas arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);//Array ["a", "b", "c", "d", "e", "f"]

//reverse() se usa para voltear el array, el primero pasa a ultimo y el ultimo a primero, esto modifica el array
const newArray = ['one', 'two', 'three'];
console.log('array1:', array1);

var arr = [1,2,3,4,5,6,60,14,25,90,33];
arr.reverse();//[90, 60, 6, 5, 4, 33, 3, 25, 2, 14, 1]


const reversed = array1.reverse();
console.log('reversed:', reversed);//output: "reversed:" Array ["three", "two", "one"]
console.log('array1:', array1);//output: "array1:" Array ["three", "two", "one"]

//sort() se usa para ordenar los elementos del array, mas puede que no sean ordenados como creemos, ya que toma los valores unicode y otras normas

footballTeams.sort();

var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
arr.sort();  //[ 'AA', 'Aa', 'Z', 'a', 'b' ]

var arr = [ 40, 1, 5, 200 ];
arr.sort();  //[ 1, 200, 40, 5 ]

var arr = [ 40, 1, 5, 200 ];
arr.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]


//slice() devuelve una copia de una parte del array(index inicio, index final(no incluido en el nuevo array)) en un nuevo array,
//se pueden usar index negativos

var secondTeams = footballTeams.slice(1,4);//comienza desde el index 1 y llega hasta el index 3, termina en el 4 que no lo incluye en el nuevo array
var secondTeams = footballTeams.slice(2);//todos desde el index 2

var secondTeams = footballTeams.slice(-6,-3);//mas o menos el mismo resultado
console.log(secondTeams)