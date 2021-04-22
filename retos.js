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
    
    function imprimirNyE(persona){
        console.log('Hola', persona.nombre, 'tienes', persona.edad)
    }
    imprimirNyE(luis)
    
    function age(persona){
        if(persona.edad >= 18){
        console.log(`La edad de: ${persona.nombre} es: ${persona.edad} mayor de edad `)
        }else{
        console.log(`La edad de: ${persona.nombre} es: ${persona.edad} menor de edad `)
        }
    }
    age(uriel)
    age(luis)
    age(tadeo)