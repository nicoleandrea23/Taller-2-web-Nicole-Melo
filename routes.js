const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

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

        if (req.query.sort == 'price_desc') {
            sortings.price = -1;
        }
        if (req.query.sort == 'price_asc') {
            sortings.price = 1;
        }

        if (req.query.sort == 'new_products') {
            sortings.new = 1;
        }

        if (req.query.sort == 'popularity') {
            sortings.popularity = 1;
        }

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function (err, docs) {
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

        if (req.params.id.length != 24) {
            res.redirect('/404');
            return;
        }

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            console.log(docs)

            if (docs.length == 0) {
                res.redirect('/404');
                return;
            }
            // crear el contexto
            var context = docs[0];
            //Renderizar vista
            res.render('product', context);

            //Objeto contexto
            //var context = {};

            //Buscar en la base de datos el producto correspondiente
            //Pasar las variables de ese elemento al contexto
            //context = products.find(function (elem) {
            //if (elem.id == req.params.id) {
            //return true;
            //}
        });
    });

    //Ruta para el checkout con handlebars
    app.get('/checkout', function (req, res) {
        //Renderizar vista
        res.render('checkout');
    });

    //Ruta para el formulario con handlebars
    app.get('/form', function (req, res) {
        //Renderizar vista
        res.render('form');
    });

    //Recibir informacion del usuario
    app.post('/form', function (req, res) {
        //Renderizar vista
        res.send('test');
    });

}
module.exports = configureRoutes;