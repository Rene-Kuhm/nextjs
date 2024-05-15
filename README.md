# 📘 Proyecto Tecnodespegue.com
[![Build Status](https://img.shields.io/badge/build-success-brightgreen)](https://your-build-url)
[![Coverage](https://img.shields.io/badge/coverage-80%25-yellow)](https://your-coverage-url)
[![Version](https://img.shields.io/badge/version-1.0-blue)](https://your-version-url)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://your-license-url)

## 📋 Índice
- [📝 Descripción](#descripción)
- [⚙️ Instalación](#instalación)
- [🚀 Uso](#uso)
- [📄 Licencia](#licencia)
- [👥 Autores](#autores)    
<details>
<summary>📝 Descripción</summary>

Este proyecto es una aplicación web desarrollada con Next.js 14. Next.js es un framework de React que permite construir aplicaciones web de manera eficiente y escalable. 

La aplicación tiene como objetivo proporcionar una plataforma para Tecnodespegue.com, donde los usuarios pueden acceder a información relevante sobre tecnología y emprendimiento. 

El proyecto incluye características como la visualización de artículos, la búsqueda de contenido, la interacción con otros usuarios a través de comentarios y la posibilidad de compartir contenido en redes sociales. 

Además, se ha implementado un sistema de administración de usuarios y roles para garantizar la seguridad y la gestión de permisos. 

El proyecto utiliza diversas tecnologías y herramientas, como Next.js para el desarrollo del frontend, Node.js para el backend, y MongoDB para la base de datos. También se ha utilizado CSS para el diseño y estilos de la aplicación. 

Con este proyecto, se busca brindar una experiencia de usuario atractiva y fácil de usar, al tiempo que se garantiza un rendimiento óptimo y una arquitectura escalable.

</details>
<details>
<summary>⚙️ Instalación</summary>
Para instalar el proyecto Tecnodespegue.com, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/tecnodespegue.git
    ```

2. Accede al directorio del proyecto:
    ```bash
    cd tecnodespegue
    ```

3. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

4. Configura las variables de entorno:

    - Crea un archivo `.env` en la raíz del proyecto.
    - Copia el contenido del archivo `.env.example` y pega en el archivo `.env`.
    - Completa las variables de entorno con los valores correspondientes.

5. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

6. Accede a la aplicación en tu navegador:
    ```
    http://localhost:3000
    ```

¡Listo! Ahora tienes el proyecto Tecnodespegue.com instalado y en funcionamiento en tu máquina local.

</details>

<details>
<summary> 🚀 Uso </summary>
La aplicación Tecnodespegue.com se puede utilizar de la siguiente manera:

1. Accede a la aplicación en tu navegador:
    ```
    http://localhost:3000
    ```

2. Explora los diferentes artículos disponibles en la plataforma.

3. Utiliza la barra de búsqueda para encontrar contenido específico.

4. Interactúa con otros usuarios dejando comentarios en los artículos.

5. Comparte contenido interesante en redes sociales utilizando los botones de compartir.

6. Si eres un administrador, accede al panel de administración para gestionar usuarios y permisos.

¡Disfruta de la experiencia de Tecnodespegue.com y mantente actualizado con las últimas noticias y tendencias tecnológicas!
</details>
<details>
<summary> 📄 Licencia </summary>
## License

MIT License

Copyright (c) [2024] [René Kuhm]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</details>
<details>
<summary> 👥 Autores </summary>
## Autores
- [René Kuhm](https://github.com/Rene-Kuhm)
</details>

## 🛠️ Herramientas usadas
<details>
<summary>🛠️ Herramientas usadas</summary>

- [Next.js](https://nextjs.org/): Framework de React para el desarrollo de aplicaciones web eficientes y escalables.
- [Node.js](https://nodejs.org/): Entorno de ejecución de JavaScript del lado del servidor.
- [MongoDB](https://www.mongodb.com/): Base de datos NoSQL utilizada para almacenar y recuperar datos.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Lenguaje de estilo utilizado para diseñar y estilizar la aplicación.

</details>


# 📘 Estructura del proyecto app y src

app
├── about
│  └── page.tsx
├── contact
│  └── page.tsx
├── faq
│  └── page.tsx
├── pricing
│  └── page.tsx
├── project
│  ├── single
│  │  └── page.tsx
│  └── page.tsx
├── services
│  ├── single
│  │  └── page.tsx
│  └── page.tsx
├── team
│  └── page.tsx
├── testimonial
│  └── page.tsx
├── .DS_Store
├── favicon.ico
├── globals.css
├── layout.tsx
├── not-found.tsx
└── page.tsx

# src

src
├── common-types
│  └── index.ts
├── components
│  ├── button
│  │  └── index.tsx
│  ├── cards
│  │  ├── blog
│  │  │  ├── v1
│  │  │  │  └── index.tsx
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  ├── pricing
│  │  │  ├── v1
│  │  │  │  └── index.tsx
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  ├── project
│  │  │  ├── v1
│  │  │  │  └── index.tsx
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  ├── service
│  │  │  ├── v1
│  │  │  │  └── index.tsx
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  ├── stat
│  │  │  ├── v1
│  │  │  │  └── index.tsx
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  ├── team
│  │  │  ├── v1
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.module.css
│  │  │  └── v2
│  │  │     └── index.tsx
│  │  └── testimonial
│  │     ├── rating
│  │     │  └── index.tsx
│  │     ├── v1
│  │     │  └── index.tsx
│  │     └── v2
│  │        └── index.tsx
│  ├── carousel
│  │  ├── sub-components
│  │  │  ├── item
│  │  │  │  └── index.tsx
│  │  │  ├── navigation
│  │  │  │  ├── index.tsx
│  │  │  │  └── interface.tsx
│  │  │  ├── pagination
│  │  │  │  ├── index.tsx
│  │  │  │  └── interface.ts
│  │  │  └── progress
│  │  │     ├── index.tsx
│  │  │     └── interface.ts
│  │  ├── index.tsx
│  │  ├── interface.ts
│  │  └── utils.ts
│  ├── container
│  │  ├── container.module.css
│  │  ├── index.tsx
│  │  └── interface.ts
│  ├── counter
│  │  └── index.tsx
│  ├── custom-link
│  │  ├── index.tsx
│  │  └── interface.ts
│  ├── inputs
│  │  ├── common
│  │  │  └── styles
│  │  │     └── index.ts
│  │  ├── text-input
│  │  │  └── index.tsx
│  │  └── textarea-input
│  │     └── index.tsx
│  ├── mode-toggle
│  │  └── index.tsx
│  ├── scroll-to-top
│  │  └── index.tsx
│  ├── section-heading
│  │  ├── index.tsx
│  │  └── interface.ts
│  ├── theme-provider
│  │  └── index.tsx
│  ├── ui
│  │  ├── accordion.tsx
│  │  ├── dropdown-menu.tsx
│  │  ├── scroll-area.tsx
│  │  └── sheet.tsx
│  └── video-player
│     ├── index.tsx
│     └── video-player.module.css
├── hooks
│  └── dom-ready
│     └── index.tsx
├── layout
│  ├── brand-logo
│  │  └── index.tsx
│  ├── footer
│  │  └── v1
│  │     └── index.tsx
│  └── header
│     ├── desktop
│     │  ├── common
│     │  │  └── navigation
│     │  │     └── index.tsx
│     │  ├── v1
│     │  │  ├── contact-box
│     │  │  │  └── index.tsx
│     │  │  └── index.tsx
│     │  └── v2
│     │     ├── off-canvas
│     │     │  ├── form
│     │     │  │  ├── server
│     │     │  │  │  └── contact-us-form-submit.ts
│     │     │  │  └── index.tsx
│     │     │  └── index.tsx
│     │     ├── search-modal
│     │     │  └── index.tsx
│     │     ├── header.module.css
│     │     └── index.tsx
│     ├── mobile
│     │  ├── navigation
│     │  │  └── index.tsx
│     │  ├── off-canvas
│     │  │  └── index.tsx
│     │  ├── index copy.tsx
│     │  ├── index.tsx
│     │  └── mobile-header.module.css
│     ├── utils
│     │  └── use-sticky-header
│     │     └── index.tsx
│     └── index.tsx
├── sections
│  ├── about
│  │  └── v1
│  │     └── index.tsx
│  ├── contact
│  │  ├── v1
│  │  │  ├── form
│  │  │  │  ├── server
│  │  │  │  │  └── contact-us-form-submit.ts
│  │  │  │  └── index.tsx
│  │  │  └── index.tsx
│  │  └── v2
│  │     ├── form
│  │     │  ├── server
│  │     │  │  └── contact-us-form-submit.ts
│  │     │  └── index.tsx
│  │     └── index.tsx
│  ├── cta
│  │  ├── v1
│  │  │  └── index.tsx
│  │  └── v2
│  │     └── index.tsx
│  ├── faq
│  │  └── index.tsx
│  ├── hero
│  │  ├── v1
│  │  │  ├── shapes
│  │  │  │  └── index.tsx
│  │  │  ├── hero.module.css
│  │  │  ├── index copy.tsx
│  │  │  └── index.tsx
│  │  ├── v2
│  │  │  └── index.tsx
│  │  └── v3
│  │     └── index.tsx
│  ├── map-section
│  │  └── index.tsx
│  ├── pricing
│  │  ├── version-1
│  │  │  └── index.tsx
│  │  └── version-2
│  │     └── index.tsx
│  ├── project
│  │  ├── v1
│  │  │  └── index.tsx
│  │  └── v2
│  │     └── index.tsx
│  ├── project-details
│  │  └── v1
│  │     └── index.tsx
│  ├── service
│  │  └── v1
│  │     └── index.tsx
│  ├── service-details
│  │  └── v1
│  │     └── index.tsx
│  ├── statistics
│  │  ├── v1
│  │  │  └── index.tsx
│  │  └── v2
│  │     └── index.tsx
│  ├── team
│  │  ├── v1
│  │  │  └── index.tsx
│  │  └── v2
│  │     └── index.tsx
│  ├── testimonial
│  │  ├── v1
│  │  │  └── index.tsx
│  │  └── v2
│  │     └── index.tsx
│  └── work-process
│     └── v1
│        ├── card
│        │  └── index.tsx
│        ├── cards-carousel
│        │  └── index.tsx
│        ├── text-slider
│        │  └── index.tsx
│        └── index.tsx
├── themes
│  └── interface.ts
├── utils
│  ├── aos
│  │  └── index.tsx
│  ├── set-staggered-delay.ts
│  └── shadcn.ts
└── .DS_Store


