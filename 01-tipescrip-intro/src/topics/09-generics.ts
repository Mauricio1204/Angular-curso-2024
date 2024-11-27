//Clase 29 genericos
export function whatsTtype <T>(argumet: T):T {
    return argumet ;
    }
    let amIString =whatsTtype<string>('Hola mundo');
    let amINumber = whatsTtype<number>(100);
    let amIArray = whatsTtype<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13]);

    console.log(amIString.split(' '));
    console.log(amINumber.toFixed());
    console.log(amIArray.join(' -'));


    //podemos especificar que tipo de dato va a ser el retorno