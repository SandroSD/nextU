## Animaciones

- Las transiciones son formas de animar los cambios de propiedades que se le realizan a los elementos del DOM.

- Atributo transition(propiedad, tiempo[segs])
    
    - Ejemplo 1:

    #contenedor {
        width: 1000px;
        height: 600px;
        border: 2px solid;
        margin: 0 auto;
        background-color: blue;
        transition: background 1s;
    }

    #contenedor: hover {
        background-color: yellow;
    }

    - Ejemplo 2:

    `
        #contenedor img {
            width: 200px;
            height: 200px;
            transition-property: width, height;
            transition-duration: 2s, 4s;
        }

        #contenedor img: hover {
            width: 100%;
            height: 100%;
        }
    `

- @keyframe: animación personalizada a la que le podemos dar un nombre y especificar detalladamente que queremos que suceda durante toda la animación.

    - Se suele usar % para saber en que momento va de la animación (va de 0% a 100%).

    - Ejemplo:

        - Keyframes por porcentaje:

        `
            10% {
                color: white;
            }

            20% {
                color: red;
            }

            ...

            100% {
                color: white;
            }
        `

        - Keyframes exactos:

        `
            from: {
                color: white;
            }

            to: {
                color: red;
            }
        `

        `
            #contenedor {
                width: 1000px;
                height: 600px;
                border: 2px solid;
                margin: 0 auto;
                background-color: #DBFFF1;
                text-align: center;
                transition: background 1s;
                animation: miAnimacion 3s [infinite: para que se ejecute siempre];
            }

            @-webkit-keyframes miAnimacion {
                from { 
                    transform: rotate(45deg);
                }

                to {
                    height: 0;
                }
            }

            .circulo {
                width: 100px;
                height: 100px;
                background-color: blue;
                border-radius: 50px;
                margin: 2vh;
                float: left;
                animation: circles 4s;
            }

            @-webkit-keyframes circles {
                0% {
                    opacity: 0;
                }

                25% {
                    opacity: 0.25;
                    float: right;
                }

                50% {
                    opacity: 0.5;
                    float: left;
                }

                75% {
                    opacity: 0.75;
                    float: right;
                }

                100% {
                    opacity: 1;
                    float: left;
                }
            }
        `