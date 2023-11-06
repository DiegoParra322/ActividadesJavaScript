const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'male'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

const cantidadMujeres = [];

for (let i = 0; i < values.length; i++) {
    if (values[i].gender == 'female' ) {
        cantidadMujeres.push(values[i]);

    }    
    
}
console.log(cantidadMujeres);


const valor = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'male'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

const cantidadHombres = [];

for (let i = 0; i < valor.length; i++) {
    if (valor[i].gender == 'male' ) {
    cantidadHombres.push(valor[i])
        
    }
}
console.log(cantidadHombres);


// let sumaEdadHombresBiologicosSegunLaSociedad = 0;
// for (let i = 0; i < cantidadHombres.length; i++) {
//     sumaEdadHombresBiologicosSegunLaSociedad = cantidadHombres[i].age + sumaEdadHombresBiologicosSegunLaSociedad;
// }
// let promedioH = sumaEdadHombresBiologicosSegunLaSociedad / cantidadHombres.length;
    
// console.log(promedioH)


const sumadepromedios = 0;
    for (let i = 0; i < cantidadHombres.length; i++) {
        sumapromedios = cantidadHombres[i].age + sumadepromedios;
        
    }
console.log(sumadepromedios);