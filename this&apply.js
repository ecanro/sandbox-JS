//apply se aplica igual que call con la diferencia es que los argumentos van en un array....
//cuando usar apply? cuando queremos que una funciona sea usada dentro de otra pero con sus
//propios argumentos.....
var obj = { num : 2}

var addToThis = function ( a, b ,c ) {
    return this.num + a + b + c;
};
//al llamar a la funcion usamos el call(), es como si dijeramos:
//llama algo que se llama obj(que debe tener algun this) ademas de invocar los otros parametros
addToThis.apply(obj, [ 1, 2, 3]);//->8

//otro
var person1 = {
    firtsName : 'Edgar',
    lastName : 'Canro'
};  

var person2 = {
    firtsName : 'Sarami',
    lastName : 'Penaloza'
};

function hello ( greeting ) {
    console.log ( greeting + ' ' + this.firtsName + ' ' + this.lastName);
};

hello.apply( person1, ['Hola'] );//-> Hola Edgar Canro, notese que primero llamamos al objeto luego la func


//practicas
var myLanguajes = function (lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ',' + lang2 + ', and ' + lang3 );
};
myLanguajes()//->My name is and I know undefined, undefine, undefined....terrible

//creamos otro
var people1 = {
    name : 'Edgar'
};
var people2 = {
    name : 'Sara'
};

myLanguajes.apply(people1, ['JavaScript', 'PHP', 'Python']);

//ahora con arreays
var languages = ['JavaScript', 'PHP', 'Python'];
myLanguajes.apply(people2, [languages[0], languages[1], languages[2]]);