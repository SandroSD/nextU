// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
const proximos = $('#proximos');

let fechaActual;
let eventos = [];
let eventosProximos = [];

$(document).ready(function () {

  $.ajax({
    url: "http://127.0.0.1:5500/JavaScript_Sandro_Dezerio/info.json"
  })
  .done(function(respuesta) {
    ({fechaActual, eventos} = respuesta);

    eventos.forEach(evento => {
      if(evento.fecha > fechaActual) {
        eventosProximos.push(evento);
      }
    });

    eventosProximos.sort((a,b) => (a.fecha > b.fecha) ? 1 : ((b.fecha > a.fecha) ? -1 : 0));

    let eventosProximosHTML = ``;
    eventosProximos.forEach(evento => {
      eventosProximosHTML += `
        <div class='col-12'>
          <div style='background-color: white;' class='m-2 p-3'>
            <h3 style='color: #9a24c1;'><a href='detalle.html?id=${evento.id}'>${evento.nombre}</h3>
            <p style='color: gray;'>${evento.fecha} - ${evento.lugar}</p>
            <p>${evento.descripcion}</p>
            <h5 style='color: gray;'>Invitados: ${evento.invitados}</h5>
          </div>
        </div>
      `;
    })

    proximos.html(eventosProximosHTML);
  });

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en variables

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
