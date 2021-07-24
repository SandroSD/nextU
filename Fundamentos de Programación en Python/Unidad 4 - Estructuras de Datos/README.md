# Unidad 4 - Estructuras de Datos

## Tipos de datos estructurados

### Arrays

Ejemplo: String array palabras [100]

String array dias_semana[7]
dias_semana = {"Lunes", "Martes", "Miércoles", "Jueves", "Viernes"}
dias_semana[0] = "Lunes"

Ejemplo: String array matriz [n,n]

### Registros

record variable
TipoCampo1 IdCampo1
...
TipoCampon IdCampon
end record

variable.TipoCampo1 = algo

### Archivos

file variable

- open (read/write)
  - rt: read text
  - wt: write text
  - rb: read binary
  - wb: write binary
- close

variable.readLine(): leo linea
variable.EOF(): pregunto si es fin de archivo

Para archivos de texto: writeLine(string)

Para archivos binarios: read(elem) y write(elem)

## Listas

Pueden contener otras sublistas y cada item puede ser de distinto tipo a diferencia de los arrays.

lista = ['a', 'b', '3', true];

for elem in lista:

endfor

## Tuplas y Conjuntos

### Tuplas

Secuencias de tamaño fijo

Tipo Tuple

tuple mis_lenguajes = ('Python', 'C', 'C++', 'Java')
cmp t1 y t2: compara las tuplas t1 y t2.

tuple de l que convierte la lisa l en una tupla

max de t que retorna el máximo elemento de la tupla t
min de t que retorna el mínimo elemento de la tupla t

son inmutables, no se pueden agregar ni eliminar elementos.

### Conjuntos

Colleciones no ordenadas de elementos no repetidos

Tipo Set

operaciones posibles: union, intersección y diferencia

conjunto = set()
conj_a = {1}
conj_2 = {1, 2, 3}
conj_3 = set(['a', 'b', 42])

s.add(e): agrega el elemento al conjunto si es que no existe.
s.clear(): elimina todos los elementos.
s.copy(): retorna una copia del conjunto.

## Diccionarios

Es un conjunto de claves - valor (key,value)

Tipo dict

No son inmutables, se pueden agregar registros, se pueden cambiar los valores de las claves pero no se pueden cambiar las claves.

diccionario = {}

diccionario['clave1'] = valor1
diccionario['clave2'] = valor2
diccionario['clave3'] = valor3

diccionario = {'clave1': 'valor1', 'clave2': 'valor2', 'clave3': 'valor3'}

print(diccionario(clave1))

for nombre in diccionario:
print nombre, ':', diccionario[nombre]

crear diccionario:
diccionario = dict()

tamaño del diccionario (cantidad de elementos):
len(diccionario)
