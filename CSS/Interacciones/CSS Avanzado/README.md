## CSS Avanzado

- Funciones:
    - Son unas de las características que han sido incorporadas en CSS, que ademas ya estan soportadas por los navegadores. Las funciones sirven para obtener valores que son usados por las propiedades.

        - rgb(): define un color RGB.

        `

        #p1 {
                background-color:rgb(255,59,59);
        }

        `

        - rgba(): define un color en RGB con transparencia.
        - hsl(): define un color en HSL (Hue-saturation-lightness).
        - hsla(): define un color en HSL con transparencia.
        - radial-gradient(): establece un gradiente radial en el fondo de la imagen, como se muestra en el siguiente ejemplo.

        `

        #gradiente1 {
            height: 150px;
            width: 200px;
            background-image: radial-gradient(pink, gray, blue);
        }

        `

        - linear-gradient(): establece un gradiente lineal en el fondo de la imagen.
        - calc(): permite realizar operaciones matemáticas cuyos resulatdos se usan en la propiedades de CSS.

        `

            #c1 {
                position: absolute;
                left: 100px;
                width: calc(100% - 200px);
                border: 1px solid black;
                background-color: gray;
            }

        `

        - attr(): devuelve el valor de un atributo de elemento seleccionado, como se muestra a continuación:

        `

            a:after {
                content: "(" attr(href) ")";
            }

        `

        - var(): permite el uso de variables con valores especificos que puden ser usadas varias veces en el documento HTML. La variable se define anteponiendo dos guiones al nombre y se accde usando la funcion var(). Es ampliamante usada en la definicion de aspectos tales como colores, margenes, tipos de letras que empleamos en varios lugraes de nuestro sitio Web. A continuacion tenemos un ejemplo:

        `

            :root {
                --color-principal-de-fondo: #FF3B3B;
                --color-del-texto: yellow;
            }

            #div1 {
                background-color: var( --color-principal-de-fondo);
                padding: 5px;
                color: var(--color-del-texto);
            }

        `

- Grilla:

    - ¿Que es una grilla?

        - Para facilitar el diseño de las páginas, CSS usa el concepto de rejillas para acomodar los diferentes elementos en un documento.

    - Definiendo una grilla en CSS.

        - Supongamos que queremos definir una grilla con la dimensiones que se muestra en la Figura 1. La rejilla tiene una columna que mide 50px, otra que mide el 20% del espacio restante y una que se acomoda automáticamente (auto) en el espacio que sobra. [Figura_1]
    
    `

        .rejilla {
            display: grid;
            grid-template-columns: 50px auto 20%;
            grid-template-rows: 70% 30%;
        }

    `

    - Determinando elementos en la rejilla

        - A continuación iremos examinando cómo se especifican elementos usando la rejilla que definimos previamente. La Figura 2 muestra cómo deseamos que se vea el elemento A en la rejilla. [Figura_2]
    
    `

        .rejilla {
            display: grid;
            grid-template-columns: 50px auto 20%;
            grid-template-rows: 70% 30%;
        }

        .elemento-a {
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }

    `

    - En la Figura 3 hemos incorporado otro elemento (elemento B) con la ayuda de la rejilla. [Figura_3]

    `

        .rejilla {
            display: grid;
            grid-template-columns: 50px auto 20%;
            grid-template-rows: 70% 30%;
        }

        .elemento-a {
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .elemento-b {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 2;
            grid-column-end: 4;
        }

    `

    - En la Figura 4, hemos sumado otro elemento (elemento C) a nuestro arreglo de ítems. [Figura_4]

    `

        .rejilla {
            display: grid;
            grid-template-columns: 50px auto 20%;
            grid-template-rows: 70% 30%;
        }

        .elemento-a {
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }

        .elemento-b {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 2;
            grid-column-end: 4;
        }

        .elemento-c {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 3;
        }

    `

    - La Figura 5 muestra cómo deseamos que se vea el elemento D en la rejilla. [Figura_5]

    `

        <style>
            .rejilla {
                display: grid;
                grid-template-columns: 50px auto 20%;
                grid-template-rows: 70% 30%;
            }

            .elemento-a {
                grid-row-start: 1;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .elemento-b {
                grid-row-start: 1;
                grid-row-end: 2;
                grid-column-start: 2;
                grid-column-end: 4;
            }

            .elemento-c {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .elemento-d {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 3;
                grid-column-end: 4;
            }
        </style>

        <div class="rejilla">
            <div class="elemento-a">A</div>
            <div class="elemento-b">B</div>
            <div class="elemento-c">C</div>
            <div class="elemento-d">D</div>
        </div>

    `

### Guías rápidas de ayudas de CSS.

    Estamos contentos de poder disfrutar esta lectura relacionada a las guías rápidas de ayuda de CSS contigo.

    En Internet podrás conseguir varios sitios que resumen las propiedades de CSS, que te pueden ayudar cuando estés realizando tus tareas de codificación. Nosotros te proporcionamos algunos de ellos.

#### Comprehensive CSS Cheat Sheet + PDF

    El sitio de Comprehensive CSS Cheat Sheet (https://www.onblastblog.com/css3-cheat-sheet/) ofrece una guía bastante completa de las propiedades de CSS agrupadas y categorizadas. 

    - Ventajas 

        Proporciona una versión descargable en formato pdf.
        Ofrece las propiedades de acuerdo a ciertas categorías.

    - Desventaja

        No hay ejemplos de los resultados de aplicar las propiedades.

#### HTML CheatSheet

    En el sitio HTML CheatSheet (https://htmlcheatsheet.com/css/) encontrarás una guía interactiva de las propiedades de CSS. 

    - Ventaja

        Puedes interactuar con la propiedades de CSS, cambiando valores y viendo los resultados que obtienes al cambiar dichos valores.

    - Desventaja

        El sitio no contiene todas las propiedades de CSS.

#### CSS Cheat Sheet por Adam Marsden

    El sitio de CSS Cheat Sheet por Adam Marsden (https://adam-marsden.co.uk/css-cheat-sheet) ofrece otra guía rápida de las propiedades de CSS, que además se enlaza al tutorial completo del lenguaje de la gente de Mozilla.

    - Ventajas

        Tiene un menú que permite acceder a los diferentes componentes de CSS fácilmente.
        Proporciona acceso a información más detallada de cada componente de CSS, incluyendo ejemplos. 

    - Desventaja

        Los ejemplos no se despliegan directamente en la guía rápida, sino en el Tutorial de CSS en el sitio de Mozilla.