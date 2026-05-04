# ⚡ Guía Rápida - Braza Landing Page

## 1️⃣ Primeros Pasos (5 minutos)

### Instalar y ejecutar localmente

```bash
# 1. Entra a la carpeta del proyecto
cd braza-landing

# 2. Instala dependencias
npm install

# 3. Inicia servidor de desarrollo
npm run dev

# ✅ Se abrirá automáticamente en http://localhost:3000
```

## 2️⃣ Cambios Esenciales ANTES de Publicar

### A. Tu número de WhatsApp

**Archivo:** `src/utils/whatsapp.js` (línea 4)

```javascript
export const whatsappConfig = {
  phoneNumber: 'TU_NUMERO_AQUI',  // Ejemplo: 573001234567 (sin +, sin espacios)
  baseUrl: 'https://wa.me'
}
```

**Luego busca en `index.html` y reemplaza todos los `573001234567` por tu número.**

### B. Tu dominio

**Buscar:** `https://www.tudominio.com`  
**Reemplazar:** `https://www.tudominio.com` (cambiar por tu dominio real)

**Archivos:**
- `index.html` - Meta tags y enlaces
- `public/robots.txt`
- `public/sitemap.xml`
- `vercel.json` (si usas Vercel)
- `nginx.conf` (si usas Nginx)

### C. Tu email

**Buscar:** `ventas@brazacarne.com`  
**Reemplazar:** tu email real

**Archivos:**
- `index.html`
- `public/humans.txt`

### D. Tu ubicación

**En `index.html`, busca:**

```html
<p style="font-size: var(--font-size-lg);">
  📍 Calle principal #123<br>
  Tu ciudad, Departamento<br>
  Colombia
</p>
```

## 3️⃣ Compilar para Producción

```bash
# Genera carpeta 'dist' lista para publicar
npm run build

# Previsualizar la build
npm run preview
```

## 4️⃣ Publicar

### Opción A: Vercel (Recomendado - 2 minutos)

```bash
npm i -g vercel
vercel
```

Sigue los prompts. ¡Listo! Te dará una URL automáticamente.

### Opción B: Netlify (También fácil)

1. Sube el proyecto a GitHub
2. Entra a [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Selecciona tu repo
5. Build: `npm run build`
6. Publish: `dist`
7. ¡Listo!

### Opción C: Tu servidor (Apache/Nginx)

```bash
# 1. Compila
npm run build

# 2. Sube carpeta 'dist' a tu servidor web
# 3. Configura .htaccess (Apache) o nginx.conf (Nginx)
```

## 5️⃣ Editar Contenido

### Cambiar texto de secciones

Todo está en `index.html`. Busca por secciones:
- "HERO SECTION" - Párrafo principal
- "QUIÉNES SOMOS" - Texto sobre la empresa
- "CONTACTO" - Información de contacto

### Cambiar colores

**Archivo:** `src/styles/tokens.css` (línea 5-17)

```css
--color-gold: #d4a373;           /* Cambiar a tu color */
--color-fire: #d84315;           /* Color fuego */
--color-meat: #8b0000;           /* Rojo carne */
```

### Agregar/editar productos

**Archivo:** `src/data/products.js`

```javascript
carneFreska: [
  { id: 1, name: 'Bistec de res', category: 'carneFreska' },
  { id: 2, name: 'Tu producto aquí', category: 'carneFreska' },
  // ...
]
```

## 6️⃣ Funcionalidades Clave

✅ **Navegación móvil** - Hamburguesa automática en pantallas pequeñas  
✅ **Productos en tabs** - Desktop con tabs, móvil con acordeones  
✅ **WhatsApp integrado** - Todos los botones abren chat directo  
✅ **Formulario a WhatsApp** - El formulario de contacto envía datos armados  
✅ **SEO automático** - Meta tags, Open Graph, Structured Data  
✅ **PWA ready** - Se puede instalar como app en móviles  

## 7️⃣ Recursos

📖 README Completo: Ver `README.md`  
🎨 Colores: `src/styles/tokens.css`  
📦 Productos: `src/data/products.js`  
⚙️ WhatsApp: `src/utils/whatsapp.js`  

## 8️⃣ Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| Port 3000 en uso | `npm run dev` en otro puerto |
| Cambios no se ven | `npm run dev` nuevamente |
| WhatsApp no abre | Verifica número: `573001234567` (sin +) |
| Build no funciona | `rm -rf node_modules dist && npm install && npm run build` |

## 📞 Contacto

- **WhatsApp**: +57 300 123 4567 (Tu número)
- **Email**: ventas@brazacarne.com (Tu email)
- **Web**: https://www.tudominio.com (Tu dominio)

---

**¡Listo para lanzar!** 🚀
