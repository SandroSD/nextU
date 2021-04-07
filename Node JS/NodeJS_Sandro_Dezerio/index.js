const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes');

app.use(routes);

app.listen(8080, () => {
	console.log("Servidor iniciado en el puerto: 8080");
})