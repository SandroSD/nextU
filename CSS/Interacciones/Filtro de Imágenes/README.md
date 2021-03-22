## Filtro de Imágenes

- Filtros disponibles:

    - blur(): Efecto de desenfoque. Valores en pixeles.
    - grayscale(): Efecto de escala de grises. Valores porcentuales (0% a 100%).
    - drop-shadow(): Efecto de sombras. Cuatro valores (los primeros 3 en px y el último es un color).
    - sepia(): Efecto sepia. Valores porcentuales (0% a 100%).
    - brightness(): Efecto de brillo. Valores porcentuales (0% a 100%).
    - contrast(): Efecto de contraste. Valores porcentuales (0% a 100%).
    - hue-rotate(): Este efecto incrementa el valor de los colores cambiandolos totalmente. Valores porcentuales (0% a 100%).
    - invert(): Efecto de invertir la imágen. Valores porcentuales (0% a 100%).
    - saturate(): Efecto de saturación. Valores porcentuales (0% a 100%).
    - opacity(): Efecto de opacidad. Valores porcentuales (0% a 100%).

    - Ejemplo:

    `
        .image {
            -webkit-filter: blur(30px);
            filter: blur(30px);
        }
    `