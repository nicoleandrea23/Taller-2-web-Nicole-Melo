const assert = require('assert');

function configureRoutes(app, db) {
    //configurar ruta inicial
    app.get('/', function (req, res) {
        //console.log('hola en la consola');
        //res.send('hola en el chrome');

        //se agrega taller 1
        res.senFile(path.join(__dirname, '/public/index.html'));
    });

    //Ruta para la lista de productos con handlebars
    app.get('/tienda', function (req, res) {

        var filters = {
            $and: []
        };

        if (req.query.price_eq) {
            filters.$and.push({
                price: {
                    $eq: parseInt(req.query.price_eq)
                }
            });
        }

        if (req.query.type_eq) {
            filters.$and.push({
                type: {
                    $eq: req.query.type_eq
                }
            });
        }

        if (filters.$and.length == 0) {
            delete filters.$and;
        }

        var sortings = {};

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function(err, docs) {
            assert.equal(err, null);

            //crear contexto
            var context = {
                products: docs,
            };

            //renderizar archivo list.handlebars con el contexto creado 
            res.render('store', context);

        });

    });

    //Ruta para especificaciones de un producto con handlebars
    app.get('/product/:name/:id', function (req, res) {
        //Objeto contexto
        var context = {};

        //Buscar en la base de datos el producto correspondiente
        //Pasar las variables de ese elemento al contexto
        context = products.find(function (elem) {
            if (elem.id == req.params.id) {
                return true;
            }
        });

        //Renderizar vista
        res.render('product', context);
    });

    app.get('/contacto', function (req, res) {
        console.log('hola en la contacto');
        res.send('pag de contacto');
    });

    app.get('/nosotros', function (req, res) {
        res.send('texto bien cool');
    });

}
module.exports = configureRoutes;