//para crear un object constructor iniciamos con la palabra function y el nombre del objeto con la primera letra en mayusculas como buena practica
//luego indicamos los parametros, abrimos {} e indicamos las propiedades, usamos la palavra this, y sus valores, que normalmente se relacionan con los parametros

//objeto Car
function Car ( make, model, year ) {
    this.make = make;
    this.model = model;
    this.year = year;
} 

//creamos una nueva variable car1 y le asignamos el objeto usando la palabra new y el nombre del objeto, seguido de los parametros del nuevo carro
var car1 = new Car( 'toyota', 'corolla', 2020 );

console.log (car1);


//otra forma ES2015 es tranformar en class
// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// } 

//Objeto House
function House ( rooms, apartment, color, swimmingPool, state, city ) {
    this.rooms = rooms;
    this. apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
}

//new House
var house1 = new House(5, true, 'white', false, 'Porto', 'Porto')

console.log(house1);

//Object book

//forma simple no es buena practica si tengo que crear varios libros para una libreria por ejm
var book = {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    'year of publication': 1851,
    theme: "Whale's hunt",
    pages: 581
}

 //Objet constructor
 //observa que al asociar los parametros a las propiedades puedo usar cualquier otro nombre

function Book ( title, author, yearOfPublication, theme, pages ) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
    this.theme = theme;
    this.pages = pages;
}

var book1 = new Book ('Mobi-Dick', 'Herman Melville', 1851, 'Whale\'s hunt', 581 )

console.log(book1)