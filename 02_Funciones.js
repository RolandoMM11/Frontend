
function obtenerInfo(name = 'Rolando', apellido = 'Moreno'){
    const info = `${name} ${apellido}`;

    return info;
}

const info = obtenerInfo('Jesus', 'Muñiz');

console.log(info);