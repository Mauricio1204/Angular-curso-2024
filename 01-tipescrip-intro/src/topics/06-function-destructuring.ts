//22. Desestructuración de argumentos
 export interface Produc {
    description : string;
    price: number;
}

const phone: Produc ={
    description: 'Nokia A1',
    price: 150.0
}

const tablet:Produc={
    description: 'Apple iPad',
    price: 250.0
}

interface taxCalculationOpcion{
    tax:number;
    products: Produc[];
}

export function taxCalculation(options:taxCalculationOpcion):number []{
        let total = 0;
        options.products.forEach(producto =>{
            total+= producto.price;
        })
        return [total, total * options.tax];
}
const ShoppingCart=[phone,tablet];
const tax = 0.15;

const result = taxCalculation({
    products: ShoppingCart,
    tax: tax,
});

console.log('Total:',result[0]);
console.log('Tax:',result[1]);
//Ejersisios de desestructuracion a los elemtos anteriores como yo lo hise

//desestructuracion a la interfas Produc

//const product = 'new product';

const {price:Precio, description:Descripcion}=phone;
const {price:Precioa, description:Descripciona}=tablet;
const [products,iva]=result;

console.log('Precio:',Precio,'Descripcion: ',Descripcion );
console.log('Precio:',Precioa,'Description:',Descripciona);
console.log('Total:',products,'Tax',iva);

//Ejercisios de desestructuracion como lo resolvio el profesor del curso

const [total , taxTotal] = taxCalculation({
    products: ShoppingCart,
    tax: tax,
});


function taxCalculation2(options:taxCalculationOpcion): [number,number]{
    let total = 0;
    options.products.forEach(({price}) =>{
        total+= price;
    })
    return [total, total * options.tax];
}


//function taxCalculation1({tax,products}:taxCalculationOpcion):number []{
function taxCalculation1(options:taxCalculationOpcion):number []{
    const {tax,products} = options;

    let total = 0;
    products.forEach(producto =>{
        total+= producto.price;
    })
    return [total, total * tax];
}