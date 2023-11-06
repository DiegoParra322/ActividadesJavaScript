// Reto para mañana, sencillito.
// Amplia la funcionalidad de la función suma()

// La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

// 
// }

// 
// ¿Va a sobrevivir?

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva true si es así, de lo contrario false



// function suma( ... parametro ) {
//     let total = 0;
//     for (const numero of parametro) {
//        total = total + numero;
//     }
//         return total;
// }

// resultado = suma (1, 10);

// console.log( resultado );



heroeSabe = prompt("Ingrese true si cree que el héroe sabe o false si cree que el héroe no sabe");
    
    
        for (let i = 0; i < heroeSabe.length; i++) {
            if (heroeSabe != 'true' && heroeSabe != 'false') {
                alert('escribe correctamente true or false de nuevo') 
                prompt("Ingrese true si cree que el héroe sabe o false si cree que el héroe no sabe");
            
        } 

    }

dragones = prompt("Ingrese aquí la cantidad de dragones")

totalBalas = prompt("Ingrese aquí la cantidad de balas")

const e = heroeSabe.toLowerCase()
let sabe = Boolean(e)
Number(totalBalas)
Number(dragones)

let balasNecesarias = dragones*2



// console.log(totalBalas)
// console.log(e)
// console.log(dragones)
// console.log(typeof(sabe))


if (sabe==true && totalBalas >= balasNecesarias){
    alert("He survives")
}
// else if (sabe==false && totalBalas < balasNecesarias){
//     console.log("He does not survive")
// }
else if (sabe==false && totalBalas >= balasNecesarias ){
    alert("He survives")
}
else {
    alert("He does not survive")
}