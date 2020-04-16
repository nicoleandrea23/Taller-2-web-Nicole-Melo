//importar express
const express= require ('express');

//importar path pag absoluta
const path= require ('path');

//instanciar servidor express
const app= express();

//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));


//configurar ruta inicial
app.get('/', function(req, res){ 
    //console.log('hola en la consola');
    //res.send('hola en el chrome');

    //se agrega taller 1
    response.senFile(path.join(__dirname,'/public/index.html'))
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
