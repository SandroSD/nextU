# Sails

## ¿Qué necesitas?

    - Además de muchas ganas de aprender y compromiso en tu rutina de estudio, necesitarás un computador o portátil donde puedas realizar tus ejercicios y visualizar el material que hemos diseñado para ti. En cuanto a las herramientas, no te preocupes, cada vez que se requiera alguna te iremos indicando cómo instalarla y configurarla. Recomendamos que tengas conocimientos en tecnologías HTML, CSS, Fundamentos de Base de Datos y Node.js para aprovechar al máximo el contenido que preparamos.

## Objetivos de aprendizaje

    - 1. Aplicar los fundamentos y principios de Sails en la construcción de aplicaciones Web.

    - 2. Crear aplicaciones Web en Sails de acuerdo a lo estipulado en el patrón MVC a través del uso de las utilidades, herramientas y librerías proporcionadas por el framework. 

    - 3. Relacionar cada componente del patrón MVC con su correspondiente implementación en Sails, con la finalidad de implementar correctamente el flujo MVC.


## Iniciando con Sails

    - ¡Te damos la Bienvenida a esta travesía por Node Backend! Comenzamos nuestro recorrido revisando las diversas formas de reusar códigos en nuestras aplicaciones, como mecanismo para facilitar y apresurar el desarrollo de aplicaciones Web, en particular, aquellas que involucran muchas líneas de código.  Estas opciones abren el camino para introducir el concepto de framework que ocupa nuestra atención durante este recorrido por el entorno de programación Node. 

    - Un concepto importante en el desarrollo de aplicaciones es el de patrón MVC por sus siglas en inglés Model, View and Controller que traducido al español es Modelo, Vista y Controlador.  Analizaremos brevemente este modelo de desarrollo de software que constituye uno de los pilares dentro del desarrollo de aplicaciones Backend.

    - Seguidamente, explicaremos los conceptos relacionados con los frameworks y su utilidad en la construcción de aplicaciones Web, y nos enfocaremos en los frameworks que usan el patrón MVC. Aunque en el mercado existen varias opciones, nosotros estudiaremos el framework Sails.js  especialmente desarrollado para Node y que usa JavaScript. 

    - Una vez que hayamos ingresado en el mundo de Sails, configuraremos el framework para poder operar con él, pero primero estudiaremos cada uno de los elementos de la estructura de carpetas que marcan la pauta para el desarrollo de nuestras aplicaciones. Luego de ello, iremos analizando cómo implementar cada uno de los componentes del patrón MVC en Sails, comenzando por los Modelos, siguiendo con las Vistas y finalizando con el Controlador.


## Frameworks

    - En esta oportunidad vamos a explorar los Frameworks Web, iniciemos estudiando el reuso de código.

### Reuso de Código

    - Hay múltiples razones para usar un código que ya ha sido desarrollado por otro; entre ellas cabe resaltar que ya la solución está construida y probada, y que se disminuye la cantidad de códigos que debemos escribir.

    - Hay varias estrategias para usar el código de otro. La primera es copiar y pegar, la cual es simple pero no es extensible, no soporta nuevas versiones, se basa en la actualización manual del código, lo cual puede causar múltiples errores en el software, y el programa puede estar escrito usando otros estándares de programación. El resultado es un código que puede ser muy desordenado.

    - La segunda forma es a través del uso de librerías. Las librerías son componentes de software qué están hechos para ser reutilizados, por lo tanto tienen unas entradas y unas salidas bien definidas, que permiten que sean insertadas fácilmente en nuestro código.

    - La tercera opción es emplear frameworks. Un framework es un conjunto de librerías que proporcionan una estructura para construir el código, el cual puede ser rellenado con piezas de programa que van a ser ejecutadas por el mismo. El framework tiene la dirección de la ejecución. Esto es una diferencia importante con respecto a las librerías, en las cuales es el programador quien controla la ejecución.

    - Hay muchas otras estrategias de reusos de código, tales como los componentes o módulos, los cuales no estudiaremos por el momento.

### Frameworks vs Librerías

    - Ilustremos las diferencias entre framework y librerías a través del uso de un ejemplo.  

    - Supongamos que estamos construyendo una casa, donde tenemos la potestad de decidir dónde ubicar las habitaciones y demás piezas de la misma. El baño estará en esta parte, mientras que la cocina estará localizada en esta otra. Adicionamos un sistema de aire acondicionado en el techo. Y así vamos decidiendo dónde construir cada parte de nuestra vivienda.

    - Esta forma de levantar una casa es similar al proceso de emplear librerías en nuestro código. Fijémonos, por ejemplo, que nuestra vivienda puede ir ampliándose de una forma desordenada y las habitaciones podrían no siempre estar en la mejor localización. Puede que esta estrategia funcione para una casa pequeña, pero a medida que la misma crece el diseño se puede complicar cuando se vayan incorporando más cuartos.

    - Otra forma de construir una casa es a través de viviendas prediseñadas, donde ya alguien elaboró el diseño de la misma. Por ejemplo, ya se conoce dónde estará el sistema de tuberías, es decir, las tuberías eléctricas se desplegarán por un lado y las de agua por otro. Los baños deben estar cercanos a las tuberías, etc.

    - Esta forma de fabricar una vivienda es similar a los frameworks. Notemos que a diferencia de la estrategia anterior, nuestra casa puede crecer de un forma ordenada.

    - Por lo tanto, a través del uso de librerías o de un framework lograremos construir nuestros programas. La diferencia es que si usamos las primeras, nuestro código puede crecer de una manera desorganizada, siendo un poco complicado manejarlo cuando el mismo tiene muchas líneas. Por otra parte, si empleamos un framework, nuestro código puede ir creciendo ordenadamente porque él mismo nos proporciona una plantilla que indica dónde debe estar cada componente del programa.

    - La idea de los frameworks viene de la comunidad de desarrolladores que han tratado de mejorar la forma de construir programas mientras se reusan ciertas partes. El framework permite que el programador se desligue de las actividades de diseño.

    - Así que, conocer un frameworks es entender su funcionamiento y saber los puntos de extensión que sean convenientes para nuestro desarrollo.

### Frameworks Web

    - Los frameworks son muy utilizados en la Web, pero sobre todo en el Back End porque hay muchas decisiones que tomar, proporcionando lo siguiente:

        - Una estructura predeterminada de carpetas.
        - Un conjunto de librerías preinstaladas, tales como una librería para manejar back End, una librería para manejar la sesión, una librería para enviar correo, una librería para manejar peticiones Post, entre otras.

    - Estas dos estructuras ofrecen un armazón de aplicación precreada. Y a esto se le agrega una serie de buenas prácticas definidas por el desarrollador del framework. Un ejemplo de buenas prácticas es el manejo de seguridad a través de la definición de políticas que se manejan en cierto archivo. Otro ejemplo, es el manejo de pruebas automatizadas, que indican la forma en que las mismas deben ejecutarse.

    - Por lo común, el framework provee un estándar de programación, a través del establecimiento de la estructura y funcionamiento general de la aplicación, mientras permite cierta flexibilidad para que el programador realice algunas modificaciones a la misma.

    - Adicionalmente, hay mucha documentación asociada al framework que incluye, cómo utilizar la aplicación que use ese framework y cómo se puede extender la aplicación.

### Framework Web - MVC

    - En la Web tenemos el Framework Web y nosotros nos enfocamos en la parte del servidor, es decir en el Back End. En el Back End se suelen utilizar frameworks  que emplean un patrón de diseño llamado MVC. Por lo tanto, nos concentramos en los frameworks MVC, que significa Modelo, Vista, Controlador. Este es un patrón de diseño de una arquitectura de software. En otras palabras, es una forma de programar, donde tenemos una estructura con tres partes fundamentales: los modelos, las vistas y los controladores. La aplicación tendrá esas tres partes. 

    - El modelo es la parte relacionada a la persistencia, es decir, todos los objetos que se guardan, tales como aquellos que tienen que ver con la lógica de cómo almacenar y recuperar la base de datos, y la lógica de negocios. Por ejemplo, supongamos que estamos desarrollando una aplicación para un banco, entonces la información de las cuentas es parte del modelo, pero también lo es cómo operamos las cuentas, que incluye la realización de las transferencias, manejo de las transacciones, envío de dinero, recepción de dinero; en general, todo aquello que es la lógica como tal, que realmente refleja lo que queramos que haga nuestro sistema. El modelo es el centro del sistema.

    - No podemos usar el modelo por sí solo, porque es algo computacional; necesitamos las Vistas que representan todo el código relacionado con la interfaz del usuario. Las interfaces van a reflejar lo que hay en nuestro modelo, siendo la manera de interactuar con el usuario o con otros sistemas.

    - Por último, está el Controlador que es un intermediario entre las Vistas y el Modelo. Básicamente el controlador es el que recibe la información de cambios de las Vistas, para indicarle a los modelos los cambios a realizar y luego reflejar los cambios en la Vista.

    - En general, las tres partes tienen que ser independientes pero se conectan. A continuación un ejemplo que ilustra los elementos relacionados a MVC:

    - Supongamos que tenemos un restaurante de comida rápida. El Modelo es lo que queremos del restaurante, es decir, lo que importa de ese sistema es quién prepara la comida. Siendo los cocineros quienes representan el Modelo, la lógica del negocio o el objetivo del sistema. La Vista es quién nos atiende, tal como la persona que opera la caja, toma la orden e interactúa con el usuario. El Controlador, es una persona que está entre el cocinero y el cajero. Es el empleado al que le llega la orden del cajero, completa la misma y la coloca en el estante para que la persona que atiende se la dé al cliente. Siendo él, el que refleja los cambios.

    - El flujo general de MVC se puede ilustrar a través del siguiente ejemplo. Cuando un usuario presiona un botón en la interfaz, se activa un Controlador, quien cambia el Modelo, y decide qué Vista despachar y se la manda al usuario.

## Sails e MVC

	- A continuación comenzaremos con una breve introducción a los Frameworks Web MVC que existen en el mercado: 

    	- Ruby on Rails que está escrito en un Ruby para los programadores en este lenguaje de programación.
    	- Django qué es para entornos Python.
    	- Laravel para PHP.
    	- Spring que es para desarrollos en Java.
    	- SailsJS que se emplea para Node y que estudiaremos a continuación.

### Características de Sails

	- Las características de Sails son las siguientes:

    	- Está escrito en el lenguaje de programación Node.js o más específicamente en JavaScript, lo que implica que todos los programas construidos usados en Node corren bajo este framework.
    	- Desde el punto de vista arquitectónico, sigue el patrón MVC, es decir que cuando estemos programando en ese framework veremos cada uno de los elementos de ese patrón explícitamente en el código, por lo tanto tendremos piezas de código que pertenezcan a un modelo, a una vista, o a un controlador.
    	- Existe una herramienta de línea de comando denominada cli (command line interface). Los comandos cli permiten crear la aplicación, correr las pruebas de la aplicación, depurar la aplicación, entre otros. A través de los comandos cli podemos crear y agregar código para ir creciendo de forma ordenada como lo indica el framework.
    	- Sails incluye la posibilidad de definir pruebas automatizadas y tiene un espacio para internacionalización, que significa que posee algunos paquetes para permitir que la aplicación esté en varios idiomas.
    	- Sails también tiene un espacio para poner las políticas de seguridad.
    	- El framework adicionalmente se integra con cualquier tecnología Frontend  o Frameworks Frontend, tales como Angular.

### ORM

	- Sails además cuenta con un ORM que es un componente que mapea los datos relacionales en orientado a objetos de Node, en este caso. El ORM se llama Waterline y es una capa de abstracción donde nos olvidamos de las bases de datos para trabajar con objetos. El ORM se encarga de traducir los objetos a los elementos de la base de datos.

	- Waterline funciona para base de datos relacionales como MySQL pero también para Mongodb, Redis, Oracle y PostgreSQL, los cuales se incluyen entre los más de treinta manejadores de bases de datos que puede utilizar. 

	- Esta capa nos permite observar las asociaciones orientadas a objetos a medida que navegamos entre los mismos, que se traducen en consultas a nuestra base de datos. La ventaja de esto es que el programador se abstrae de cómo está la base de datos implementada. Incluso la base de datos que se está utilizando puede cambiar en el tiempo, por ejemplo de MySQL a Postgres y el código sigue siendo el mismo; sólamente podría cambiar la configuración y algunos otros detalles muy específicos para el manejador.

#### Apis Autogeneradas

	- Otra de las características de Sails son las APIs autogeneradas. Con la ayuda de la línea de comando y a través de la definición correcta de los modelos, el framework crea un API REST con respuestas JSON estándares basadas en nuestros modelos, de forma automática. Por ejemplo, si tenemos la entidad persona y el modelo personas, se genera una petición GET persona que nos devuelve todas las personas o personas/id que nos retorna todas las personas con ese id, o una petición Post personas que crea una persona, o la petición Delete persona, que borra una persona. El comportamiento para todas estas peticiones HTTP  ya están elaboradas.

## Primer App

	- sails new
		- --no-front-end (solo para APIs, no Aplicaciones Web).
		- --fast (no instala los modulos, para crearla mas rapido).

Se pueden asociar rutas a vistas (archivos estáticos).

Creamos una ruta que vaya a un controlador, que se comunica con un modelo para luego despachar una vista (sails trabaja con un concepto llamado 'action').
sails generate page contacto

sails generate model Vendedor nombre:string desde:number
					 [nombre modelo] [atributo:tipo]

sails lift => iniciar app