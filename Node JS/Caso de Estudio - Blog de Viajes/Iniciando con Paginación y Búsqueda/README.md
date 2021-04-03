```Javascript

    <div class="row">
      <div class="col-sm-12">
        <form class="buscador" action="/">
          <label for="busqueda">Buscar publicación</label>
          <input type="text" id="busqueda" name="busqueda" />
          <button type="submit"><span class="icon-search"></span>Buscar</button>
        </form>
      </div>
    </div>





router.get('/', (peticion, respuesta) => {
  pool.getConnection((err, connection) => {
    let consulta
    let modificadorConsulta = ""
    const busqueda = ( peticion.query.busqueda ) ? peticion.query.busqueda : ""
    if (busqueda != ""){
      modificadorConsulta = `
        WHERE
        titulo LIKE '%${busqueda}%' OR
        resumen LIKE '%${busqueda}%' OR
        contenido LIKE '%${busqueda}%'
      ` 
    }
    consulta = `
      SELECT
      titulo, resumen, fecha_hora, pseudonimo, votos
      FROM publicaciones
      INNER JOIN autores
      ON publicaciones.autor_id = autores.id
      ${modificadorConsulta}
      ORDER BY fecha_hora DESC
      
    `
    connection.query(consulta, (error, filas, campos) => {
      respuesta.render('index', { publicaciones: filas , busqueda: busqueda})      
    })
    connection.release()
  })
})

value="<%=busqueda%>"

```
