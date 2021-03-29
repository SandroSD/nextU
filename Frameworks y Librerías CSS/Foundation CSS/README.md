## Foundation CSS

- ¿Qué es?

	- Foundation es un framework front-end catalogado como uno de los mejores en el diseño y estructuración de proyectos web adaptativos.

	- Fue creado por la empresa de diseño interactivo ZURB con el objetivo de desarrollar código más rápido y mejor. Está construido en HTML, CSS y JavaScript, lo cual lo hace compatible con cualquier tecnología back-end y permite su aplicación en cualquier tipo de proyecto.
	- La versión vigente de Foundation es la número 6, que respecto a versiones anteriores ha optimizado sus características tales como el 50% en la reducción del código, la construcción de componentes pensados para la accesibilidad web, menor cantidad de estilos para sobreescribir, sistema de rejilla sass personalizable, herramientas de prototipado ZURB, movimiento en la interfaz de usuario y patrones de diseño más flexibles.

	- La principal ventaja de Foundation es que es el único framework profesionalmente soportado por una organización, la cual posee amplia experiencia en el ámbito de los proyectos web para todo tipo de empresas. Adicionalmente, es un proyecto con más de cinco años de trayectoria, teniendo múltiples versiones que lo hacen cada vez mejor y actualizado en cuanto a herramientas y tecnologías de vanguardia.

	- En la actualidad, muchos portales en la web usan este framework. En la siguiente lista, hay una corta selección de compañías populares cuyas páginas web son diseñadas usando Foundation. Echa un vistazo a sus sitios oficiales para que puedas observar todo lo que esta herramienta puede hacer.

		- Car and Driver. http://www.caranddriver.com/
		- Polar: http://www.polar.com/us-en
		- EA Star Wars: http://starwars.ea.com/es_ES/
		- HP Store: http://store.hp.com/us/en/
		- Universidad de Cambridge: http://www.cambridge.org/
		- Dominos Careers: https://jobs.dominos.com/dominos-careers/
		- Toms: http://www.toms.com/
		- JQuery: https://jquery.com/

- ¿Cómo iniciar con Foundation?

	- descargar desde su página oficial: foundation.zurb.com

- ¿Cómo usar Foundation?

	- importar los .css (con la etiqueta <link>) y .js (con la etiqueta <script>) en nuestro .html

- Conceptos básicos de Grid

	- Ejemplo:

	`

		<div class="row">
			<div class="column (small/medium/large)-(1..12)">
				<div class="column small-4 medium-3 large-7">Ejemplo</div>
				<div class="row column">Columna de la totalidad del ancho</div>
				<div class="expanded row">Columna expandida</div>
			</div>
		</div>

	`

- Opciones de columna de Grid:

	- (small/medium/large)-offset-3: Permite mover bloques hacia la derecha de la rejilla. "Prefijo adaptativo"-"offset"-(numero de filas).
	- la clase end nos permite dejar espacio al final de la fila.
	- collapse: no haya espacio entre columnas.
	- uncollapse: espacio entre columnas.

		- Ejemplo:

		`

			<div class="row medium-uncollapse large-collapse">
				<div class="medium-3 large-3 columns">Bloque 1</div>
				<div class="medium-3 large-3 columns">Bloque 2</div>
				<div class="medium-3 large-3 end columns">Bloque 3</div>
			</div>

		`

	- centered: centrar un bloque en una fila.
	- uncentered: quitar efecto de centrar un bloque.

		- Ejemplo:

		`
		
			<div class="row">
				<div class="medium-3 medium-centered large-uncentered columns">1 bloque</div>
			</div>

		`

	- push: cambiar posiciones del bloque en el grid. Mover a la derecha.
	- pull: cambiar posiciones del bloque en el grid. Mover a la izquierda.

		- Ejemplo:

		`
		
			<div class="row">
				<div class="small-8 small-push-4 columns">8 push -></div>
				<div class="small-4 small-pull-8 columns">4 pull <-</div>
			</div>
		
		`

- Flex Grid:

	- consiste en una estructura de la pagina basada en flex box y no en columnas. Descarga personalizada en flex grid.

	Ejemplo:

	`
	
		<div class="row">
			<div class="small-5 medium-4 large-3 columns">
				<div class="callout primary">Columna 1</div>
			</div>
			<div class="small-7 medium-8 large-9 columns">
				<div class="callout primary">Columna 2</div>
			</div>
		</div>

		<div class="row">
			<div class="small-6 medium-3 large-5 columns">
				<div class="callout primary">Columna 1</div>
			</div>
			<div class="columns">
				<div class="callout primary">Columna 2</div>
			</div>
		</div>
	
	`

	- Este ultimo ejemplo de la segunda columna no tiene definición del tamaño. Ocupará el ancho restante dependiendo de la dimensión de la página.

	- shrink: indica a la columna que el tamaño de la columna se dará en base al contenido que posea.

		- Ejemplo:

		`

			<div class="row">
				<div class="columns">
					<div class="callout primary">Columna 1</div>
				</div>
				<div class="columns shrink">
					<div class="callout primary">Columna 2</div>
				</div>
			</div>

		`
	
	- expand: indica a la columna que ocupe el tamaño disponible en su contenedor. Es útil cuando hay cambio de estructuración entre dispositivos.

		- Ejemplo:

		`

			<div class="row">
				<div class="small-12 medium-expand columns">
					<div class="callout primary">Columna 1</div>
				</div>
				<div class="small-12 medium-expand columns">
					<div class="callout primary">Columna 2</div>
				</div>
				<div class="small-12 medium-expand columns">
					<div class="callout primary">Columna 3</div>
				</div>
				<div class="small-12 medium-expand columns">
					<div class="callout primary">Columna 4</div>
				</div>
			</div>

		`

	- stack y unstack.

		- Ejemplo:

			`

				<div class="row small-stack medium-unstack">
					<div class="columns">
						<div class="callout primary">Columna 1</div>
					</div>
					<div class="columns">
						<div class="callout primary">Columna 2</div>
					</div>
					<div class="columns">
						<div class="callout primary">Columna 3</div>
					</div>
					<div class="columns">
						<div class="callout primary">Columna 4</div>
					</div>
				</div>

			`

- Alineación y Orden en Flex Grid:

	- align-(center/right/justify/spaced): alinea las columnas para la dirección donde se indique. (horizontal)
	- align-self-(top/middle/bottom): alinea las columnas para la dirección donde se indique. (vertical)

	- (large/small)-order-(numero): orden de las columnas en la página según el tamaño de la pantalla. Hay que asignarle el numero de orden a todos los elementos.

