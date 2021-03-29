const express = require('express');

const app = express();

app.get('/', (req, res) => {
	const fecha = new Date();
	res.type('html');
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
		</head>
		<body>
			<h1>Blog</h1>
			<h6>${fecha}</h6>
			<p>Bienvenido a este blog</p>
		</body>
		</html>
	`);
});

app.get('/acerca_de', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.sendFile(__dirname+"/public/acerca_de.html");
})

app.listen(8080, () => {
	console.log("Servidor Iniciado");
})