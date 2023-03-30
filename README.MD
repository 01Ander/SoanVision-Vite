# SoanVision

SoanVision es una aplicación web para la gestión de archivos de imagen. El proyecto utiliza la tecnología Vite, que es un servidor de desarrollo rápido y eficiente para aplicaciones web de JavaScript.

## Características

- Ver una lista de todas las imágenes subidas con su nombre y autor relacionado.
- Ver la imagen en tamaño original en un modal.
- Realizar búsquedas de imágenes relacionadas al input dado.
- Sección de subida de imágenes propias. (No implementado, por restricciones de la api)

## Cómo utilizar

1. Clona el repositorio: `git clone https://github.com/01Ander/SoanVision-Vite.git`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre el navegador web y accede a `http://localhost:3000`

## Configuración

Antes de poder utilizar SoanVision, debes proporcionar tu propia API key de Pexels. Sigue estos pasos para obtener una clave de API gratuita de Pexels:

1. Visita https://www.pexels.com/api/ y regístrate para obtener una cuenta gratuita.
2. Obtén tu API key de Pexels desde el panel de control de tu cuenta.
3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

``` shell
VITE_API_KEY=your_api_key_here
```

4. Reemplaza `your_api_key_here` con tu propia API key de Pexels.

## Tecnologías utilizadas

- Vite
- Node.js
- Express.js
- JavaScript
- SASS

## Contribuyendo

Si quieres contribuir a este proyecto, puedes crear una rama de la rama `main`, hacer tus cambios y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](https://github.com/01Ander/SoanVision-Vite/blob/main/LICENSE) para obtener más detalles.