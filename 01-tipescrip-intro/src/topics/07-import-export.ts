import { Produc,taxCalculation} from './06-function-destructuring' ;


const shoppingCart: Produc[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'HP',
        price: 100, 
    },
    {
        description: 'Samsung',
        price: 100,
    }
]

const [total, tax] = taxCalculation ({
    products:shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax);