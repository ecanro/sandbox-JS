//las variables en js pueden locales, privadas, publicas y globales
//eso determina su alcance o scope

//esta linea ayuda
'use strict'


var scope = 'public';
var newScope = "global";

function checkScope () {
    var scope = 'private';//esta es la misma variable publica se transforma en privada porque esta dentro de una funcion
    return [scope, newScope];
}

console.log(newScope);
console.log(checkScope());

//scope en nested functions
function sayHiBye(firstName, lastName) {

// helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }
    alert( "Hello, " + getFullName() );
    }


//global scope
var height = 10;

function volume () {
//parent scope
var width = 10;
var length = 10;
var volumeOfObject = function () {
    //child scope (local)
    return length * width * height;
}
//retornamos el valor de la funcion interna
return volumeOfObject();
}
volume();