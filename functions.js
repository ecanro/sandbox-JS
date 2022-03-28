//funciones en js

/*FUNCTION DECLARATION */
//las funciones deben llevar la palabra function luego algun nombre si se quiere luego entre () los parametros y luego dentro de {} el script a ejecutar
function morningGreeting() {
    return 'Good Morning!';
}//no termina en ;

//luego llamamos la function con su nombre
morningGreeting();

//funcion con argumentos
function fullName (firtsName, lastName) {
    return 'Hello ' + firtsName + ' ' + lastName + '!';
}

//al invocarla tenemos que dar los parametros, esto tambien se puede hacer por teclado desde el navegador
fullName('Edgar', 'Canro');

/*FUNCTION EXPRESSION */
//normalmente van dentro de una variable y pueden ser anonimas, que no tienen algun nombre, se usan como argumento de otra funcion

const square = function(number) {
    return number * number;
}
var x = square(4);

const factorial = function fac ( n ) {
    return n < 2 ? 1 : n * fac ( n - 1 );
}
console.log(factorial(3))

/*IIFE *///inmediate invoking function expresion
//funcion anomina que se autoejecuta y no permita manipulacion ya que va dentro de () y los parametros ya estan dados
(function () { 
    var aName = "Barry";
})();//aName throws "Uncaught ReferenceError: aName is not defined"
//ó
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"

(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
    })();//tambien puede ser }());
