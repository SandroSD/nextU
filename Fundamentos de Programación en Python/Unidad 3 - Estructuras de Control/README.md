# Unidad 3 - Estructuras de Control

## Estructuras de control condicional

### IF

#### Caso 1: Solo voy por otro camino si se cumple una condición.

if cond then
bloque
endif

#### Caso 2: Voy por 2 caminos diferentes dependiendo la condición.

if cond then
bloque1
else
bloque2
endif

#### Caso 3: Tengo que evaluar varias condiciones.

if cond1 then
bloque1
elseif cond2 then
bloque2
...
elseif condn-1 then
bloquen-1
else
bloquen
endif

### CASE

case (variable) of
valor1: bloque1
valor2: bloque2
else: bloque_else
end

## Estructuras de control iterativas.

### DO - WHILE

do
bloque
while cond

### WHILE - DO

while cond do
bloque
endwhile

### FOR

for id=inf to sup do
bloque
endfor

## Funciones

funcion <nombre>(<listaParámetrosFormales>): <tipoResultado>
<declaraciones>
inicio
<instrucciones>
retorna <expresión>
finfuncion

- <nombre> :nombre de la función por el cual será invocada
- <listaParámetrosFormales>: contiene nombre y tipo de las variables que pasan alguna información necesaria para que la función ejecute el conjunto de instrucciones.
- <tipoResultado>: indica el tipo de dato que devuelve la función
- <declaraciones>: representa el conjunto de variables definidas para la función (diferentes a los parámetros)
- <instrucciones>: representa el conjunto de instrucciones que realiza la función
- <expresión>: representa el valor que retorna la función
