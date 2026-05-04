# 📋 Checklist de Publicación - Braza Landing

Usa este checklist antes de publicar en producción.

## 🔧 Configuración Local

- [ ] Instalé dependencias: `npm install`
- [ ] Probé localmente: `npm run dev`
- [ ] La landing se ve bien en móvil y desktop
- [ ] Todos los botones de WhatsApp funcionan
- [ ] El formulario envía datos correctamente

## 📝 Cambios de Contenido Esenciales

### Contacto

- [ ] Cambié número de WhatsApp en `src/utils/whatsapp.js`
- [ ] Cambié número de WhatsApp en todos los enlaces de `index.html`
- [ ] Cambié email de contacto
- [ ] Cambié dirección física/ubicación
- [ ] Cambié teléfono

### Dominio

- [ ] Cambié `https://www.tudominio.com` por mi dominio real en:
  - [ ] `index.html`
  - [ ] `public/robots.txt`
  - [ ] `public/sitemap.xml`
  - [ ] `vercel.json`
  - [ ] `netlify.toml`
  - [ ] `nginx.conf`
  - [ ] `.htaccess`

### Contenido

- [ ] Cambié textos genéricos por información real
- [ ] Actualicé el Structured Data (JSON-LD) con datos correctos
- [ ] Cambié texto de "Nosotros" si es necesario
- [ ] Revisé toda la información de contacto

### SEO

- [ ] Meta description es atractiva y concisa
- [ ] Meta tags de Open Graph están actualizados
- [ ] Favicon está personalizado
- [ ] Sitemap.xml tiene URLs correctas

## 🖼️ Recursos Visuales

- [ ] Subí favicon.svg personalizado
- [ ] (Opcional) Subí imágenes reales en `public/images/`
- [ ] (Opcional) Actualizé og-image.png para redes sociales
- [ ] Las imágenes están optimizadas (< 100KB cada una)

## 🧪 Testing Pre-Publicación

- [ ] Navegación funciona en móvil y desktop
- [ ] Todos los links funcionan
- [ ] WhatsApp abre correctamente
- [ ] Formulario se envía correctamente
- [ ] No hay errores en consola (F12 → Console)
- [ ] Pasé test de [Google PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Verificé accesibilidad con [WAVE](https://wave.webaim.org)

## 🚀 Compilación

- [ ] Compilé: `npm run build`
- [ ] Carpeta `dist/` se creó correctamente
- [ ] Previsualicé con: `npm run preview`

## 📦 Publicación

### Opción Vercel

- [ ] Creé cuenta en [vercel.com](https://vercel.com)
- [ ] Conecté repositorio Git (o usé `vercel` CLI)
- [ ] Configuré variables de entorno si aplica
- [ ] Agregué dominio personalizado
- [ ] SSL está activo

### Opción Netlify

- [ ] Creé cuenta en [netlify.com](https://netlify.com)
- [ ] Conecté repositorio Git
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Agregué dominio personalizado
- [ ] SSL está activo (automático)

### Opción Servidor Propio

- [ ] Subí carpeta `dist/` al servidor
- [ ] Configuré `.htaccess` (si es Apache)
- [ ] Configuré `nginx.conf` (si es Nginx)
- [ ] SSL está activo con certificado válido
- [ ] URLs se reescriben correctamente

## 🔒 Seguridad

- [ ] HTTPS está activo
- [ ] Headers de seguridad están configurados
- [ ] No hay datos sensibles en código
- [ ] `.env.local` está en `.gitignore`
- [ ] No hay archivos sensibles en `public/`

## 📱 Testing Final en Producción

- [ ] Visité https://www.tudominio.com en navegador
- [ ] Mobile: iPhone SE (pequeño)
- [ ] Mobile: iPhone 12 (mediano)
- [ ] Mobile: Samsung Galaxy (Android)
- [ ] Desktop: Chrome
- [ ] Desktop: Firefox
- [ ] Desktop: Safari
- [ ] Todos los botones funcionan
- [ ] Formulario funciona
- [ ] Imágenes se cargan correctamente
- [ ] No hay errores en consola

## 🔍 SEO y Indexación

- [ ] Subí `robots.txt` (público accesible)
- [ ] Subí `sitemap.xml` (público accesible)
- [ ] Agregué a [Google Search Console](https://search.google.com/search-console)
- [ ] Verificué propiedad del dominio
- [ ] Enviés sitemap.xml
- [ ] Esperé 24-48 horas para indexación
- [ ] Verifiqué que la página aparece en Google

## 📊 Analytics (Opcional)

- [ ] Agregué Google Analytics ID
- [ ] Agregué Google Tag Manager (si aplica)
- [ ] Configuré objetivos/eventos importantes
- [ ] Verificé que se registran datos

## 📧 Notificaciones (Opcional)

- [ ] WhatsApp recibirá mensajes automáticamente
- [ ] Email configurado para recibir notificaciones
- [ ] Agregué integración con Zapier/IFTTT si es necesario

## 🎯 Post-Publicación

- [ ] Compartí URL en redes sociales
- [ ] Agregué a Mi Negocio de Google
- [ ] Agregué a Facebook Business
- [ ] Probé que Open Graph funciona (link preview)
- [ ] Recibí primer mensaje de prueba en WhatsApp

## 📞 Monitoreo

- [ ] Verifico emails diarios
- [ ] Reviso WhatsApp regularmente
- [ ] Checkeo analytics semanalmente
- [ ] Respondo consultas en < 24 horas

## 🔄 Mantenimiento

- [ ] Actualizo productos cuando cambian
- [ ] Actualizo precios si aplica
- [ ] Reviso y respondo cotizaciones
- [ ] Backup de cambios en Git

---

**Fecha de publicación:** _______________  
**Dominio:** _______________  
**Por:** _______________  

✅ **Checklist completado: Listo para publicar**
