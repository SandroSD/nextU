```Javascript



    <div class="row">
      <div class="col-sm-12">
        <p class="centrado">
          <a href="/?pagina=<%=pagina-1%>"><< Anterior</a>
          |
          <a href="/?pagina=<%=pagina+1%>">Siguiente >>
          </a>
        </p>
      </div>
    </div>




let modificadorPagina = ""
    let pagina = 0
    


modificadorPagina = ""

else{
      pagina = ( peticion.query.pagina ) ? parseInt(peticion.query.pagina) : 0
      if (pagina < 0) {
        pagina = 0
      }
      modificadorPagina = `
        LIMIT 5 OFFSET ${pagina*5}
      `
    }



${modificadorPagina}




respuesta.render('index', { publicaciones: filas , busqueda: busqueda, pagina: pagina})


```
