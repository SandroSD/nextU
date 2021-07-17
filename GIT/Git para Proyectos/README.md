# Git para Proyectos

Hemos estudiado Git como un sistema de control de versiones. Git fue impulsado por Linus Torvalds y el equipo de desarrollo del Kernel de Linux. Nace de la necesidad de contar con un sistema de código abierto, distribuido, que aportase lo mejor de los sistemas manejadores de versiones del momento, sin perder la sencillez y a partir de entonces no ha parado de crecer y de ser usado por más desarrolladores en el mundo. A los programadores de mucha ayuda para ser más eficientes en sus funciones de trabajo, ya que ha generalizado las herramientas de control de versiones del software.

Git es multiplataforma, por lo que es posible usarlo y crear repositorios locales en todos los sistemas operativos más comunes, Windows, Linux o Mac. Existe una gran variedad opciones para utilizar GIT, no obstante para el aprendizaje se recomienda usarlo con línea de comandos, de modo que puedas adquirir los conocimientos básicos, comprender su funcionamiento y dominar el sistema desde su base, en lugar de estar aprendiendo a usar un programa específico.

## Ventajas

    - Compartición selectiva: El desarrollo de la aplicación es nuestro, pudiendo decidir qué parte de nuestro proyecto compartimos y con quién, restringiendo a que sólo pueda verlo, que tenga la posibilidad de añadir notas, comentarios o que pueda añadir cambios.
    - Velocidad: Muchas empresas deciden implementar Git como servicio local en su infraestructura física, por lo tanto el control de versiones se realizaría dentro de la propia red con la consiguiente ganancia en velocidad de acceso y escritura.
    - Ramificación: ofrece un amplio abanico de posibilidades a la hora de realizar cambios en la estructura principal, pudiendo crear diferentes ramas sobre las que aplicar nuestras modificaciones en entornos aislados de la línea principal de desarrollo.
    - Convergencia: Si en la creación de una rama del proyecto encontramos que uno de los cambios incluidos se integra tal y como deseamos, sin presentar conflictos con las diferentes partes de nuestra aplicación, podremos incluir o hacer converger dicha ramificación con el desarrollo principal de forma sencilla y segura, contando así con una nueva versión o revisión de nuestro proyecto.
    - Flujo de trabajo adaptable: Encontraremos diferentes formas para gestionar el flujo de desarrollo de la aplicación, destacando entre éstos los modelos centralizados y los modelos de libre configuración, admite multitud de configuraciones para organizar el trabajo tal como sea requerido.
    Seguridad: Git hace uso de sistemas de árbol SHA1, lo que asegura que hasta que no se realice la comprobación del cifrado o firma, los cambios no se escribirán en el servidor.

## Desventaja

- La desventaja más relevante es la curva de aprendizaje, sin embargo aquí hemos preparado para ti un material instruccional para que estés a la vanguardia en sistema manejador de versiones GIT orientándonos a la formación de cara al mercado laboral actual.

### Estructura de directorios

La estructura de un directorio Git mantiene toda la información que se necesita en un sólo lugar, tiene una estructura similar a la siguiente:

.

|-- COMMIT_EDITMSG: Contiene la descripción del último commit, existe para fines informativos.

|-- FETCH_HEAD: Los SHAs de todas las ramas que fueron actualizadas por el último git fetch.

|-- HEAD: En la mayoría de los casos éste es probablemente refs/heads/master.

|-- ORIG_HEAD: Durante una integración, este es el SHA de la rama en la que se está realizando la operación.

|-- branches: Almacena los archivos en in branches/ y da un nombre al comando en lugar del argumento del repositorio.

|-- config: Es el archivo principal de configuración. Mantiene las opciones de especificación, tales como remotos, configuraciones push, tracking branches y más.

|-- description: Muestra cuando hayas visto tu repositorio en la lista de todos los repositorios versionados, si utilizas gitweb o ejecutas git instaweb.

|-- hooks: Directorio que contiene los scripts shell que se invocan después de los correspondientes comandos Git.

|-- applypatch-msg
|-- commit-msg
|-- post-commit
|-- post-receive
|-- post-update
|-- pre-applypatch
|-- pre-commit
|-- pre-rebase
|-- prepare-commit-msg
`-- update

|-- index: Información acerca de los archivos que serán incluidos en el próximo commit.
|-- info: Contiene el archivo exclude , este archivo puede ignorar archivos del proyecto.
| `-- exclude
|-- logs: Mantiene registros de los cambios hechos.

|-- HEAD
`-- refs

|-- objects: El depósito interno de objetos, indexados por SHAs.
`-- refs: El depósito interno de objetos, indexados por SHAs.

|-- heads
|-- remotes
|-- stash
`-- tags

## Explorando el directorio .git

Con este laboratorio podrás explorar el funcionamiento de Git y directorio .git internamente.

Parte 1: Observando el archivo .git/index y el directorio .git/objects con cambios al repositorio

    Crea un directorio llamado probando_git
    Luego con el terminal crea un repositorio con el comando git init .
    Observa que ahora tienes un subdirectorio llamado .git por lo cual estás en un repositorio
    Explora ese directorio observa el contenido del archivo .git/index y el contenido de la carpeta .git/objects
    Ahora crea un archivo de texto  (primer_archivo.txt) con contenido 'Hola GIT' en tu directorio y observa de nuevo  el archivo .git/index y el contenido de la carpeta .git/objects
    Agrega tu archivo al repositorio con el comando git add .  y observa de nuevo  el archivo .git/index y el contenido de la carpeta .git/objects. Observa los cambios que se han efectuado
    Ahora realiza un commit con el comando git commit -m 'Primer commit' y observa de nuevo  el archivo .git/index y el contenido de la carpeta .git/objects (Observa los cambios que se han efectuado)

Parte 2: Observando las ramas viendo el directorio /git/refs/heads y el contenido del archivo .git/HEAD

     Observa el contenido del archivo .git/HEAD
    Crea una rama con el comando git branch nueva-rama
     Observa el contenido del archivo .git/HEAD y el directorio /git/refs/heads
    Cambiate a la rama nueva-rama con el comando git checkout nueva-rama
    Observa el contenido del archivo .git/HEAD

Es importante comprender como Git maneja sus operaciones a través de su directorio .git

## Nombres comúnmente usados para las ramas

Existen estándares o convenciones que utilizan los desarrolladores para nombrar sus ramas.

- Reglas generales

  - Los nombres son en minúsculas
  - No usar tildes ni ñ ni caracteres de alfabetos especiales
  - Si la rama contiene mas de una palabra separar con guiones. Ejemplo: esta-es-mi-rama

Nombre especiales

    - master: se usa para la rama principal y es la que contiene lo que está en producción.
    - development: se usa como rama de integración donde se van agregando todas las funcionalidades que van al proximo release
    - feature/<feature-name>: rama con una nueva funcionalidad donde <feature-name> describe la funcionalidad. Por ejemplo: feature/agregando-el-registro
    - hotfix/<hotfix-name>: rama con una nuevo hotfix donde <hotfix-name> describe el arreglo. Por ejemplo: hotfix/manejando-excepcion-en-registro
    - release/<release-version>:  rama opcional que contiene una copia de un release determinado. Estas son tambien usadas con tags de Git

## Como leer un diff

Con Git es posible comparar los cambios que tienen los archivos en distintos commits; git diff asume que el código son archivos de texto que pueden ser comparados.

Por ejemplo cuando se ejecuta el comando:

git diff

De forma predeterminada se muestran las diferencias de cada archivo que ha cambiado desde el último commit.

Cada archivo se muestra como una sección separada y dentro de cada archivo se muestran las distintas partes que puedan contener un cambio. A continuación se muestra como leer las diferencias del archivo.

‐‐‐ a/todo.md -> indica que --- es el a (último commit)
+++ b/todo.md -> indica que +++ es el b (cambios actuales)
@@ -1,5 +1,4 @@ ->indica que los cambios de esa parte como referencia (se muestra la línea de 1 al 5 para (a) y las líneas 1 a la 4 para (b) )

# TODO -> línea de referencia

buy anniversary present -> línea de referencia
build arduino-based vaucanson’s duck -> línea de referencia
-blog on git diffs -> esta línea se eliminó porque tiene un –
fork webkit -> línea de referencia
‐‐ -> fin de comparación

Cuando se agregan líneas se coloca +

Si los archivos son binarios solo dice que se hizo un cambio sin mostrar el detalle.

## Mover entre commit relativamente

En Git se pueden referenciar los commits de forma relativa al actual, esto es útil porque cada commit tiene un hash que lo identifica, pero este puede ser engorroso de leer, por ejemplo:

commitf45151d0426cf171644c1d66704fa5f5cc339eca

Usualmente los desarrolladores requieren comparar o ver los commits anteriores al actual. Para esto se usa la referencia HEAD~n donde es posible ir a un commit anterior n pasos atrás.

Otra forma de referenciar los commits útiles para ver los logs es usando los días.

Por ejemplo development@{“last week”} referencia según reflog la rama development de la semana pasada.

Podrías usar: git show development@{“last week”}

Así como “last week” puedes usar otros formatos en el tiempo como:

• now
• yesterday
• 6 months ago
• two Saturday past
• Sat Sept 8 12:00:00 2012 -0400
• 1966-12-06 04:33:00

También existe la posibilidad de referenciar con pasos al igual que ~n con la sintaxis…@{-n}, lo que haría referencia a n pasos atrás para esa rama.

## FORK

Copia de un repositorio, que pertecene a una persona diferente. Algún cambio que haga la persona que hizo el fork no se verá reflejado en el original, pero aun asi puede hacer un pull request.

Buenas Prácticas:

## Incluir README (recomendado en inglés).

## Code of conduct

## Branches

## Versionar

## Incluir un .gitignore

# Guía de comandos

Crear un repositorio nuevo

git init

Realizar checkout a un repositorio

Crea una copia local del repositorio ejecutando:

git clone /path/to/repository

Si utilizas un servidor remoto, ejecuta:

git clone username@host:/path/to/repository

Flujo de Trabajo

Tu repositorio local esta compuesto por tres "ramas" administrados por Git.

1. Directorio de trabajo: que contiene los archivos.

2. Index: actúa como una zona intermedia.

3. Head: que apunta al último commit realizado.
   Add

Registrar cambios que son añadidos al Index.

git add <filename>
git add .

Commit

git commit -m "Commit message"

El archivo se encuentra incluido en el HEAD, pero no está en tu repositorio remoto.
Envío de cambios

git push origin master

Envia los cambios de tu copia local a tu repositorio remoto.

Si no tienes clonado el repositorio ya existente y quieres conectar tu repositorio local a un repositorio remoto, ejecuta:

git remote add origin <server>

Ramas

Las ramas son utilizadas para desarrollar funcionalidades aisladas unas de otras. La rama master es la rama "por defecto" cuando creas un repositorio. Crea nuevas ramas durante el desarrollo y fusiónalas a la rama principal cuando termines.

Para crear una rama utiliza:

git checkout -b nombre_rama

Para retornar a la rama master ejecuta:

git checkout master

Para borrar la rama que haz creado utiliza:

git branch -d nombre_rama

Para compartir la rama en un repositorio remoto, ejecuta:

git push origin <branch>

Actualiza

Para actualizar tu repositorio local al commit más nuevo, utiliza:

git pull

Fusión

Para fusionar otra rama a tu rama activa, ejecuta:

git merge <branch>

En caso de que existan conflictos, luego de resolverlos puedes marcarlos como fusionados utilizando:

git add <filename>

Etiquetas

Crea etiquetas para cada nueva versión pública del software, por ejemplo para 1.0.0 ejecuta:

git tag 1.0.0 1b2e1d63ff

1b2e1d63ff, se refiere a los 10 caracteres del commit id de tu etiqueta. Puedes consultar el commit id, ejecutando:

git log

Reemplaza cambios locales

git checkout -- <filename>

Este comando reemplaza los cambios en tu directorio de trabajo con el último contenido de HEAD.

Recuperar la última versión del servidor y agregarla a tu copia local, utiliza:

git fetch origin
git reset --hard origin/master
