# Unidad 5 - Programación Orientada a Objetos

## Introducción a la POO

- Principios de la POO:

  - Abstraccion: escojer la implementación de un objeto.
  - Encapsulamiento: ocultar la representación y propiedades de un objeto, de manera que solo puedan ser consultados y modificados mediante operaciones definidas para la clase.
  - Herencia: Clase hija hereda de su clase padre.
  - Polimorfismo: Distintos objetos reaccionan de manera distinta al mismo mensaje u operación.

- Clase: conjunto de objetos que comparten una estructura, comportamiento y semantica común.
- Objeto: instancia de una clase.

Una clase es una representación abstracta de un concepto.

## Definición de clases y Notación UML

- UML (concepto principal):

  - Diseño de software
  - Comunicación de procesos de software o negocio
  - Captura de detalles sobre un sistema para sus requerimientos o análisis
  - Documentación de un sistema existente, proceso u organización

- UML, catálogo:

  - Estructurales:

    - Diagrama de Clases: detalle sobre las entidades y como se comportan.
    - Diagrama de Objetos
    - Diagrama de Compuestos
    - Diagrama de Componentes
    - Diagrama de Despliegue

  - Comportamiento:
    - Diagrama de Actividades
    - Diagrama de Caso de Usos
    - Diagrama de Estado
    - Diagrama de Secuencia

- Diagrama de Clases:

  - Nombre
  - Atributos:
    - +: pública
    - -: privada
    - #: protegido
  - Operaciones

- Relaciones:

  - Asociación
  - Herencia

- Clase abstracta: no se puede instanciar.

Ejemplo de una clase:

```

class <nombre_clase>():

def __init__(self, attr1, attr2):
    // constructor

    // Inicializamos atributos de la clase
    self.attr1 = attr1
    self.attr2 = attr2

```

## Clases y Herencia en Python
