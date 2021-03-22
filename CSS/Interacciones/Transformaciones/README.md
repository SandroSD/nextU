## Transformaciones

- Permiten modificar la forma, el tamaño y la posición del elemento.

- Atributo: transform

    - ROTATE: rota el elemento.
        - 2D:
            - rotate(n deg): numero de grados de la rotación. Se pueden usar valores positivos o negativos.
        - 3D:
            - rotateX(x deg).
            - rotateY(y deg).
            - rotateZ(z deg);

    - SCALE: permite modificar el tamaño de un elemento HTML.

        - scale(x, y). Si no queremos modificar uno de las dimensiones, le ponemos 1. Si queremos achicarlo, ponemos decimales.
            - x: modifica el ancho.
            - y: modifica la altura.

    - PERSPECTIVE: se recomienda usar antes de las transformaciones en 3D. Define la perspectiva de un elemento HTML ubicandolo en un espacio tridimencional.

        - perspective(n px). Distancia del elemento en el espacio tridimencional. Se puede hacer de dos formas. Con un elemento padre que actua para todos los hijos o de forma independiente para cada elemento.

        Para modificar el origen de la perspectiva utilizamos:

        - perspective-origin (eje x, eje y).
            - x: left, center, right (o también el valor en px, mm o %).
            - y: top, center, bottom.

    - TRANSLATE: alterar la ubicación de un elemento de la posición original.

        - translate(x, y). Pueden ser en cualquier medida de css.
            - x: desplazamiento horizontal. +x: derecha. -x: izquierda
            - y: desplazamiento vertical. +y: arriba. -y: abajo

        - translateX: solo en eje x. Si queremos retornar a la posición original ponemos none.
        - translateY: solo en eje y. Si queremos retornar a la posición original ponemos none.
        - translateZ: solo en eje z. Si queremos retornar a la posición original ponemos none. (Recordar que hay que usar perspective para las transformaciones en 3D).
        - translate3d x, y, z.

    - SKEW: modifica la forma de un elemento HTML al cesgarlo a lo largo del eje indicado.

        - skew(x, y). Si necesitamos solo modificar un eje podemos dejar 0 donde no modifiquemos la inclinación. Se pueden usar valores negativos.
            - x: grado de inclinación eje horizontal.
            - y: grado de inclinación eje vertical.
        
        - skewX: solo eje x.
        - skewY: solo eje y.
        - skewZ: solo eje z.
