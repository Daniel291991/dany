const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};
const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const argv = require('yargs')
    //.command('lista', 'Imprime en consola', lista)
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}