const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./src/routers/cart.js', './src/routers/order.js', './src/routers/item.js', './src/routers/outlet.js', './src/routers/user.js', './src/routers/util.js', './src/routers/wishlist.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
