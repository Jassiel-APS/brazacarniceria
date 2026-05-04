# 🥩 Braza - Distribuidora de Carne Fresca

Landing page profesional, moderna y responsiva para **Distribuidora de Carne Braza**. Una solución completa diseñada para captar cotizaciones y consultas de clientes.

## 📋 Características

✅ **Diseño Premium y Rústico** - Colores oscuros, dorados y tonos fuego  
✅ **100% Responsivo** - Funciona perfectamente en móvil, tablet y desktop  
✅ **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards, Sitemap, Robots.txt  
✅ **Accesibilidad WCAG** - Aria-labels, navegación por teclado, contraste adecuado  
✅ **Integración WhatsApp** - Cotización directa desde formulario o botones  
✅ **40+ Productos** - Organizados por categorías con tabs (desktop) y acordeones (móvil)  
✅ **Sin Dependencies Pesadas** - Vanilla JS, sin jQuery, React ni frameworks  
✅ **Vite + ES6 Modules** - Build rápido y optimizado  
✅ **Configuración Multi-Plataforma** - Vercel, Netlify, Nginx, Apache  

---

## 🚀 Instalación y Configuración Local

### 1️⃣ Requisitos Previos

Asegúrate de tener instalados:
- **Node.js** 18+ (descargar desde [nodejs.org](https://nodejs.org))
- **npm** (incluido con Node.js)
- **Git** (para control de versiones)

### 2️⃣ Clonar / Descargar el Proyecto

```bash
# Opción 1: Si es un repositorio Git
git clone https://github.com/tu-usuario/braza-landing.git
cd braza-landing

# Opción 2: Si descargaste la carpeta comprimida
cd braza-landing
```

### 3️⃣ Instalar Dependencias

```bash
npm install
```

Esto instalará **Vite** y otras herramientas necesarias.

### 4️⃣ Ejecutar en Desarrollo Local

```bash
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:3000`

Cualquier cambio que hagas se reflejará instantáneamente (Hot Module Replacement).

### 5️⃣ Compilar para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` con archivos optimizados listos para publicar.

Para previsualizar la build:

```bash
npm run preview
```

---

## 📝 Archivos a Modificar por Dominio/Contacto

### 1. **Dominio Real**

Busca y reemplaza `https://www.tudominio.com` en:

- `index.html` - Meta tags, Open Graph, canonical link, Structured Data
- `public/robots.txt` - Sitemap URL
- `public/sitemap.xml` - URLs principales
- `vercel.json` - Redirecciones
- `netlify.toml` - Contexto de producción
- `nginx.conf` - server_name
- `.htaccess` - Si usas Apache

**Búsqueda rápida en VS Code:**
```
Ctrl+Shift+H (Windows) o Cmd+Shift+H (Mac)
Buscar: https://www.tudominio.com
Reemplazar: https://www.tudominio.com
```

### 2. **Número de WhatsApp**

Busca y reemplaza `573001234567` (sin +, sin espacios):

- `index.html` - Múltiples botones y enlaces
- `src/utils/whatsapp.js` - Configuración base
- `.htaccess` y otros archivos de configuración

**Formato requerido:**
- Con código de país: `573001234567` (Colombia)
- Ejemplos: `552133334444` (México), `541133445566` (Argentina)

### 3. **Email de Contacto**

Reemplaza `ventas@brazacarne.com`:

- `index.html` - Sección de contacto y footer
- `public/humans.txt` - Información del desarrollador
- `public/.well-known/security.txt` - Contacto de seguridad
- `vercel.json` - Variables de entorno (si aplica)

### 4. **Información de Ubicación**

En `index.html`, sección "CONTACTO":

```html
<!-- Busca y actualiza -->
<p style="font-size: var(--font-size-lg);">
  📍 Calle principal #123<br>
  Tu ciudad, Departamento<br>
  Colombia
</p>
```

### 5. **Redes Sociales**

En `index.html`, footer:

```html
<a href="https://www.facebook.com/brazacarne" class="social-link">f</a>
<a href="https://www.instagram.com/brazacarne" class="social-link">📷</a>
```

### 6. **Información de la Empresa**

- `public/site.webmanifest` - Nombre corto
- `public/humans.txt` - Equipo y contacto
- `index.html` - Structured Data (JSON-LD)

---

## 🖼️ Imágenes y Assets

### Actualizar Imágenes

1. **Favicon**: Reemplaza `public/favicon.svg`
2. **Imágenes de producto**: Agrega en `public/images/`
3. **Screenshot del manifest**: Agrega `public/images/screenshot-1.png` y `screenshot-2.png`

### Placeholder Actual

Por ahora, la landing usa:
- Emojis como placeholders visuales (🥩, 🔥, 🍖, etc.)
- Gradientes CSS como fondos

Para cambiar a imágenes reales:

**En HTML:**
```html
<!-- De esto: -->
<div style="font-size: 150px;">🔥</div>

<!-- A esto: -->
<img src="/images/hero-image.jpg" alt="Parrilla con carne asada">
```

**En CSS:**
```css
/* Cambiar background gradiente por imagen */
background-image: url('/images/texture.jpg');
background-size: cover;
background-position: center;
```

### Optimizar Imágenes

- Usa formatos modernos: **WebP**, **AVIF**
- Genera versiones responsivas con **srcset**
- Comprime con herramientas como [TinyPNG](https://tinypng.com)

---

## 📱 Estructura de Carpetas

```
braza-landing/
├─ index.html                    # Página principal
├─ package.json                  # Dependencias Node
├─ README.md                     # Este archivo
├─ vercel.json                   # Configuración Vercel
├─ netlify.toml                  # Configuración Netlify
├─ nginx.conf                    # Configuración Nginx
├─ .htaccess                     # Configuración Apache
├─ vite.config.js                # Configuración Vite
├─ .gitignore                    # Archivos a ignorar en Git
├─
├─ public/                       # Archivos públicos (no procesados por Vite)
│  ├─ robots.txt                 # Instrucciones para buscadores
│  ├─ sitemap.xml                # Mapa del sitio
│  ├─ site.webmanifest          # Manifest para PWA
│  ├─ favicon.svg               # Icono del sitio
│  ├─ humans.txt                # Información del equipo
│  ├─ _headers                  # Headers para Vercel/Netlify
│  ├─ _redirects                # Redirecciones para Netlify
│  ├─ images/                   # Imágenes del proyecto
│  │  └─ placeholders/
│  └─ .well-known/
│     └─ security.txt           # Política de seguridad
│
└─ src/                          # Código fuente
   ├─ main.js                    # Punto de entrada JavaScript
   ├─ data/
   │  └─ products.js             # Lista de productos
   ├─ utils/
   │  └─ whatsapp.js             # Utilidades de WhatsApp
   └─ styles/
      ├─ main.css                # Importa todo
      ├─ tokens.css              # Variables CSS (colores, tipografía)
      ├─ base.css                # Estilos globales
      ├─ layout.css              # Grid, flex, contenedores
      ├─ components.css          # Componentes reutilizables
      └─ responsive.css          # Media queries
```

---

## 🎨 Personalización de Diseño

### Cambiar Colores

Edita `src/styles/tokens.css`:

```css
:root {
  --color-charcoal: #1a1a1a;      /* Negro carbón */
  --color-wood: #3d2817;           /* Café madera */
  --color-gold: #d4a373;           /* Dorado */
  --color-fire: #d84315;           /* Fuego naranja */
  --color-meat: #8b0000;           /* Rojo carne */
}
```

### Cambiar Tipografía

En `src/styles/tokens.css`:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
/* O cambia a: 'Poppins', 'Inter', 'Roboto', etc. */
```

### Espaciado y Tamaños

```css
/* En tokens.css */
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
```

---

## 📦 Editar Productos

### Agregar/Modificar Productos

En `src/data/products.js`:

```javascript
export const products = {
  carneFreska: [
    { id: 1, name: 'Bistec de res', category: 'carneFreska' },
    { id: 2, name: 'Tu producto aquí', category: 'carneFreska' },
    // ...
  ]
}
```

### Agregar Nueva Categoría

1. Agrega en `products.js`:

```javascript
export const products = {
  // ... categorías existentes
  seafood: [
    { id: 41, name: 'Camarones', category: 'seafood' },
    { id: 42, name: 'Pez espada', category: 'seafood' }
  ]
}

export const categoryLabels = {
  // ... labels existentes
  seafood: 'Mariscos y Pescados'
}
```

2. El código JavaScript renderizará automáticamente los nuevos tabs y acordeones.

---

## 🔍 SEO y Meta Tags

### Cambiar Meta Descripción

En `index.html`:

```html
<meta name="description" content="TU DESCRIPCIÓN AQUÍ">
```

### Open Graph (Redes Sociales)

```html
<meta property="og:title" content="Tu título aquí">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://www.tudominio.com/images/og-image.png">
```

### Structured Data (Schema.org)

En `index.html`, sección `<script type="application/ld+json">`:

```json
{
  "name": "Distribuidora de Carne Braza",
  "address": {
    "streetAddress": "Tu dirección",
    "addressLocality": "Tu ciudad",
    "postalCode": "Tu CP"
  },
  "telephone": "+57 300 123 4567"
}
```

---

## 🌐 Publicar en Vercel

### Opción 1: Git + Vercel Dashboard

1. Sube el proyecto a GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Variables de entorno (si aplica) en Settings

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Sigue los prompts interactivos.

---

## 🌐 Publicar en Netlify

### Opción 1: Git + Netlify Dashboard

1. Sube a GitHub (como arriba)
2. Ve a [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Selecciona tu repositorio
5. Build command: `npm run build`
6. Publish directory: `dist`

### Opción 2: Netlify CLI

```bash
npm i -g netlify-cli
netlify deploy
```

---

## 🔐 Seguridad

### HTTPS

- **Vercel** y **Netlify** proporcionan HTTPS automático y gratis
- Si usas tu propio servidor: Obtén certificado SSL gratuito con [Let's Encrypt](https://letsencrypt.org)

### Headers de Seguridad

Ya están configurados en:
- `vercel.json`
- `netlify.toml`
- `.htaccess`
- `nginx.conf`

Incluyen:
- X-Frame-Options (previene clickjacking)
- Content-Security-Policy
- X-XSS-Protection
- HSTS

### Variables de Entorno

Aunque esta landing es estática, puedes añadir variables si integras un backend:

```bash
# Crear archivo .env.local (no se sube a Git)
VITE_API_URL=https://api.tudominio.com
VITE_WHATSAPP_NUMBER=573001234567
```

En código:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🧪 Testing

### Verificar SEO

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Verificar Accesibilidad

- [WAVE](https://wave.webaim.org)
- [Axe DevTools](https://www.deque.com/axe/devtools/)

### Testing de Responsividad

En Chrome DevTools:
- `F12` → Device Toolbar (`Ctrl+Shift+M`)
- Prueba en iPhone, iPad, Galaxy S10, etc.

---

## 📊 Análisis y Tracking

### Google Analytics

Agrega en `index.html` antes de `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Reemplaza `GA_ID` con tu ID de Google Analytics.

### Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu dominio
3. Verifica propiedad (HTML o DNS)
4. Envía sitemap.xml

---

## 🐛 Troubleshooting

### Problema: "Port 3000 already in use"

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Problema: WhatsApp no funciona

- Verifica que el número tiene formato correcto: `573001234567`
- Sin `+`, sin espacios, con código de país
- Prueba en navegador: `https://wa.me/573001234567`

### Problema: "Module not found" en build

```bash
# Limpia caché
rm -rf node_modules dist
npm install
npm run build
```

### Problema: CSS no aplica en producción

- Verifica que los imports en `src/styles/main.css` son correctos
- Ejecuta `npm run build` nuevamente
- Limpia caché del navegador (`Ctrl+Shift+Del`)

---

## 📚 Recursos Útiles

- **Vite Docs**: https://vitejs.dev
- **CSS Tricks**: https://css-tricks.com
- **WebAIM**: https://webaim.org (accesibilidad)
- **Can I Use**: https://caniuse.com (compatibilidad)
- **MDN Web Docs**: https://developer.mozilla.org

---

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados © 2024 Distribuidora de Carne Braza.

---

## 🤝 Soporte

Para preguntas o problemas:

1. **Email**: dev@tuempresa.com
2. **WhatsApp**: +57 300 123 4567
3. **Teléfono**: +57 300 123 4567

---

**¡Gracias por usar Braza!** 🥩
