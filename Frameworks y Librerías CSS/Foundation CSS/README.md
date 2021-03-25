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
		- Ejemplo:

		`

			<div class="medium-3 large-3 end columns">Bloque</div>

		`