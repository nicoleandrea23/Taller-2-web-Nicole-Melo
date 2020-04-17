//importar express
const express= require ('express');

//importar path pag absoluta
const path= require ('path');

//importar expresshandlebars
const exphbs = require('express-handlebars');

//Importar productos
const products = require('./products');

//instanciar servidor express
const app= express();

//Registrar motor de render para handle-bars
app.engine('handlebars', exphbs());

//Use el motor de render handle-bars
app.set('view engine', 'handlebars');

//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));


//configurar ruta inicial
app.get('/', function(req, res){ 
    //console.log('hola en la consola');
    //res.send('hola en el chrome');

    //se agrega taller 1
    res.senFile(path.join(__dirname,'/public/index.html'))
});

//Ruta para la lista de productos con handlebars
app.get('/tienda', function (req, res){
    //Objeto contexto
    var context = {
        products: products,
    };

    //Renderizar vista
    res.render('store',context);
});

//Ruta para especificaciones de un producto con handlebars
app.get('/product/:name/:id', function (req, res){
    //Objeto contexto
    var context = {};

    //Buscar en la base de datos el producto correspondiente
    //Pasar las variables de ese elemento al contexto
    context = products.find(function (elem){
        if(elem.id == req.params.id){
            return true;
        }
    });

    //Renderizar vista
    res.render('product', context);
});

app.get('/contacto', function(req, res){ 
    console.log('hola en la contacto');
    res.send('pag de contacto');
});

app.get('/nosotros', function(req, res){ 
    res.send('texto bien cool');
});

//iniciar servidor en puerto
app.listen(3000,function(){ 
    console.log('servidor iniciando en puerto 3000');
});
