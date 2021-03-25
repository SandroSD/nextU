## Sistema de rejilla

- ¿Qué es una rejilla y qué compatibilidad tiene?

	- Una rejilla es una cuadrícula para distribuir elementos en una página HTML. Es muy utilizada en los sitios web para la organización de sus contenidos, así como en los diferentes frameworks CSS que veremos en las unidades siguientes. Se basa en la definición de un conjunto de filas y columnas que indican un tamaño relativo de los elementos con respecto al tamaño de la pantalla, haciendo que el diseño sea adaptativo. Una rejilla se define mediante la división del espacio en columnas, las cuales servirán de unidad de medida para cada elemento.

	- El tamaño horizontal de los bloques de contenido es definido por el número de columnas que abarca, el tamaño vertical se define según su contenido o diseño propio. El posicionamiento de un elemento se define según la fila de la rejilla en la que se encuentre. La compatibilidad de este tipo de diseño es una de sus principales ventajas, debido a que las propiedades en las que se fundamenta son aceptadas en todos los navegadores. Esto quiere decir, que un proyecto web con sistema de rejilla puede ser renderizado exitosamente en cualquier navegador.

- Width % y Box-Sizing:

	- Width %: ancho de un elemento. Se adapta mejor cuando toma valores en % y no en px.

	- Box-Sizing: indica como determinar la medida de una caja a partir de las medidas de su ancho (width) y alto (height).
		- Posibles valores:
			- content-box: valor usado por defecto en la propiedad de box-sizing, sin incluir padding, border y margin. La caja aumenta su tamaño con respecto a las medidas indicadas.
			- padding-box: indica que la caja tomará las medidas de las propiedades width y height, incluyendo padding pero excluyendo border y margin. El contenido se reduce para incluir el valor de padding.
			- border-box: las dimensiones especificadas por width y height incluyen padding y border, excluyendo unicamente margin.

- Sistema con 12 columnas:

	- col-2: indica que ocupará 2 columnas de la rejilla del máximo de 12 columnas.

	- se construye con propiedades generales y propiedades particulares.

	- Ejemplo: [grilla_css_ejemplo]

- Contenedores y Clearfix:

	- Clearfix: contenedor sin contenido no se muestra como se debe. En el ejemplo [ejemplo_clearfix] vemos como implementarlo.

- Sistema de rejilla adaptativa:

	- Los sistemas de rejilla además de facilitar la disposición estructural de una página web, también ofrecen la capacidad de modelar esquemas adaptativos para diferentes dispositivos. Como ya se ha visto, el diseño adaptativo se obtiene a partir de la definición de media-queries relacionadas con tamaños de pantalla específicos y el sistema de rejilla no es la excepción en este asunto. A partir del diseño base de la página, se realizan una serie de cambios que adapten mejor los contenidos, cuando la pantalla reduce o aumenta su tamaño.

	- Esto se obtiene a partir de una media-query por cada tamaño estándar de pantalla, que generalmente corresponde al tamaño pequeño para smartphones, tamaño mediano para tablets y tamaño grande para computadoras de escritorio.

	- En cada una de las media-queries definidas se realizan cambios en el tamaño de los contenedores y bloques de contenido para acomodar mejor la información de acuerdo al dispositivo desde el que se visualice. De esta manera, en pantallas grandes un contenedor puede tener un tamaño de 8 columnas pero en pantallas medianas puede que se reduzca a 6, o ya bien, aumente su tamaño, cambie de fila o simplemente desaparezca. El cambio en el tamaño de un elemento por medio de un media-query en el sistema de rejilla se denomina column reset.

	- La importancia del column reset es principalmente la facilidad que da al desarrollador de modificar la estructura de la página para que se adapte a pantallas más pequeñas y sea mostrado de manera más óptima. Esto permite que una sección se resalte o prevalezca sobre otras al visualizar los contenidos desde un smartphone, por ejemplo.

	- En la siguiente lección veremos en profundidad los frameworks CSS, los cuales están basados en el sistema de rejilla estudiado en esta lección y que cuentan con herramientas específicas para el manejo del column reset en diseños adaptativos.

- ¿Qué es un FRAMEWORK y por qué usarlo?

	- En general, un framework es un conjunto de librerías, herramientas y buenas prácticas que facilitan la labor del desarrollador al encapsular labores repetitivas en elementos reutilizables. En cualquier ámbito del desarrollo existen estos instrumentos que potencian las labores de codificación y optimizan los tiempos de construcción de software. Un framework CSS es un conjunto de carpetas que contienen archivos y hojas de estilo que le ahorran al diseñador web tareas como compatibilidad, diseño de estructura adaptabilidad, entre otras.

	- Framework CSS generalmente incluye: [herramientas_framework]

	- Se recomienda usar un framework CSS porque permite que el desarrollador web se dedique a lo verdaderamente importante: construir un diseño adecuado y estético de acuerdo a las necesidades del proyecto. De esta manera, la codificación se reduce en gran medida, ya que la herramienta ya ha realizado parte del trabajo. Imagina un framework como tu ayudante personal, que se encarga de labores simples y repetitivas, pero que a ti te tomarían mucho tiempo si no existiera. El desarrollo actual requiere rapidez y efectividad, es por tal motivo que los frameworks CSS son altamente usados. El tiempo y esfuerzo ahorrados en el desarrollo, son las principales razones por las cuales se deben usar estas herramientas. No es preciso reinventar la rueda en el desarrollo web, para eso existen los frameworks.

- Importación y uso de un framework:

	- Criterios para la elección:

		- Rapidez en la instalación.
		- Facilidad en la compresión.
		- Opciones ofrecidas.
		- Integración con otros sistemas.
		- Calidad en el soporte.