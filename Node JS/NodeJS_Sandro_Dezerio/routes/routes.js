const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const pool = mysql.createPool({
	connectionLimit: 20,
	host: 'localhost',
	user: 'root',
	password: 's4ndr0',
	database: 'blog_viajes'
});

router.get(`/api/v1/publicaciones`, (req, res) => {
	const busqueda = req.query.busqueda || '';

	pool.getConnection((err, conn) => {
		let sql = `
			SELECT *
				FROM publicaciones
		`;
		
		if(busqueda) {
			sql += `
				WHERE titulo LIKE '%${busqueda}%' OR
					  contenido LIKE '%${busqueda}%' OR
					  resumen LIKE '%${busqueda}%'
			`;
		}
		conn.query(sql, (err, rows, fields) => {
			res.json({ data: rows});
		})
		conn.release();
	});
});

router.get(`/api/v1/publicaciones/:id`, (req, res) => {
	const id = req.params.id || '';

	if(!id) {
		res.json({ err: 'El id no es válido.' });
	}

	pool.getConnection((err, conn) => {
		const sql = `
			SELECT *
				FROM publicaciones
				WHERE id = ${conn.escape(id)}
		`;

		conn.query(sql, (err, rows, fields) => {
			if(rows.length > 0) {
				res.json({ data: rows[0] });
			} else {
				res.status(204)
				res.json({ err: 'Publicación no encontrada'});
			}

		});

		conn.release();
	});
});

router.get(`/api/v1/autores`, (req, res) => {

	pool.getConnection((err, conn) => {
		let sql = `
			SELECT *
				FROM autores
		`;
		
		conn.query(sql, (err, rows, fields) => {
			res.json({ data: rows });
		})
		conn.release();
	});
});

router.get(`/api/v1/autores/:id`, (req, res) => {
	const id = req.params.id || '';

	if(!id) {
		res.json({ err: 'El id no es válido.' });
	}

	pool.getConnection((err, conn) => {
		const sql = `
			SELECT *
				FROM autores
				WHERE id = ${conn.escape(id)}
		`;

		conn.query(sql, (err, rows, fields) => {
			if(rows.length > 0) {
				res.json({ data: rows[0] });
			} else {
				res.status(204)
				res.json({ err: 'Autor no encontrado'});
			}

		});

		conn.release();
	});
});

router.post(`/api/v1/autores`, (req, res) => {
	pool.getConnection((err, conn) => {
		const { email, contrasena, pseudonimo } = req.body;

		const sqlMailDuplicado = `
			SELECT *
				FROM autores
				WHERE email = ${conn.escape(email)}
		`;

		conn.query(sqlMailDuplicado, (err, rows, fields) => {
			if (rows.length > 0) {
				res.status(400)
				res.json({ err: `Email duplicado.` });
			} else {
				const sqlPseudonimoDuplicado = `
					SELECT *
						FROM autores
						WHERE pseudonimo = ${conn.escape(pseudonimo)}
				`;

				conn.query(sqlPseudonimoDuplicado, (err, rows, fields) => {
					if(rows.length > 0) {
						res.status(400)
						res.json({ err: `Pseudonimo duplicado.` });
					} else {
						const sqlInsert = `
							INSERT INTO autores (email, contrasena, pseudonimo)
								VALUES (
									${conn.escape(email)},
									${conn.escape(contrasena)},
									${conn.escape(pseudonimo)}
								)
						`;

						conn.query(sqlInsert, (err, rows, fields) => {
							if(err) throw err;

							res.status(201)
							res.json({
								id: rows.insertId,
								email,
								contrasena,
								pseudonimo
							});
						})
					}
				})
			}
		})
	});
});

router.post('/api/v1/publicaciones', (req, res) => {
	const { email, contrasena } = req.query;
	const { titulo, resumen, contenido } = req.body;

	pool.getConnection((err, conn) => {
		const sqlMailYContrasena = `
			SELECT *
				FROM autores
				WHERE email = ${conn.escape(email)}
					AND contrasena = ${conn.escape(contrasena)}
		`;

		conn.query(sqlMailYContrasena, (err, rows, fields) => {
			if(err) throw err;

			if(rows.length > 0) {
				const sqlInsert = `
					INSERT
						INTO publicaciones(titulo, resumen, contenido, autor_id)
						VALUES (
							${conn.escape(titulo)},
							${conn.escape(resumen)},
							${conn.escape(contenido)},
							${rows[0].id}
						)
				`;

				conn.query(sqlInsert, (err, rows, fields) => {
					if(err) throw err;

					res.status(201)
					res.json({
						id: rows.insertId,
						titulo,
						resumen,
						contenido
					});
				});
			} else {
				res.status(500)
				res.json({ err: `Mail o Contraseña inválidos.` });
			}
		});
	});
});

router.delete(`/api/v1/publicaciones/:id`, (req, res) => {
	const { id } = req.params;
	const { email, contrasena } = req.query;

	pool.getConnection((err, conn) => {
		const sqlMailYContrasena = `
			SELECT *
				FROM autores
				WHERE email = ${conn.escape(email)}
					AND contrasena = ${conn.escape(contrasena)}
		`;

		conn.query(sqlMailYContrasena, (err, rows, fields) => {
			if(err) throw err;

			if(rows.length > 0) {
				const autor = rows[0];
	
				const sqlPublicacion = `
					SELECT *
						FROM publicaciones
						WHERE autor_id = ${conn.escape(autor.id)}
				`;
	
				conn.query(sqlPublicacion, (err, rows, fields) => {
					if(err) throw err;
	
					if(rows.length > 0) {
						const sqlDelete = `
							DELETE
								FROM publicaciones
								WHERE id = ${conn.escape(id)}
						`;
	
						conn.query(sqlDelete, (err, rows, fields) => {
							if(err) throw err;
	
							if(rows.length > 0) {
								res.status(200)
								res.json({ msg: 'Publicación borrada exitosamente.' })
							} else {
								res.status(400)
								res.json({ err: 'No existe la publicación.' });
							}
						});
					} else {
						res.status(400)
						res.json({ err: 'La publicación no corresponde al autor.' });
					}
				});
			} else {
				res.status(400)
				res.json({ err: 'Credenciales inválidas.' });
			}
		});
	});

});

module.exports = router;