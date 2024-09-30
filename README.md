# Parcial 1 - Web Development

Este proyecto fue desarrollado utilizando **React** para la construcción de la interfaz de usuario y tiene como objetivo simular una aplicación web de deportes que permite a los usuarios iniciar sesión y ver información personalizada sobre sesiones deportivas. La aplicación incluye funcionalidades como la internacionalización de la interfaz de usuario, validación de formularios y despliegue en GitHub Pages. A continuación, se detalla el paso a paso para ejecutar la solución y un reporte sobre las decisiones tomadas durante el desarrollo del parcial.

## Tabla de Contenidos

1. [Requerimientos](#requerimientos)
2. [Instalación](#instalación)
3. [Ejecución](#ejecución)
4. [Despliegue](#despliegue)
5. [Reporte de Desarrollo](#reporte-de-desarrollo)
6. [Tecnologías Utilizadas](#tecnologías-utilizadas)
7. [Interfaz Gráfica](#interfaz-gráfica)

## Requerimientos

Para ejecutar este proyecto necesitas tener instalado en tu sistema:

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **Git** (opcional, si se desea clonar el proyecto desde un repositorio remoto)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jsurrea/parcial-web-development
   ```

2. **Instalar dependencias:**

   Navega hasta la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   cd parcial-web-development
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en la dirección [http://localhost:3000](http://localhost:3000).

## Despliegue

Si deseas desplegar la aplicación en GitHub Pages, sigue estos pasos:

1. Agrega la propiedad `homepage` en tu archivo `package.json` con la URL donde se alojará la aplicación:

   ```json
   {
     "homepage": "https://USERNAME.github.io/REPO"
   }
   ```

2. Luego ejecuta el siguiente comando para desplegar la aplicación:

   ```bash
   npm run deploy
   ```

La aplicación estará disponible en la URL especificada en la propiedad `homepage`. En el caso de este proyecto, la aplicación se encuentra desplegada en la siguiente URL: [https://jsurrea.github.io/parcial-web-development/](https://jsurrea.github.io/parcial-web-development/).

## Reporte de Desarrollo

### Decisiones y Proceso de Desarrollo

Durante el desarrollo de este parcial se tomaron las siguientes decisiones clave:

1. **Uso de React y Componentización:**
   React fue elegido como la biblioteca principal para el desarrollo de la interfaz de usuario por su capacidad de manejar componentes reutilizables y su eficiente gestión del estado. Los componentes principales utilizados fueron:

   - **Login:** Página de inicio de sesión que incluye validaciones de formulario y navegación hacia la página principal.
   - **Home:** Página principal que muestra información personalizada con un diseño dinámico basado en datos obtenidos de una API.
   - **SportCard & Sport:** Componentes para mostrar las sesiones deportivas, organizadas por tipo de deporte.

2. **Internacionalización (i18n):**
   Se implementó internacionalización utilizando la librería `react-intl`, permitiendo cambiar el idioma de la interfaz de usuario dinámicamente. Los idiomas soportados son: inglés, español, francés e italiano. Los textos dinámicos están cargados desde archivos JSON que contienen las traducciones. Estos archivos se encuentran en la carpeta `src/locales`.

3. **Uso de Bootstrap:**
   Para el diseño de la interfaz de usuario se utilizó **React Bootstrap**, permitiendo un diseño moderno y responsivo sin necesidad de escribir CSS desde cero. Componentes como botones, formularios y modales fueron implementados usando esta librería.

4. **Validación de Formularios:**
   En la página de inicio de sesión (`Login`), se implementó la validación del formulario utilizando hooks de React (`useState` y `useEffect`). Las validaciones incluyen la longitud de la contraseña y el formato del correo electrónico a través de expresiones regulares.

5. **API Mockaroo:**
   Para simular datos de usuario y deportes, se realizó una llamada a la API de Mockaroo, la cual proporciona datos de ejemplo para alimentar la aplicación.

6. **Despliegue en GitHub Pages:**
   El proyecto fue configurado para ser desplegado en **GitHub Pages** utilizando la librería `gh-pages`. Esto facilita la publicación y el acceso a la aplicación a través de una URL pública.

### Componentes Utilizados

1. **BrowserRouter y Routes** (react-router-dom): Utilizados para definir las rutas de la aplicación y permitir la navegación entre las diferentes páginas (`Login` y `Home`).
2. **useState y useEffect**: Utilizados para manejar el estado interno de los componentes y gestionar efectos secundarios como la llamada a la API y validación del formulario.
3. **React Bootstrap**: Utilizado para crear componentes estilizados como botones (`Button`), formularios (`Form`), tarjetas (`Card`), y modales (`Modal`).
4. **react-intl**: Utilizado para la internacionalización de la aplicación.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **React Router**: Utilizado para la navegación entre las diferentes rutas de la aplicación.
- **React Bootstrap**: Biblioteca para diseño y estilo de componentes con Bootstrap 5.
- **react-intl**: Utilizado para gestionar la internacionalización de la aplicación.
- **gh-pages**: Herramienta para desplegar la aplicación en GitHub Pages.
- **Mockaroo API**: Para generar datos ficticios en la aplicación.

## Interfaz Gráfica

<img width="1728" alt="image" src="https://github.com/user-attachments/assets/33fca1a7-785b-4d0b-a729-f7bff4eef380">

<img width="1728" alt="image" src="https://github.com/user-attachments/assets/b7b244ef-6d23-402a-b9fe-630ec2e33fb7">

