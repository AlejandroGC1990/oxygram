
# Proyecto de Gestión de Imágenes en React con Vite y Redux

Este proyecto es una aplicación web desarrollada en React utilizando Vite para la creación rápida de proyectos. La aplicación permite a los usuarios buscar imágenes en Unsplash, gestionar sus imágenes favoritas, y ordenarlas o filtrarlas según diferentes criterios. La gestión del estado se maneja con Redux Toolkit y Redux Thunk, y los datos se almacenan en localStorage para mantener la persistencia.


## Despliegue

El proyecto está desplegado en un servidor AWS S3. Puedes acceder a la aplicación en la siguiente URL:

[## http://agc-oxygram.s3-website.eu-north-1.amazonaws.com/](http://agc-oxygen-oxygram.s3-website.eu-west-3.amazonaws.com/)


## Funcionalidades

- Página Home: Interfaz para ver imágenes random.
- Página Búsqueda: Permite buscar imágenes en Unsplash utilizando su API.
- Página Favoritos:
    + Paginación: Paginación aplicada en el slider con las 10 imágenes con más likes de la colección de Favoritos.
- Componente card: Componente para ver y gestionar las imágenes añadidas a la colección personal.
    + Agregar a Favoritos: Opción para añadir imágenes a una colección personal.
    + Agregar un comentario a una foto: Opción para añadir comentarios a una imagen incluida en la colección personal.
    + Edición de descripciones.
    + Eliminación de imágenes y descripciones en Favoritos.
    + Ordenación por fecha de importación, ancho, alto y likes.
    + Descarga de imágenes.
    + Sistema de Etiquetas: Implementación de un sistema de etiquetas (tags) con la opción de filtrar imágenes nuevas en la página de search por etiqueta.
- localStorage: Utilizado para guardar imágenes favoritas y permitir que persistan entre sesiones.
- file-saver: Utilizado para descargar imágenes desde URLs.

## Tecnologías utilizadas

- React: Librería para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para proyectos de React.
- Redux Toolkit: Manejo del estado global de la aplicación.
- Redux Thunk: Middleware para manejar acciones asíncronas.
- Material-UI (MUI): Biblioteca de componentes para el diseño (opcional).
- Unsplash API: API para la búsqueda de imágenes.
- file-saver: Biblioteca para descargar archivos.

## Instalación

1. Clonar el Repositorio.
```bash
https://github.com/AlejandroGC1990/oxygram.git
```
2. Instalar Dependencias.
Navega al directorio del proyecto e instala las dependencias:
```bash
cd Oxygram
npm install
```
3. Ejecutar el Proyecto:
Para iniciar el servidor de desarrollo:
```bash
npm run dev
```
    
## Estructura del proyecto

- src/: Carpeta principal del código fuente.
- app/: 
    - api: Carpeta para gestionar los enlaces de petición a la API
    - store.js: Configuración del store de Redux.
- assets: Carpeta que contiene los iconos utilizados.
- components/: Componentes reutilizables de la aplicación.
- features: Configuración de Redux a través de slice y thunk.
- hooks/: Funciones utilitarias.
- pages/: Componentes de página como Search y MyPhotos.
- redux/: Configuración de Redux.
    - slices/: Contiene los slices searchSlice y favouritesSlice.
- styles/: Estilos globales y temas.

## Referencias de la API

Para buscar imágenes en Unsplash, se utiliza la siguinete ruta de la API de Unsplash:

#### Get all items

```http
  GET /search/photos
```


## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejoras o encuentras problemas, abre un issue o envía un pull request.
