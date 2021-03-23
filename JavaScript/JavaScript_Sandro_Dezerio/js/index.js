// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

const proximos = $('#proximos');
const pasados = $('#pasados');

let fechaActual;
let eventos = [];
let eventosAnteriores = [];
let eventosProximos = [];

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "http://127.0.0.1:5500/JavaScript_Sandro_Dezerio/info.json"
  })
  .done(function(respuesta) {
    ({fechaActual, eventos} = respuesta);

    eventos.forEach(evento => {
      if(evento.fecha > fechaActual) {
        eventosProximos.push(evento);
      } else {
        eventosAnteriores.push(evento);
      }
    });

    eventosProximos.sort((a,b) => (a.fecha > b.fecha) ? 1 : ((b.fecha > a.fecha) ? -1 : 0));
    eventosAnteriores.sort((a,b) => (a.fecha > b.fecha) ? 1 : ((b.fecha > a.fecha) ? -1 : 0));

    const eventosAnterioresHTML = `
      <div class='col-6'>
        <div style='background-color: white;' class='mr-2 p-3'>
          <h3 style='color: #9a24c1;'><a href='detalle.html?id=${eventosAnteriores[0].id}'>${eventosAnteriores[0].nombre}</a></h3>
          <p style='color: gray;'>${eventosAnteriores[0].fecha}</p>
          <p>${eventosAnteriores[0].descripcion}</p>
        </div>
      </div>
      <div class='col-6'>
        <div style='background-color: white;' class='ml-2 p-3'>
          <h3 style='color: #9a24c1;'><a href='detalle.html?id=${eventosAnteriores[1].id}'>${eventosAnteriores[1].nombre}</a></h3>
          <p style='color: gray;'>${eventosAnteriores[1].fecha}</p>
          <p>${eventosAnteriores[1].descripcion}</p>
        </div>
      </div>
    `;

    const eventosProximosHTML = `
      <div class='col-6'>
        <div style='background-color: white;' class='mr-2 p-3'>
          <h3 style='color: #9a24c1;'><a href='detalle.html?id=${eventosProximos[0].id}'>${eventosProximos[0].nombre}</a></h3>
          <p style='color: gray;'>${eventosProximos[0].fecha}</p>
          <p>${eventosProximos[0].descripcion}</p>
        </div>
      </div>
      <div class='col-6'>
        <div style='background-color: white;' class='ml-2 p-3'>
          <h3 style='color: #9a24c1;'><a href='detalle.html?id=${eventosProximos[1].id}'>${eventosProximos[1].nombre}</a></h3>
          <p style='color: gray;'>${eventosProximos[1].fecha}</p>
          <p>${eventosProximos[1].descripcion}</p>
        </div>
      </div>
    `;

    pasados.html(eventosAnterioresHTML);
    proximos.html(eventosProximosHTML);

  });


  //Guarda el resultado en variables

  //Clasifica los eventos segun la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
