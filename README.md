# SchoolTrack - Landing Page

Landing page profesional y moderna para SchoolTrack, un software educativo para colegios. Desarrollada con React + Vite, TailwindCSS y Framer Motion, optimizada para despliegue en Vercel.

## 🚀 Características

- **Diseño Moderno**: Interfaz tipo SaaS con esquinas redondeadas y sombras suaves
- **Animaciones Fluidas**: Framer Motion para todas las animaciones principales
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **API Funcional**: Endpoint `/api/contact` para recibir solicitudes de contacto
- **Optimizado para Vercel**: Configuración lista para despliegue

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o navega a la carpeta del proyecto:
```bash
cd SchoolTrack
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Construcción

Para crear la versión de producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub

1. Sube tu código a un repositorio de GitHub
2. Ve a [Vercel](https://vercel.com) e inicia sesión
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración de Vite
6. Haz clic en "Deploy"

### Opción 2: Despliegue desde CLI

1. Instala Vercel CLI globalmente:
```bash
npm i -g vercel
```

2. En la raíz del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla para completar el despliegue

### Configuración de Vercel

El proyecto incluye un archivo `vercel.json` que configura las rutas de la API. No se requiere configuración adicional.

**Nota sobre el almacenamiento de leads**: 
- En desarrollo, los leads se guardan en `data/leads.json`
- En producción (Vercel), los leads se guardan temporalmente en `/tmp` debido a las limitaciones del sistema de archivos serverless
- Para producción a largo plazo, se recomienda integrar una base de datos (MongoDB, PostgreSQL, Vercel KV, etc.)

## 📁 Estructura del Proyecto

```
SchoolTrack/
├── api/
│   └── contact.js          # Endpoint API para formulario de contacto
├── data/
│   └── leads.json          # Archivo donde se guardan los leads (gitignored)
├── public/
│   └── assets/             # Recursos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── sections/           # Secciones de la landing page
│   │   ├── Hero.jsx
│   │   ├── Problema.jsx
│   │   ├── Solucion.jsx
│   │   ├── Beneficios.jsx
│   │   ├── Demo.jsx
│   │   ├── Validacion.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales con Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## 🎨 Tecnologías Utilizadas

- **React 18**: Biblioteca de UI
- **Vite**: Build tool y dev server
- **TailwindCSS**: Framework de CSS utility-first
- **Framer Motion**: Biblioteca de animaciones
- **React Router**: Enrutamiento (incluido para futuras expansiones)

## 📝 API Endpoint

### POST `/api/contact`

Recibe solicitudes del formulario de contacto.

**Body (JSON):**
```json
{
  "nombre": "Juan Pérez",
  "rol": "rector",
  "institucion": "Colegio Ejemplo",
  "email": "juan@ejemplo.com",
  "mensaje": "Me interesa conocer más sobre SchoolTrack"
}
```

**Respuesta exitosa:**
```json
{
  "success": true
}
```

**Validaciones:**
- Todos los campos son requeridos
- El email debe tener un formato válido
- Los datos se guardan en `data/leads.json` (desarrollo) o `/tmp` (producción)

## 🎯 Secciones de la Landing

1. **Hero**: Presentación principal con CTA
2. **El Problema Actual**: Descripción de los problemas que resuelve
3. **La Solución**: Módulos y características de SchoolTrack
4. **Beneficios**: Ventajas para la comunidad educativa
5. **Demo**: Vista previa del dashboard
6. **Validación**: Métricas y resultados
7. **Contacto**: Formulario de solicitud de información
8. **Footer**: Información de copyright

## 📄 Licencia

MIT

## 👤 Autor

John Siabato

---

**SchoolTrack** - Transforma la gestión académica de tu colegio

