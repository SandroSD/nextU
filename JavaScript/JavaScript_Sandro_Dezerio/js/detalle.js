// Hemos omitido los acentos en los comentarios por compatibilidad

const eventoRef = $('#evento');

$(document).ready(function () {

  const urlParams = new URLSearchParams(window.location.search);
  const idEvento = urlParams.get('id');

  $.ajax({
    url: "http://127.0.0.1:5500/JavaScript_Sandro_Dezerio/info.json"
  })
  .done(function(respuesta) {
    ({eventos} = respuesta);

    let eventoCompleto = '';

    eventos.forEach(evento => {
      if(evento.id === parseInt(idEvento)) {
        eventoCompleto = evento;
      }
    });

    console.log("evento", eventoCompleto);
    
    const eventoHTML = `
      <div class='col-12'>
        <div style='background-color: white;' class='m-2 p-3'>
          <h3 style='color: #9a24c1;'><a href='detalle.html?id=${eventoCompleto.id}'>${eventoCompleto.nombre}</h3>
          <p style='color: gray;'>${eventoCompleto.fecha} - ${eventoCompleto.lugar}</p>
          <p>${eventoCompleto.descripcion}</p>
          <h5 style='color: gray;'>Invitados: ${eventoCompleto.invitados}</h5>
        </div>
      </div>
    `;

    eventoRef.html(eventoHTML);
  });

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
