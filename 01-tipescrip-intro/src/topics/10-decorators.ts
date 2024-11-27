function classDecorator <T extends{new(...arg:any[]):{}}>(
    constructor: T  // T es la clase que estamos decorando
){
    return class extends constructor {
        newProperty ='New Property';
        hello = 'override';
    }
}


@classDecorator
export class superClass {

    public myProperty:string='Abc123';
    print(){
        console.log('hola mundo');
    }
}
//aqui estamos imprimiendo la definicion de la clase no estamos imprimiendo una instancia de la clase
console.log('superClass');

//esta si es una instancia de la clase
const myclas = new superClass();
//imprimiendo la clase
console.log(myclas);