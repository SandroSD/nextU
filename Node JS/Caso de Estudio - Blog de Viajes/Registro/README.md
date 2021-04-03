```Javascript

<a href="/registro">Registro</a>|

aplicacion.get('/registro', function (peticion, respuesta) {
  respuesta.render('registro', { mensaje: peticion.flash('mensaje') })
})


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Blog Viajes</title>
  <link rel="stylesheet" href="stylesheets/estilos.css">
  <link rel="stylesheet" href="stylesheets/mini-default.min.css">
</head>

<body>
  <% include ./partials/encabezado_publico %>

  <div class="container">
    <h1>Registro</h1>
    <p>Ingresa tus datos para ser un nuevo autor</p>

    <div class="row">

      <div class="col-sm-12">

        <% if (mensaje && mensaje.length > 0) { %>
        <h4><span class="icon-info"></span>
          <%=mensaje%></h4>
        <% } %>

        <form action="/procesar_registro" method="POST">
          <fieldset>
            <legend>Nuevo autor</legend>
            <p>
              <label for="email">Email</label>
              <br>
              <input type="email" id="email" name="email" required="true" />
            </p>
            <p>
              <label for="contrasena">Contrasena</label>
              <br>
              <input type="password" id="contrasena" name="contrasena" required="true" />
            </p>
            <p>
              <label for="pseudonimo">Pseudónimo</label>
              <br>
              <input type="text" id="pseudonimo" name="pseudonimo" required="true" />
            </p>
            <p>
              <input class="primary" type="submit" value="Continuar" />
            </p>
          </fieldset>
        </form>
      </div>

    </div>

  </div>

  <% include ./partials/pie %>
  <script src="javascripts/script.js"></script>
</body>

</html>




aplicacion.post('/procesar_registro', function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {

    const email = peticion.body.email.toLowerCase().trim()
    const pseudonimo = peticion.body.pseudonimo.trim()
    const contrasena = peticion.body.contrasena

    
    connection.release()
  })
})


    const consultaEmail = `
      SELECT *
      FROM autores
      WHERE email = ${connection.escape(email)}
    `

    connection.query(consultaEmail, function (error, filas, campos) {
      
    })


    if (filas.length > 0) {
        peticion.flash('mensaje', 'Email duplicado')
        respuesta.redirect('/registro')
      }
      else {

        
      }


      const consultaPseudonimo = `
          SELECT *
          FROM autores
          WHERE pseudonimo = ${connection.escape(pseudonimo)}
        `

        connection.query(consultaPseudonimo, function (error, filas, campos) {
          if (filas.length > 0) {
            peticion.flash('mensaje', 'Pseudonimo duplicado')
            respuesta.redirect('/registro')
          }
          else {

            
          }
        })


        const consulta = `
                                INSERT INTO
                                autores
                                (email, contrasena, pseudonimo)
                                VALUES (
                                  ${connection.escape(email)},
                                  ${connection.escape(contrasena)},
                                  ${connection.escape(pseudonimo)}
                                )
                              `
            connection.query(consulta, function (error, filas, campos) {
              peticion.flash('mensaje', 'Usuario registrado')
              respuesta.redirect('/registro')
            })



```
