- Alumno: Matias Julian Martinez
- Nombre de la Materia: Aplicaciones Hibridas
- Nombre del docente: Jonathan Emanuel Cruz
- Comision: DWT4AV


## "API RESTful de Mundo Funko" 

Una API RESTful para gestionar Funko Pops y sus categorias, con autenticación JWT.

## ¿Qué es un Funko Pop? 
Los Funko Pop! son figuras de vinilo coleccionables creadas por la empresa Funko. Se caracterizan por su estilo "chibi", con cabezas grandes y ojos negros redondos, representando personajes de películas, series, cómics, videojuegos, músicos, deportistas y mucho más. Desde su lanzamiento en 2010, se convirtieron en un fenómeno mundial entre fans de todas las edades.


 ## Características del Proyecto:

- Autenticación de usuarios con JWT , Login y Registro en la ruta Usuarios.
- Sistema de CRUD para las Rutas Funko , Categorias y Usuarios.
- En la Ruta Funko encontramos filtrado por Categoria , Precio , Tipo y nombre.
- En la Ruta Categorias encontramos filtrado por Descripcion , Tags , Pais de Origen , Material y nombre.
- Relacion entre las rutas Funko , Categorias y Usuarios.


## Tecnologías que Utilice en el proyecto:

- Node.js
- Express
- MongoDB con Mongoose
- JWT para autenticación
- ES Modules para importación/exportación

## Guia para instalar el proyecto

1. Clonar el repositorio:

git clone repo de github
 

2. Instalar dependencias:

   npm install  ( Para que instale dependencias del package.json)


3. Crear Archivo .env

- MONGODB_URI , PORT , SECRET_KEY.
- Clave jwt = "mi_clave_secreta"


4. Iniciar el servidor:
  
   npm start

