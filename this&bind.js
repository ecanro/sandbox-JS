//ES5 introduce bind
//ejemplo

var cat = {
    sound : 'meow',
    speak: function () {
        console.log(this.sound);//->this hace referencia a algun elemento o parametro de la funcion o el objeto
    }
};
cat.speak(); //->'meow'

//esto daria error
let speakFunction = cat.speak;
speakFunction();//->undefined, ya que cat.speak esta fuera del contexto

//entonces podemos usar bind para que funcione
let speakFunctionBind = speakFunctionBind.bind(cat);//->'meow' porque el metodo bind ayuda al this encontrar el contexto

//practica
//creamos dos objetos de nombres
let person1 = {
    name : 'Edgar'
};
let person2 = {
    name : 'Sarami'
};

//creamos la funcion para llamar el nombre de dentro del objeto
function namer () {
    return this.name//->aqui daria error ya que this llama name de cualquier objeto
}

//entonces invocamos el metodo blind para que encuentre el contexto this.name dentro del objeto especificado
namer.bind(person1)()//->'Edgar'

//otra
let number = {
    x : 24,
    y : 22
};

let count = function () {
    console.log(this.x + this.y);
};

count.bind(number)();//->retorna 46, un bind solo funciona si encuentra un this

//otra manera
let boundFunc = count.bind(number);
boundFunc();//->46!