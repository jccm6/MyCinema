# MyCinema (Descripción Español)

MyCinema es una solución full-stack que ofrece una experiencia cinéfila, presentando información detallada sobre películas obtenida directamente de MongoDB. Este sistema permite a los usuarios explorar una pequeña variedad de títulos cinematográficos a través de una interfaz intuitiva, para enriquecer su experiencia.
Puedes acceder al proyecto mediante: https://cinema.jccm.dev/

## Tecnologías Utilizadas

### Frontend
- Webpack: Utilizado para empaquetar y optimizar los recursos del proyecto.
- Axios: Empleado para realizar solicitudes HTTP y manejar la comunicación con el backend.
- HTML, CSS y JavaScript Vanilla: Usados para estructurar y dar vida a la interfaz de usuario.

### Backend
- Nodemon: Herramienta de desarrollo que reinicia automáticamente el servidor cada vez que se detectan cambios en los archivos del proyecto, agilizando el proceso de desarrollo.
- Express: Framework de Node.js para crear el servidor y gestionar las rutas de la API.
- Mongoose: Librería de Node.js que facilita la interacción con MongoDB, permitiendo modelar y manipular los datos de las películas.

## Características

- **Integración Backend-Frontend**: El frontend realiza peticiones al backend para obtener y mostrar la información de las películas.
- **Conexión con MongoDB**: El backend está conectado mediante Mongoose a MongoDB, asegurando una gestión eficiente de los datos de las películas.
- **Formulario de Carga**: Los usuarios pueden agregar nuevas películas a la base de datos a través de un formulario intuitivo en el frontend.

## Instalación

Para instalar tanto el frontend como el backend de MyCinema, sigue estos pasos:

1. Clona el repositorio:
   git clone https://github.com/jccm6/MyCinema.git
2. Instala las dependencias tanta para el backend como frontend
    npm install

Con estos pasos, tendrás instaladas todas las dependencias necesarias para ejecutar tanto el frontend como el backend de MyCinema.

## Uso

MyCinema es un proyecto educativo pero totalmente funcional, diseñado para realizar peticiones de tipo GET y POST a MongoDB. A continuación, se detallan los pasos para utilizar el proyecto:

1. Configura las variables de entorno:
   - **Frontend**: Crea un archivo `.env` en la raíz del directorio del frontend y añade la siguiente línea:
     ```
     API_URL=TuDirecciónURLDelBackend
     ```
   - **Backend**: Crea un archivo `.env` en la raíz del directorio del backend y añade la siguiente línea:
     ```
     MONGODB_URL=TuDirecciónURLDeMongoDB
     ```

2. Inicia el servidor backend:
   npm start

## Contribuir

¡Tu contribución es bienvenida! Si deseas ayudar a mejorar MyCinema, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica o corrección (`git checkout -b mi-nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -m 'Añadir alguna característica'`).
4. Haz push a tu rama (`git push origin mi-nueva-caracteristica`).
5. Crea un nuevo Pull Request desde tu rama hacia la rama principal del repositorio original.

Antes de enviar tu Pull Request, asegúrate de que tu código sigue las pautas de estilo y que has probado tus cambios.

## Licencia

MyCinema está bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Esto significa que puedes utilizar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software, siempre y cuando incluyas una copia del texto de la licencia en todas las copias o porciones sustanciales del software.

Para más detalles, consulta el archivo [LICENSE](LICENSE) en este repositorio.

---
---

# MyCinema (English version)

MyCinema is a full-stack solution that offers a cinematic experience, presenting detailed information about movies obtained directly from MongoDB. This system allows users to explore a small variety of film titles through an intuitive interface, to enrich their experience.
You can access the project through: https://cinema.jccm.dev/

## Technologies Used

### Frontend
- Webpack: Used to package and optimize project resources.
- Axios: Used to perform HTTP requests and handle communication with the backend.
- HTML, CSS, and Vanilla JavaScript: Used to structure and bring the user interface to life.

### Backend
- Nodemon: A development tool that automatically restarts the server whenever changes are detected in the project files, speeding up the development process.
- Express: A Node.js framework for creating the server and managing API routes.
- Mongoose: A Node.js library that facilitates interaction with MongoDB, allowing you to model and manipulate movie data.

## Features

- **Backend-Frontend Integration**: The frontend makes requests to the backend to obtain and display movie information.
- **Connection with MongoDB**: The backend is connected through Mongoose to MongoDB, ensuring efficient management of movie data.
- **Upload Form**: Users can add new movies to the database through an intuitive form on the frontend.

## Installation

To install both the frontend and backend of MyCinema, follow these steps:

1. Clone the repository:
   git clone https://github.com/jccm6/MyCinema.git
2. Install the dependencies for both the backend and frontend:
    npm install

With these steps, you will have installed all the necessary dependencies to run both the frontend and backend of MyCinema.

## Usage

MyCinema is an educational but fully functional project, designed to perform GET and POST requests to MongoDB. The following are the steps to use the project:

1. Set up environment variables:
   - **Frontend**: Create a `.env` file in the root directory of the frontend and add the following line:
     ```
     API_URL=YourBackendURL
     ```
   - **Backend**: Create a `.env` file in the root directory of the backend and add the following line:
     ```
     MONGODB_URL=YourMongoDBURL
     ```

2. Start the backend server:
   npm start

## Contributing

Your contribution is welcome! If you want to help improve MyCinema, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix (`git checkout -b my-new-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push your branch (`git push origin my-new-feature`).
5. Create a new Pull Request from your branch to the main branch of the original repository.

Before sending your Pull Request, make sure your code follows the style guidelines and that you have tested your changes.

## License

MyCinema is under the [MIT License](https://opensource.org/licenses/MIT). This means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you include a copy of the license text in all copies or substantial portions of the software.

For more details, see the [LICENSE](LICENSE) file in this repository.
