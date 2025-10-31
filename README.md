
-----

# 🏡 Pablo Tu Hogar Ideal

[](https://opensource.org/licenses/MIT)
[](https://vitejs.dev/)

**Una experiencia digital, limpia y profesional para tu negocio inmobiliario.**

-----

## 👁️ Visión General del Proyecto

**Pablo Tu Hogar Ideal** es una moderna plataforma web diseñada para inmobiliarias, enfocada en ofrecer una **experiencia visual limpia, rápida y profesional** para la presentación de propiedades.

El objetivo principal es ser una herramienta digital atractiva que facilite el contacto con clientes interesados en bienes raíces, presentando la información de manera moderna y accesible desde cualquier dispositivo, con un enfoque en la velocidad y la estética minimalista.

> **Objetivo:** Facilitar la gestión y promoción de propiedades inmobiliarias con una interfaz de usuario de alto impacto y rendimiento optimizado.

-----

## 🔑 Características Clave

  * **⚡ Rendimiento Superior:** Desarrollado con **Vite** para garantizar una velocidad de carga ultrarrápida y un entorno de desarrollo eficiente.
  * **📱 Diseño *Responsive*:** Totalmente compatible y optimizado para una visualización perfecta en cualquier dispositivo (móvil, tablet, escritorio) gracias a **TailwindCSS**.
  * **🎨 Estética Minimalista:** Interfaz de usuario intuitiva con componentes visuales dinámicos que destacan las propiedades.
  * **⚙️ Arquitectura Escalable:** Basado en **React** para componentes reutilizables, preparado para futuras integraciones con APIs de gestión de propiedades y bases de datos.

-----

## ⚙️ Tecnologías Utilizadas

Este proyecto fue construido con un *stack* de desarrollo moderno y eficiente:

  * **Frontend *Framework***: ⚛️ **React** (Para la construcción de interfaces dinámicas).
  * ***Build Tool & Dev Environment***: ⚡ **Vite** (Compilación optimizada y *Hot Module Replacement*).
  * ***Styling***: 🎨 **TailwindCSS** (Sistema de estilos *utility-first* para un desarrollo rápido y flexible).
  * **Lenguaje Base**: 🧩 **JavaScript (ES6+)** (Lógica y funcionalidad del proyecto).

-----

## ⬇️ Guía de Instalación y Ejecución

Sigue estos sencillos pasos para tener el proyecto corriendo en tu entorno local.

### **Pre-requisitos**

Asegúrate de tener instalado **Node.js** (versión 16 o superior).

### 1\. Clonar el Repositorio

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd pablo-tu-hogar-ideal
```

### 2\. Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3\. Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias, inicia el servidor de desarrollo local:

```bash
npm run dev
```

El proyecto estará disponible en tu navegador en la siguiente dirección:

> **🌐 Abrir:** `http://localhost:5173/` (o el puerto que muestre tu terminal al iniciar Vite)

-----

## 🛣️ Estructura de Rutas (Asumiendo React Router)

El proyecto está organizado en las siguientes rutas principales para una navegación clara:

| Ruta | Descripción | Componente principal |
| :--- | :--- | :--- |
| `/` | **Inicio:** Presentación de la inmobiliaria y propiedades destacadas. | `Home.jsx` |
| `/propiedades` | **Catálogo:** Listado completo de todas las propiedades disponibles. | `Propiedades.jsx` |
| `/propiedad/:id` | **Detalle:** Vista individual de una propiedad específica. | `DetallePropiedad.jsx` |
| `/nosotros` | **Acerca de:** Información sobre la empresa y su misión. | `Nosotros.jsx` |
| `/contacto` | **Contacto:** Formulario y detalles para que los clientes se comuniquen. | `Contacto.jsx` |

-----

## 📁 Estructura del Proyecto

La estructura sigue un patrón estándar de React/Vite para mantener el código organizado y fácil de navegar:

```
pablo-tu-hogar-ideal/
├── node_modules/
├── public/
├── src/
│   ├── components/     # Componentes reutilizables (Header, Card, Footer, etc.)
│   ├── pages/          # Vistas principales (Home, Propiedades, Contacto)
│   ├── assets/         # Archivos como logos o iconos
│   ├── App.jsx         # Componente principal de React
│   └── main.jsx        # Punto de entrada de la aplicación
├── index.html
├── package.json
└── tailwind.config.js
```

-----

## 🤝 Contribución

¡Las contribuciones son bienvenidas\! Si deseas mejorar o expandir el proyecto, sigue estos pasos:

1.  **Haz un *Fork* del repositorio.**
2.  **Crea una nueva rama** para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3.  **Realiza tus cambios** y haz *commit* (`git commit -am 'feat: Añade nueva funcionalidad X'`).
4.  **Sube tu rama** (`git push origin feature/nueva-funcionalidad`).
5.  **Abre un *Pull Request*** (PR) detallando los cambios realizados.

> **Nota:** Por favor, asegúrate de que tu código sigue los estándares de estilo del proyecto y que todas las pruebas (si las hay) pasan.

-----

## 👤 Autor y Soporte

Este proyecto formativo fue desarrollado para la creación de soluciones digitales en el sector inmobiliario.

  * **👨‍💻 Desarrollado por:** Wilson Andrés Camacho Culma
  * **🏢 Empresa:** Tecnología Primer
  * **📧 Correo de Contacto:** andrescamacho.19@hotmail.com

-----

## ⚖️ Licencia

Este proyecto se distribuye bajo la **Licencia MIT**.
Puedes usar, modificar y redistribuir libremente el código, siempre dando el debido crédito al autor original.

-----
