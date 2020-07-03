const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.Crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'lista':
        let lista = porHacer.Traerlista(); //traer lista
        for (let tarea of lista) {
            let Com = tarea.completado;
            console.log('**********Por hacer***********'.bgYellow);
            console.log(`${tarea.desc}`.bgGreen);
            if (Com === 'true') {
                console.log('Estado: '.bgGreen, `${tarea.completado}`.bgRed);
            } else {
                console.log('Estado: '.bgGreen, `${tarea.completado}`.blue);
            }
            console.log('******************************'.bgYellow);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let Borrar = porHacer.Eliminar(argv.descripcion);
        console.log(Borrar);
        break;
    default:
        console.log(`comando "${comando}" no reconocido`.bgRed);

}