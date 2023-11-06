/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */


const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

const verduras = frutas.filter( verduras1 => verduras1.precio >= 10 && verduras1.precio <= 20);
console.log(verduras);

const verduras3 = []

for (let pedro = 0; pedro < frutas.length; pedro++) {
if (frutas[pedro].precio >= 10 && frutas[pedro].precio <= 20) {
    verduras3.push(frutas[pedro])
}    
}
console.log(verduras3);