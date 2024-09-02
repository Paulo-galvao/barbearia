const model = require('../models/cliente.js');

const db = [
    {
        id: 1,
        nome: "denilson",
        telefone: 999223344,
        email: "den@gmail",
        senha: 1234
    }
];

let lastId;

if(db.length == 0) {
    lastId = 0;
} else {
    lastId = db[db.length -1].id;
}

function store(body) {
    lastId++;
    const cliente = model(body, lastId);
    if(cliente != undefined) {
        db.push(cliente);
        return 201;
    }  else {
        return 400;
    }
}

function showAll() {
    return db;
}

function showById(id) {
    return db[id -1];
}

function update(body, id) {
    const cliente = model(body, lastId);
    const index = db.findIndex(el => el.id == id);

    if(cliente != undefined && index != -1) {
        db[index] = cliente;
        return 201; 
    } else {
        return 400;
    }
}

function destroy(id) {
    const index = db.findIndex(el => el.id == id);
    if(index != -1) {
        db.splice(db[index], 1);
        return 201; 
    } else {
        return 400;
    }
}

module.exports = {store, showAll, showById, update, destroy};