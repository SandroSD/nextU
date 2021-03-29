## Express

- Introducción

	- ¡Hola! Excelente momento para seguir descubriendo a Node.js. En esta oportunidad te presentamos a  Express, el cual es un entorno para construir aplicaciones Web Node.js definido como minimalista y flexible.  En esta unidad estudiamos diversos conceptos y funcionalidades de este framework. Comenzamos con los elementos básicos de direccionamiento y enrutamiento que incluye la definición de rutas, vía de acceso de rutas, los métodos de rutas y los manejadores de rutas.  

	- En Express existe la posibilidad de definir funciones intermedias que se encadenan con un propósito específico, a las cuales se denominan middlewares, que son presentados a través del uso de varios ejemplos durante esta parte de nuestra trayectoria por el framework. 

	- Aunque las aplicaciones Web generalmente trabajan con contenidos dinámicos, es posible también manejar contenidos estáticos en dichas aplicaciones. Muy ligado a la generación de contenidos están las plantillas, que funcionan como patrones para establecer cómo desplegar nuestras páginas.

	- Seguidamente descubriremos cómo usar parámetros que pueden viajar en un URL dentro de nuestra aplicación Web, para entonces explorar lo que son las sesiones que nos permiten guardar cierto contenido que deseamos compartir entre las páginas de nuestro sitio.

	- Para finalizar nuestra iniciación por Express, estudiamos cómo conectarnos a una base de datos para consultarla y enviar la evaluación de dichas consultas a través de un HTML.

	- Durante el recorrido por Express definiremos rutas, y construiremos plantillas y middlewares a través del uso de ciertas librerías que poco a poco iremos incorporando en nuestro entorno.  También practicaremos cómo conectarnos a una base de datos MySQL para realizar algunos queries.

- Fundamentos del Direccionamiento y Rutas en Node Express

	- Un Identificador de Recurso Uniforme o Uniform Resource Identifier (URI) identifica un recurso que puede ser físico o abstracto, (y en cierta forma indica su localización), a través de una secuencia de caracteres que pueden contener letras del alfabeto latino, dígitos y algunos caracteres especiales. Un recurso puede ser una imagen, un documento electrónico, o incluso recursos abstractos como tipos de relaciones, tal como padre de. Cualquiera de las siguientes secuencias puede ser considerada un URI:

	- https://www.nextu.com/

	- mailto:Maria.Doe@example.com

	- https://www.ietf.org/rfc/rfc3986.txt

	- El URI es un identificador usado por el sistema como referencia para determinar el recurso sobre el cual realizará alguna operación, tal como acceder, actualizar o reemplazar dicho recurso. Las operaciones son definidas por los procedimientos o funciones que emplean los URIs.

	- En Node Express las vías de acceso de rutas son los URIs.

- Direccionamiento

	- El direccionamiento se define como la forma en que una aplicación Web responde a una petición del cliente para un punto final o recurso particular, que se identifica a través de un URI o vía de acceso de ruta. Una ruta puede tener una o más  funciones, denominadas handlers, que se ejecutan cuando hay una coincidencia.

	- A continuación se muestra la estructura general de una ruta:

	- app.METODO (vía de acceso, manejador)

	- app: es un instancia de express

	- METODO: es un método HTTP

	- vía de acceso de ruta: es la vía de acceso en el servidor

	- manejador (o handler en inglés): es la función que se ejecuta cuando la ruta coincide. Puede haber más de una función manejadora.

	- Un ejemplo básico de ruta es aquel donde se envía un saludo de ¡Hola Mundo! cuando hay una coincidencia con la ruta “/” (página inicial).

	`

		var express = require('express');var app = express();// responder con ¡Hola Mundo! cuando se realiza un requerimiento de GET a la página inicialapp.get('/', function(req, res) {  res.send('¡Hola Mundo!');});

	`

- Métodos de Ruta

	- Los métodos de ruta se corresponden con los métodos HTTP. Algunos de los métodos soportados por la herramienta son los siguientes: get, post, put, head, delete, subscribe, unsubscribe, patch, search y connect.

	- A continuación un ejemplo de ruta que se define para el método POST:

	`

		app.all('/servicios', function (req, res, next) { res.send('Accediendo servicios ...');  });

	`

- Vía de Acceso de  Ruta

	- Las vías de acceso de rutas se componen de strings, patrones de strings o expresiones regulares. Ellas en conjunto con los métodos de la solicitud (e.g. GET) definen los puntos finales en los cuales se pueden realizar peticiones.

	- En la siguiente tabla mostramos algunos ejemplos de vías de acceso de rutas [ejemplo_rutas]