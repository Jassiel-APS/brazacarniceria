# 🎨 Vista Previa de Secciones - Braza Landing

Este documento describe cómo se ve cada sección y dónde encontrarla en el código.

## 📱 Vista General (Mobile First)

```
┌─────────────────────┐
│      HEADER         │  ← Sticky, color oscuro, logo dorado
│ 🥩 BRAZA  [☰ Menu] │
├─────────────────────┤
│                     │
│      HERO HERO      │  ← Fondo con gradiente oscuro/fuego
│  "Calidad y        │     • Título grande (color blanco)
│   frescura en      │     • Subtítulo (gris)
│   cada corte"      │     • 2 botones destacados
│                     │
│  [Cotizar] [Ver]   │
│                     │
├─────────────────────┤
│  BENEFICIOS RÁPIDOS │  ← 4 bloques con iconos
│  ❄️ Carne Fresca   │
│  📦 Al Vacío       │
│  🔪 Variedad       │
│  👥 Personalizado  │
├─────────────────────┤
│   QUIÉNES SOMOS     │  ← Imagen izquierda, texto derecha
│  [Imagen] Texto    │     (responsive)
│                     │
├─────────────────────┤
│ CÓMO HACER PEDIDO   │  ← 3 pasos numerados
│  1️⃣ 2️⃣ 3️⃣         │
│  Elige Solicita Recibe
├─────────────────────┤
│  NUESTROS PRODUCTOS │  ← Acordeón (móvil)
│  ▼ Carne Fresca     │     Tabs (desktop)
│    - Bistec         │
│    - Molida         │
│  ▶ Cerdo            │
│  ▶ Embutidos        │
│  ▶ Marinados        │
├─────────────────────┤
│ DESTACADOS          │  ← Mosaico de 6 productos
│ [Prod1] [Prod2]    │
│ [Prod3] [Prod4]    │
│ [Prod5] [Prod6]    │
├─────────────────────┤
│ IDEAL PARA ASADOS   │  ← Texto grande + imagen
│ [Imagen] Parrafo   │
├─────────────────────┤
│ POR QUÉ ELEGIR      │  ← 4 beneficios grandes
│ 📦 📞 ⚡ ⭐       │
├─────────────────────┤
│ CONTACTO COTIZACIÓN │  ← Información + Formulario
│ 📞 WhatsApp         │
│ 📧 Email            │
│ 📍 Ubicación        │
│                     │
│ [Formulario]        │
│ Nombre Phone etc    │
├─────────────────────┤
│       FOOTER        │  ← Negro oscuro, texto gris
│ 🥩 BRAZA            │
│ © 2024              │
│ Política Links      │
└─────────────────────┘
```

## 🖥️ Vista General (Desktop - 1200px+)

```
┌────────────────────────────────────────────────────┐
│  🥩 BRAZA  │ Inicio Nosotros Productos... │ [Cotizar]
├────────────────────────────────────────────────────┤
│                                                    │
│  HERO SECTION (Full Height)                       │
│  ┌──────────────────────────┬────────────────────┐
│  │ Calidad y frescura       │  🔥 Visual        │
│  │ en cada corte            │                    │
│  │                          │  Imagen           │
│  │ Subtítulo aquí...        │  Dinámica         │
│  │                          │                    │
│  │ [Cotizar] [Ver]          │                    │
│  └──────────────────────────┴────────────────────┘
│
│ BENEFICIOS EN 4 COLUMNAS
│ ┌──────────┬──────────┬──────────┬──────────┐
│ │❄️Carne   │📦Vacío   │🔪Variedad│👥Contacto
│ │Fresca    │          │          │          │
│ └──────────┴──────────┴──────────┴──────────┘
│
│ QUIÉNES SOMOS
│ ┌──────────────────────────────────────────────┐
│ │  Imagen        │  Título Grande            │
│ │  (250x400)     │  "Tu proveedor confiable" │
│ │                │  Párrafo largo            │
│ │                │  ✓ Punto 1                │
│ │                │  ✓ Punto 2                │
│ └──────────────────────────────────────────────┘
│
│ CÓMO HACER PEDIDO - 3 COLUMNAS
│ ┌──────────┬──────────┬──────────┐
│ │1️⃣ Elige │2️⃣Solicita│3️⃣ Recibe │
│ │Tus      │Cotización│Atención │
│ │Productos│         │Persona. │
│ └──────────┴──────────┴──────────┘
│
│ PRODUCTOS - TABS + GRID 4 COLUMNAS
│ [Carne Fresca] [Cerdo] [Marinados] [Embutidos] [Complementos]
│ ┌────────┬────────┬────────┬────────┐
│ │ Bistec │ Molida │ Milanesa│ Costilla
│ └────────┴────────┴────────┴────────┘
│ ┌────────┬────────┬────────┬────────┐
│ │ Falda  │ Chamb. │ Suadero│ Cecina
│ └────────┴────────┴────────┴────────┘
│
│ DESTACADOS - MOSAICO (1 GRANDE + 5 PEQUEÑOS)
│ ┌─────────────────┬────────┬────────┐
│ │  ARRACHERA      │ Carne  │ Chorizo│
│ │  MARINADA (BIG) │ Hambur.│Ranchero
│ │                 │        │        │
│ ├─────────────────┼────────┼────────┤
│ │ Ahumada│ Cecina│ Salmón │
│ │ Chuleta│       │Al Vacío│
│ └────────┴────────┴────────┘
│
│ IDEAL PARA ASADOS
│ ┌───────────────────────┬──────────┐
│ │ Título Grande         │  Imagen  │
│ │ Párrafo               │  🍗      │
│ │ • Punto 1             │          │
│ │ • Punto 2             │          │
│ │ • Punto 3             │          │
│ └───────────────────────┴──────────┘
│
│ POR QUÉ ELEGIR BRAZA - 4 COLUMNAS
│ ┌────────┬────────┬────────┬────────┐
│ │ 📦 Var │💬 Aten │⚡ Prac │⭐Calid│
│ │ Produc │ Directa│ Practi │ Enfoque
│ └────────┴────────┴────────┴────────┘
│
│ CONTACTO / COTIZACIÓN - DOS COLUMNAS
│ ┌────────────────────┬────────────────────┐
│ │ INFO CONTACTO      │ FORMULARIO         │
│ │ 💬 WhatsApp        │ [Nombre]           │
│ │ 📱 Teléfono        │ [Teléfono]         │
│ │ 📧 Email           │ [Producto]         │
│ │ 📍 Ubicación       │ [Mensaje]          │
│ │                    │ [Enviar por WA]    │
│ └────────────────────┴────────────────────┘
│
├────────────────────────────────────────────────────┤
│  FOOTER                                            │
│  🥩 BRAZA  │ Links  │ Contacto  │ Legal  │ Social
└────────────────────────────────────────────────────┘
```

## 🎨 Paleta de Colores en Acción

```
FONDO PRINCIPAL
■ #1a1a1a (Charcoal oscuro)
    ↓ Sub-fondos
    ■ #2a2a2a (Charcoal light)
    ■ #3d2817 (Wood café)

DESTACADOS
■ #d4a373 (Gold dorado) ← Botones primarios, títulos importantes
■ #d84315 (Fire naranja) ← Botones de acción, CTA
■ #8b0000 (Meat rojo) ← Detalles

TEXTO
■ #fafaf8 (White cálido) ← Texto principal
■ #a0a0a0 (Gray) ← Texto secundario

GRADIENTES
■ Gold → Fire (en títulos y bordes)
■ Charcoal → Charcoal Light (fondos alternados)
```

## 🎯 Interactividad

### En Desktop (Hover)

```
Botón Primary (Dorado):
  Normal: Background dorado, texto oscuro
  Hover: Background más claro, sombra aumenta, sube 2px

Botón Secondary (Borde):
  Normal: Fondo transparente, borde dorado
  Hover: Fondo dorado, texto oscuro

Tarjeta:
  Normal: Borde gris suave
  Hover: Borde dorado, sube 8px, sombra grande

Link de navegación:
  Normal: Texto blanco
  Hover: Texto dorado + línea subrayada se anima
```

### En Móvil (Active)

```
Botón:
  Normal: Activo
  Active (toque): Color más intenso, sin transición suave

Hamburguesa:
  Click: Abre menú modal (overlay oscuro)
  Click nuevamente: Cierra menú

Tabs de productos:
  Solo en Desktop (visible)

Acordeones:
  Solo en Móvil (visible)
  Click: Expande/contrae con animación
```

## 📐 Dimensiones Importantes

```
Max Width de contenedor: 1400px

Header: 
  Height: ~70px (en desktop)
  Sticky: Sí

Hero:
  Min Height: 100vh (viewport height)
  En móvil: ajusta automáticamente

Card/Tarjeta:
  Desktop: Auto (grid auto-fit)
  Móvil: 100% width

Imagen hero:
  Desktop: Visible, ~500px
  Móvil: Visible, ~300px

Gap entre elementos: 
  Xs: 8px
  Sm: 16px
  Md: 32px
  Lg: 48px
```

## ✨ Animaciones

```
Transiciones generales:
  - Rápido: 150ms
  - Normal: 250ms
  - Lento: 350ms

Efectos:
  - Hover: Color + Sombra + Transform (translateY)
  - Scroll: Fade-in de elementos (Intersection Observer)
  - Header: Cambia opacidad al scrollear

Accesibilidad:
  - Si prefers-reduced-motion: Sin animaciones
  - Toda navegación accesible con teclado
  - Aria-labels en elementos interactivos
```

## 📊 Jerarquía Visual

```
Más importante
    ↓
    H1 (Hero title) .......................... 48px, Bold, Gold gradient
    ↓
    H2 (Section titles) ..................... 36px, Bold, Gold
    ↓
    H3 (Subsection) ......................... 30px, Bold
    ↓
    H4 (Card titles) ........................ 20px, Bold, Gold
    ↓
    H5 (Small titles) ....................... 18px, Bold
    ↓
    P (Body text) ........................... 16px, Normal, White
    ↓
    Small (Muted) ........................... 14px, Gray
    ↓
Menos importante
```

---

**¡Esta landing está diseñada para convertir visitantes en clientes!** 🚀
