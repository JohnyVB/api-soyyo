const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = 3001;

        this.path = {
            handler: '/api/handler',
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.path.handler, require('../routes/handler.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;