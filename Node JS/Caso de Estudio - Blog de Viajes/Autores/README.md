```Javascript

<a href="/autores" class="button"><span class="icon-user"></span> Autores</a>


router.get('/autores', (peticion, respuesta) => {
  pool.getConnection((err, connection) => {
    

    connection.release()
  })
})


const consulta = `
      SELECT *
      FROM autores
    `
    
    
    connection.query(consulta, (error, filas, campos) => {
      respuesta.render('autores', { autores: filas })
    })



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Blog Viajes</title>
  <link rel="stylesheet" href="/stylesheets/estilos.css">
  <link rel="stylesheet" href="/stylesheets/mini-default.min.css">
</head>

<body>
  <% include ./partials/encabezado_publico %>

  <div class="container">
    <img src="images/fondo.jpg" width="100%">
    



  </div>

  <% include ./partials/pie %>
  <script src="/javascripts/script.js"></script>
</body>

</html>



<h1>Autores</h1>

    <p>Conoce a nuestros autores:</p>

    <div class="row">

      <% autores.forEach(autor => { %>
      <div class="col-sm-12">
        <div class="card fluid ">
          <h3 class="section">
            

          </h3>
        </div>
      </div>
      <% }) %>

    </div>


    <% if (autor.avatar && autor.avatar != "") { %>
            <img class="avatar" src="/avatars/<%=autor.avatar%>" />
            <% } else {
            %>
            <span class="icon-user"></span>
            <% } %>




            <%=autor.pseudonimo%>

```
