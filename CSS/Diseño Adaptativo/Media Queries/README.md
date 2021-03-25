## Media Queries

- Definición

    - Los media queries son una extensión muy útil del CSS que permiten detectar las características de los dispositivos que accedan a nuestra web, y a partir de esos datos crear hojas de estilo más personalizadas, que llevan finalmente a aumentar y mejorar la experiencia del cliente en nuestro sitio.

    - Los media queries, permiten que el browser decida cómo mostrar contenido dependiendo de las condiciones que encuentre en el dispositivo y esas condiciones se dan a través de unos media types los cuales podemos agrupar en:

        - print - Vista de Impresión.
        - min-width - Tamaño mínimo en horizontal.
        - max-width - Tamaño máximo en horizontal.
        - min-height - Tamaño mínimo en vertical.
        - max-height - Tamaño máximo en vertical.
        - orientation - Posición en la que se encuentre el dispositivo.
        - resolution - Tamaño ocupado por el browser en píxeles.
        - color - Detecta si la pantalla en que se visualiza el sitio es a color o en blanco y negro.
        - light-level - Densidad de la luz del dispositivo.
    
    - Dependiendo de los media types deben crearse estilos individuales que se ajusten a las condiciones detectadas. El dispositivo renderizará los estilos creados específicamente para cada condición.

        - Ventajas:
            - Permite ajustar el sitio web a cualquier dispositivo.
            - Aparecen para mejorar la visualización del diseño adaptable.

        - Desventajas:
            - Se requiere escribir repetidamente algunas de las reglas css que deseen aplicarse por cada dispositivo agregado.
    
    - Medidas estandar (ancho máximo):
        - Celulares: < 420px.
        - Tablets: >= 420px y < 720px.
        - Computadoras: >= 720px.

    Ejemplo:

    `

        // Impresión
        @media print {
            img {
                width: 100%;
            }
            h1 {
                text-align: center;
            }
        }

        @media screen {
            h1 {
                text-align: right;
            }
        }
    
        @media (max-width: ___px) {
            p {
                color: red;
            }
        }

        @media (min-width: ___px) and (max-width: ___px) {
            p {
                color: blue;
            }
        }

    `