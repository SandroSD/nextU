const express = require('express');
const autenticador = require('./middleware/autenticador');

const app = express();

// En la pagina html, al agregar el css, no hace falta linkear la ruta completa ya que la agregamos como ruta estática.
// app.use(express.static('stylesheets'));
// app.use(express.static('images'));

// En producción se suele agrupar todo en una sola carpeta llamado assets.
// .use puede usar prefijos para las rutas.
app.use('/static', express.static('assets'));

app.use((req, res, next) => {
	console.log("Middleware");
	next();
});

app.use(autenticador);

app.get("/", (req, res) => {
	res.send("Hola");
})

app.get("/inicio", (req, res) => {
	res.sendFile(__dirname+"/paginas/inicio.html");
})

app.listen(8080, () => {
	console.log("Servidor iniciado en el puerto 8080");
})