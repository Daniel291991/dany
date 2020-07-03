const File = require('fs');
const colors = require('colors');


let listadoporhacer = [];


const DataDB = () => {
    let data = JSON.stringify(listadoporhacer);

    File.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error(err);
    });

}

const CargaDB = () => {
    try {
        listadoporhacer = require('../DB/data.json'); //cargar lista de json
    } catch (error) {
        listadoporhacer = [];
    }
}

const Crear = (descripcion) => {
    //crear Json
    CargaDB();
    let porhacer = {
        desc: descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer);
    DataDB();
    return porhacer;
}

const Traerlista = () => {
    CargaDB(); //traer lista de json
    return listadoporhacer;
}
const actualizar = (desc, completado = true) => {
    CargaDB();

    let index = listadoporhacer.findIndex(tarea => tarea.desc === desc)
    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        DataDB();
        return true;
    } else {
        return false;
    }
}
const Eliminar = (desc) => {
    CargaDB();
    let nuevolistado = listadoporhacer.filter(tarea => tarea.desc !== desc);
    if (listadoporhacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoporhacer = nuevolistado;
        DataDB();
        return true;
    }

}
module.exports = {
    Crear,
    Traerlista,
    actualizar,
    Eliminar
}