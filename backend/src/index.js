//Métodos HTTP: GET(buscar), POST(pegar), PUT(editar), DELETE

// Tipos de parâmetros:
// -> Query Params: request.query (Filtors, ordenação, paginação, ...)
// -> Route Params: request.params (Identificar um recurso na alteração ou remoção)
// -> Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://esther:61469559@cluster0-aw6uj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors()); //{ origin: 'http://localhost:3000' }
app.use(express.json());
app.use(routes);

server.listen(3333);