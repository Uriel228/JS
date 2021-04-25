var uriel = {
    nombre: 'Uriel',
    apellido: 'Rosales',
    edad: 18,
    }
var luis = {
nombre: 'Luis',
apellido: 'Tosales',
edad: 21,
}
var tadeo = {
nombre: `Tadeo`,
apellido: `Rosales`,
edad: 7,
}

function lastWord({nombre}){
    console.log('La ultima letra de', nombre,  'es: ',nombre.substr(-1))
}
lastWord(uriel)
lastWord(luis)
lastWord(tadeo)

function imprimirNyE(persona){
    console.log('Hola', persona.nombre, 'tienes', persona.edad)
}
imprimirNyE(luis)
imprimirNyE(uriel)
imprimirNyE(tadeo)


const MAYORIA_DE_EDAD = 18;

// function mayor(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }
//const mayor = persona => persona.edad >= MAYORIA_DE_EDAD
const mayor = ({edad}) => edad >= MAYORIA_DE_EDAD

function age(persona){
    if(mayor(persona)){
    console.log(`La edad de: ${persona.nombre} es: ${persona.edad} mayor de edad `)
    }else{
    console.log(`La edad de: ${persona.nombre} es: ${persona.edad} menor de edad `)
    }
}
age(uriel)
age(luis)
age(tadeo)

// function permitirAcceso({edad}){
//     if(!mayor({edad})){
//         console.log('Acceso denegado')
//     }
// }
const permitirAcceso = ({edad}) => !mayor({edad}) ? console.log('Acceso denegado') : console.log('Acceso permitido')