//objetos

//Persona
//tambien puede ser solo var person = {} y luego agregar las propiedades

var person = {
    age: 43,
    sex: 'masculino',
    married: true,
    'is developer': 'yes', //observa que si la propiedad lleva espacios tiene que ir entre ''
    'function': 'Senior Fullstack' //observa que usamos una palabra reserva, pero la colocamos entre comillas para que la acepte como propiedad
}

//mostrar propiedades
//con dot notation
console.log(person.age)
//con bracket notation-esta es la mejor practica
console.log(person['sex']);

//agregar una propiedad nueva con dot notation, esta forma falla si la propiedad tiene espacios o es una funcion, o comienzan con numero, o tiene simbolos
person.height = 1.80;

person["is developer"]//el editor la cambia automaticamente a bracket notation

//agregar una propiedad nueva con braket notation, esta es la mejor practica
person['country'] = 'Portugal';
person['years of experience'] = 17;


//mostrar por consola la nueva propiedad
console.log(person.height)
console.log(person[5])//no funcionaria porque no es un array

//mostrar las propiedades del objeto
console.log(person)

//caso interesante
//tenemos una variable de tipo string, primitiva y queremos cambiar el texto a mayusculas
var name = 'Edgar';

//usamos el metodo toUpperCase, pero, los metodos son solo para objetos?, como es que una variable primitiva acepta metodos de objeto?
//lo que sucede es que Js usa el prototype para transformar en objeto y poder usar el metodo temporalmente
var shoutName = name.toUpperCase();
console.log(typeof name);//retorna string
console.log(typeof name.length); //retorna number

//en este caso usamos new String, lo que sucede es interesante, dice que es un string pero objeto.....
var superHeroe = new String('Superman');
console.log(superHeroe);
console.log(typeof superHeroe.length)//retorna number....

//js puede pasar primitivos a objetos y viceversa, todo eso temporalmente y en memoria....
