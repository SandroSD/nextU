## Graph QL

GraphlQL es una tecnología que permite definir un lenguaje de consulta utilizado para acceder a APIs. Se considera como una alternativa a REST y aunque su definición es de código abierto su desarrollo ha sido liderado por Facebook.

En GraphQL se definen esquemas que representan objetos a consultar. Estos esquemas permiten definir qué datos específicamente necesitamos. 

GraphQL a diferencia de REST, solo tenemos un solo URL, que suele ser /graphql y el query es quien determina lo que se necesita. Para ilustrar esto, veamos un ejemplo. Supongamos que tenemos la siguiente entidad:

    - Empleado
        - id
        - nombres
        - apellidos
        - edad
        - direccion
        - idiomas (puede ser más de uno y por cada idioma se dirá el nivel de dominio)

Si queremos consultar esa entidad con una API REST podríamos realizar la siguiente consulta:

    - /api/empleados/1

la cual devuelve un JSON como este:

	`

	{
		"id": 1,
		"nombres": "Pedro",
		"apellidos": "Torres",
		"edad": 25,
		"direccion": "Av 3 con calle 5"
	}

	`

Y si queremos saber los idiomas, llamamos al siguiente URL:

	- /api/empleados/1/idiomas

que devolverá el siguiente JSON:

	`

	[
		{
			nombre: "inglés"
			nivel: "medio"
		},
		{
			nombre: "español"
			nivel: "avanzado"
		}
	]

	`

Para realizar la consulta anterior usando GraphQL, definimos los esquemas: Empleado e Idioma, indicando cada uno de los campos que tienen las entidades. Para este caso particular también señalamos que un empleado tiene una lista de idiomas.

En GraphQL, las consultas (queries) se estructuran siguiendo el formato JSON. Los resultados de dichas consultas también se retornan siguiendo el mismo formato, solo que el JSON contendrá los valores resultantes. A continuación un ejemplo de queries y sus respuestas:

[GraphQL1]

De esta manera podemos solamente solicitar los datos que necesitamos, ahorrando ancho de banda que podría consumirse durante la transmisión de dichos datos.

Otra diferencia entre API REST y GraphQL es que el primero trabaja con el concepto de versiones que se generan cada vez que se agregan nuevos campos; sin embargo, en GraphQL los campos recién creados simplemente se adicionan al esquema y ya se tiene ese dato disponible.