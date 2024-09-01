
const obtenerInfo = (name = 'Rolando', apellido = 'Moreno') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;


const info = obtenerInfo('Jesús', 'Muñiz');

console.log(info);
console.log(sum(20,10));