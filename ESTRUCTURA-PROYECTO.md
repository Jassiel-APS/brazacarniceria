# 📁 Estructura del Proyecto - Explicación Detallada

```
braza-landing/
│
├─ 📄 index.html ........................ HTML principal (EDITAR AQUÍ)
├─ 📄 package.json ...................... Dependencias Node.js
├─ 📄 vite.config.js .................... Configuración de Vite (build tool)
├─ 📄 .gitignore ....................... Archivos a ignorar en Git
│
├─ 📚 DOCUMENTACIÓN
│  ├─ README.md ....................... Documentación completa (LEER PRIMERO)
│  ├─ QUICK-START.md .................. Guía rápida de 5 minutos
│  ├─ CHECKLIST-PUBLICACION.md ........ Checklist antes de publicar
│  └─ CAMBIOS-IMPORTANTES.txt ......... Cambios prioritarios (LEER AHORA)
│
├─ 🚀 PUBLICACIÓN
│  ├─ vercel.json ..................... Configuración para Vercel (EDITAR)
│  ├─ netlify.toml .................... Configuración para Netlify (EDITAR)
│  ├─ nginx.conf ...................... Configuración para Nginx (EDITAR)
│  └─ .htaccess ....................... Configuración para Apache (EDITAR)
│
├─ 📂 public/ ........................... Archivos públicos (no se procesan)
│  │
│  ├─ 🤖 SEO & METADATOS
│  │  ├─ robots.txt .................. Instrucciones para buscadores (EDITAR)
│  │  ├─ sitemap.xml ................. Mapa del sitio (EDITAR)
│  │  ├─ site.webmanifest ............ Manifest para PWA (EDITAR)
│  │  └─ humans.txt .................. Información del equipo (EDITAR)
│  │
│  ├─ 🔒 SEGURIDAD
│  │  ├─ _headers .................... Headers HTTP para Vercel/Netlify
│  │  ├─ _redirects .................. Redirecciones para Netlify
│  │  └─ .well-known/
│  │     └─ security.txt ............ Política de seguridad
│  │
│  ├─ 🎨 ASSETS
│  │  ├─ favicon.svg ................. Logo en pestaña del navegador (PERSONALIZAR)
│  │  └─ images/
│  │     ├─ placeholders/ ........... (usar emojis por ahora)
│  │     ├─ og-image.png ............ Imagen para redes sociales (AGREGAR)
│  │     └─ ... (agregar tus imágenes aquí)
│  │
│
├─ 📂 src/ ............................. Código fuente (procesado por Vite)
│  │
│  ├─ 🎯 main.js ....................... Punto de entrada JavaScript (LÓGICA PRINCIPAL)
│  │                              • Navegación móvil (hamburguesa)
│  │                              • Renderizado de productos (tabs/acordeones)
│  │                              • Formulario de cotización
│  │                              • Scroll suave
│  │
│  ├─ 📂 data/
│  │  └─ products.js ................. Base de datos de productos (EDITAR)
│  │                              • 40 productos por categoría
│  │                              • 6 productos destacados
│  │                              • Etiquetas de categorías
│  │
│  ├─ 📂 utils/
│  │  └─ whatsapp.js ................. Integración con WhatsApp (EDITAR)
│  │                              • Número de teléfono
│  │                              • Generador de mensajes
│  │                              • Abrir WhatsApp con datos
│  │
│  └─ 📂 styles/
│     ├─ main.css ................... Archivo principal (solo imports)
│     ├─ tokens.css ................. Variables CSS - EDITAR AQUÍ PARA COLORES
│     │                           • Colores (oro, fuego, carne, etc)
│     │                           • Tipografía
│     │                           • Espaciado
│     │                           • Sombras y bordes
│     ├─ base.css ................... Estilos globales
│     │                           • Reset CSS
│     │                           • Headings, párrafos
│     │                           • Inputs, buttons
│     │                           • Scrollbar personalizado
│     ├─ layout.css ................. Grid, Flexbox, contenedores
│     │                           • Sistema de grilla
│     │                           • Utilitarios flex
│     │                           • Espaciado (margin, padding)
│     ├─ components.css ............. Componentes reutilizables
│     │                           • Header y navegación
│     │                           • Botones (primario, secundario, etc)
│     │                           • Tarjetas (cards)
│     │                           • Tabs y acordeones
│     │                           • Formulario
│     │                           • Footer
│     └─ responsive.css ............. Media queries y breakpoints
│                                • Mobile first approach
│                                • Breakpoints: 576px, 768px, 992px, 1200px
│                                • Touch devices
│                                • Reducir animaciones
│
└─ 📂 dist/ (se genera con "npm run build")
   ├─ index.html .................... HTML minimificado
   ├─ js/ ........................... JavaScript compilado (con hash)
   ├─ css/ .......................... CSS compilado (con hash)
   ├─ images/ ....................... Imágenes optimizadas
   └─ robots.txt, sitemap.xml, etc. Archivos públicos copiados
```

## 🎯 Dónde Editar Cada Cosa

| Necesidad | Archivo | Línea |
|-----------|---------|-------|
| Cambiar número WhatsApp | `src/utils/whatsapp.js` | 4 |
| Cambiar dominio | Múltiples (ver CAMBIOS-IMPORTANTES.txt) | - |
| Editar texto general | `index.html` | Buscar con Ctrl+F |
| Cambiar colores | `src/styles/tokens.css` | 5-17 |
| Editar productos | `src/data/products.js` | 2-60 |
| Cambiar tipografía | `src/styles/tokens.css` | 19 |
| Agregar favicon | `public/favicon.svg` | Reemplazar archivo |
| SEO meta tags | `index.html` | <head> |
| Open Graph | `index.html` | <head> |

## 🔄 Flujo de Desarrollo

```
1. Editar archivos en src/ y public/
   ↓
2. npm run dev (se recompila automáticamente)
   ↓
3. Ver cambios en http://localhost:3000 (en vivo)
   ↓
4. Cuando todo esté listo: npm run build
   ↓
5. Revisar en npm run preview
   ↓
6. Subir carpeta dist/ a Vercel/Netlify/servidor
   ↓
7. ¡En producción! 🚀
```

## 📦 Sistema de Colores

Todos definidos en `src/styles/tokens.css`:

```css
--color-charcoal: #1a1a1a;      /* Fondo principal (negro) */
--color-charcoal-light: #2a2a2a  /* Fondo secundario */
--color-wood: #3d2817;           /* Café madera */
--color-gold: #d4a373;           /* Dorado (destacado) */
--color-gold-light: #e5b88a;     /* Dorado claro */
--color-fire: #d84315;           /* Fuego/Naranja (botones) */
--color-fire-light: #ff6e40;     /* Fuego claro */
--color-meat: #8b0000;           /* Rojo carne */
--color-white: #fafaf8;          /* Blanco cálido */
```

## 🎯 Sistema de Tipografía

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, sans-serif

Tamaños:
--font-size-xs: 0.75rem       (12px)
--font-size-sm: 0.875rem      (14px)
--font-size-base: 1rem        (16px)
--font-size-lg: 1.125rem      (18px)
--font-size-xl: 1.25rem       (20px)
--font-size-2xl: 1.5rem       (24px)
--font-size-3xl: 1.875rem     (30px)
--font-size-4xl: 2.25rem      (36px)
--font-size-5xl: 3rem         (48px)
```

## 📱 Breakpoints Responsivos

```css
Mobile: < 768px
Tablet: 768px - 991px
Desktop: 992px - 1199px
Large: 1200px+
```

## ✨ Características JavaScript

| Característica | Archivo | Función |
|---------------|---------|---------|
| Menú móvil | main.js | `initNavigation()` |
| Tabs de productos | main.js | `renderProductTabs()` |
| Acordeones móvil | main.js | `renderMobileAccordion()` |
| Productos destacados | main.js | `renderFeaturedProducts()` |
| Formulario WhatsApp | main.js | `setupFormListener()` |
| Scroll suave | main.js | Automático |
| Animaciones de scroll | main.js | `IntersectionObserver` |
| Header dinámico | main.js | `scroll event` |

---

**¿Tienes dudas?** 🤔  
Lee `README.md` para documentación completa o `QUICK-START.md` para empezar rápido.
