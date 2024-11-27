function addNumber(a: number, b: number){

    return a + b;
}

const addNumberArrow =(a: number, b: number):string =>{
    return `${a + b}`; //los tactins nos permiten 
                        //hacer otros caracteres multinea y tabien hacer una expresion de javascrip dentro del temple literal 
                        //regresando los valores
}  

function multiply(fristNumber:number ,seconNuber?:number,base:number=2){ //para valores se hacer en orden variables o contantes sin balor  despues ariables o contantes opcionales y por ultimo variables o contantes son valor 
    return fristNumber * base;
}


const result:number =addNumber(1,2);
const ressult2:string =addNumberArrow(1,2)
const multiplyresult:number = multiply(5);
console.log({result,ressult2,multiplyresult});
