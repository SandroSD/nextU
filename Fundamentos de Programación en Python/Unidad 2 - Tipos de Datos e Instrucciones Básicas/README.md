# Unidad 2 - Tipos de Datos e Instrucciones Básicas

## Tipos básicos en Python

- float
- int
- string
- bool

### Números:

#### Operaciones:

- Suma, Resta, Multiplicación, División.

### Strings

- Formados por: '', "", """ """ (template literal)

#### Operaciones:

- +: Concatenación.
- \*: Operador de repetición. Crea nuevos strings concatenando múltiplas copias del mismo string.
- []: Obtiene el carácter ubicado en el indice X. Los índices comienzan en 0.
- [inicio:fin]: Substring. Obtiene los caracteres del rango específico.

### Bool:

#### Operaciones:

- OR.
- AND.
- NOT.

## Asignaciones y Expresiones

No hace falta declararla antes de usarla.

nombre_variable = valor

variable_1 = variable_2 = variable_3 = valor (todas toman el mismo valor)

variable_1, variable_2, variable_3 = valor_1, valor_2, valor_3 (en este caso pueden ser distintos tipos)

## Definiciones de Variables y tipos

- Convertir tipos, por ejemplo de numero a string, se usa str(), para convertir un numero a entero usamos int().
- Podemos usar type() para saber que tipo de dato contiene la variable.
  Ejemplo: para concatenar 'Hola' + 10, hay que hacer: 'Hola'+str(10).
- En Python la ausencia de data o valores se especifica con None.

## Transformación de datos

int(), str(), float(), bool().
type(), isinstance().

## Operaciones de lectura y escritura

- input(mensaje): toma valores por consola. mensaje se mostrará en consola para poder escribir una respuesta. Todo lo que se lea de input() va a ser un string.
- print(algo, sep=''): imprime en consola lo que se le pase en el argumento. puede llevar el separador explicito para concatenar mas de un valor.
