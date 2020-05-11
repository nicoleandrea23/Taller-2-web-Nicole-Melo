//importar modulos
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//importar express
const express = require('express');
//importar expresshandlebars
const exphbs = require('express-handlebars');


//Importar productos
const configureRoutes = require('./routes');
//importar path pag absoluta
const path = require('path');

//instanciar servidor express
const app = express();
//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));

//Registrar motor de render para handle-bars
app.engine('handlebars', exphbs());

//Use el motor de render handle-bars
app.set('view engine', 'handlebars');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    configureRoutes(app, db);
});


//iniciar servidor en puerto
app.listen(3000, function () {
    console.log('servidor iniciando en puerto 3000');
});
