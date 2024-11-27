
/* Es extremadamente raro definir una clase de la siguiente marea pero es posible
export class Persona{
    public name:string;
    private address:string;

    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }
}


const Ironman = new Persona('Ironman','New York');
console.log(Ironman); */
//esta es una manera corta de definir clases en TypeScript
/* export class Person{
    constructor(
        public name:string ,
        private address:string){
    }
}


const Ironman = new Person('Ironman','New York');
console.log(Ironman);

export class hero extends Person{
constructor(
    public alterEgo:string,
    public age:string,
    public realName:string
    //...agregar mas propiedades aqui
){
    super(realName,'new York');
}
}
const iroman = new hero('Ironman','45','Tony');

console.log(iroman); */
//28.Priorizar composición sobre herencia
export class Person{
    constructor(
        public name:string ,
        private address:string ='No Address'){
    }
}


const Ironman = new Person('Ironman','New York');
console.log(Ironman);

export class hero {

    //public person: Person;
    
    constructor(
    public alterEgo:string,
    public age:string,
    public realName:string,
    public Person:Person,
    
    //...agregar mas propiedades aqui
){
    //this.person = new Person(realName);
}
}

const tony = new Person('Tony Stark','New York');
const iroman = new hero('Ironman','45','Tony',tony);

console.log(iroman);