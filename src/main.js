import { products, categoryLabels, featuredProducts } from './data/products.js'
import { generateFormMessage, openWhatsappWithForm } from './utils/whatsapp.js'

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  renderProductTabs()
  renderMobileAccordion()
  renderFeaturedProducts()
  setupFormListener()
})

// ========================================
// NAVEGACIÓN MÓVIL
// ========================================

function initNavigation() {
  const navToggle = document.getElementById('navToggle')
  const mainNav = document.getElementById('mainNav')

  navToggle.addEventListener('click', () => {
    const isActive = mainNav.classList.toggle('active')
    navToggle.setAttribute('aria-expanded', isActive)
  })

  // Cerrar menú al hacer clic en un enlace
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.nav-toggle')) {
      mainNav.classList.remove('active')
      navToggle.setAttribute('aria-expanded', 'false')
    }
  })
}

// ========================================
// RENDERIZADO DE PRODUCTOS - TABS (DESKTOP)
// ========================================

function renderProductTabs() {
  const tabsContainer = document.getElementById('productTabs')
  const contentContainer = document.getElementById('tabsContainer')

  // Crear botones de tabs
  Object.entries(categoryLabels).forEach(([key, label], index) => {
    const button = document.createElement('button')
    button.className = `tab-button ${index === 0 ? 'active' : ''}`
    button.textContent = label
    button.setAttribute('data-tab', key)
    button.setAttribute('aria-selected', index === 0)
    button.setAttribute('aria-label', `Mostrar productos de ${label}`)

    button.addEventListener('click', () => {
      // Actualizar botones activos
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active')
        btn.setAttribute('aria-selected', 'false')
      })
      button.classList.add('active')
      button.setAttribute('aria-selected', 'true')

      // Actualizar contenido
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active')
      })
      document.querySelector(`[data-content="${key}"]`).classList.add('active')
    })

    tabsContainer.appendChild(button)
  })

  // Crear contenido de tabs
  Object.entries(products).forEach(([key, items]) => {
    const content = document.createElement('div')
    content.className = `tab-content ${key === 'carneFreska' ? 'active' : ''}`
    content.setAttribute('data-content', key)
    content.setAttribute('role', 'tabpanel')
    content.setAttribute('aria-labelledby', `tab-${key}`)

    items.forEach(product => {
      const card = createProductCard(product)
      content.appendChild(card)
    })

    contentContainer.appendChild(content)
  })
}

// ========================================
// RENDERIZADO DE PRODUCTOS - ACORDEÓN (MÓVIL)
// ========================================

function renderMobileAccordion() {
  const accordion = document.getElementById('mobileAccordion')

  Object.entries(products).forEach(([ key, items ], index) => {
    const label = categoryLabels[key]
    const item = document.createElement('div')
    item.className = 'accordion-item'

    const button = document.createElement('button')
    button.className = 'accordion-button'
    button.setAttribute('aria-expanded', index === 0)
    button.setAttribute('aria-label', `Expandir ${label}`)
    button.innerHTML = `
      ${label}
      <span class="accordion-icon">▼</span>
    `

    const content = document.createElement('div')
    content.className = `accordion-content ${index === 0 ? 'active' : ''}`
    content.setAttribute('role', 'region')
    content.setAttribute('aria-labelledby', `accordion-${key}`)

    const body = document.createElement('div')
    body.className = 'accordion-body'

    items.forEach(product => {
      const productItem = document.createElement('div')
      productItem.style.cssText = `
        padding: var(--space-md) 0;
        border-bottom: 1px solid var(--border-color);
      `
      productItem.innerHTML = `
        <span style="color: var(--color-gold); font-weight: 600; display: block; margin-bottom: 4px;">
          ${product.name}
        </span>
      `
      body.appendChild(productItem)
    })

    button.addEventListener('click', () => {
      const isActive = content.classList.toggle('active')
      button.setAttribute('aria-expanded', isActive)
      button.classList.toggle('active')
    })

    content.appendChild(body)
    item.appendChild(button)
    item.appendChild(content)
    accordion.appendChild(item)
  })
}

// ========================================
// PRODUCTOS DESTACADOS
// ========================================

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts')

  featuredProducts.forEach((product, index) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.style.cssText = `
      ${index === 0 ? 'grid-column: span 2; grid-row: span 2;' : ''}
    `

    const imageHeight = index === 0 ? '300px' : '200px'
    const fontSize = index === 0 ? '120px' : '80px'

    card.innerHTML = `
      <div class="card-image" style="height: ${imageHeight}; font-size: ${fontSize};">
        ${product.emoji}
      </div>
      <h4 class="card-title">${product.name}</h4>
      <p class="card-text" style="margin-bottom: var(--space-lg);">${product.desc}</p>
      <a href="https://wa.me/573001234567?text=Me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}" class="btn btn-primary btn-sm">
        Solicitar
      </a>
    `

    container.appendChild(card)
  })
}

// ========================================
// CREAR TARJETA DE PRODUCTO
// ========================================

function createProductCard(product) {
  const card = document.createElement('div')
  card.className = 'card'
  
  card.innerHTML = `
    <div class="card-image">🥩</div>
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">Producto de calidad premium, disponible empacado al vacío.</p>
    <a href="https://wa.me/573001234567?text=Me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}" class="btn btn-primary btn-sm">
      Cotizar
    </a>
  `

  return card
}

// ========================================
// FORMULARIO DE COTIZACIÓN
// ========================================

function setupFormListener() {
  const form = document.getElementById('quoteForm')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      product: document.getElementById('product').value,
      message: document.getElementById('message').value.trim()
    }

    // Validación básica
    if (!formData.name || !formData.phone || !formData.product) {
      alert('Por favor completa todos los campos requeridos (*).')
      return
    }

    // Abrir WhatsApp con el mensaje
    openWhatsappWithForm(formData)

    // Resetear formulario
    form.reset()
    alert('¡Gracias! Te redirigiremos a WhatsApp con tu cotización.')
  })
}

// ========================================
// SCROLL SUAVE (navegación con anchor)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href !== '#') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  })
})

// ========================================
// OBSERVER PARA ANIMACIONES DE SCROLL
// ========================================

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.card, section').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    observer.observe(el)
  })
}

// ========================================
// SCROLL HEADER DINÁMICO
// ========================================

let lastScrollY = 0
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY

  if (scrollY > 100) {
    header.style.background = 'rgba(26, 26, 26, 0.98)'
    header.style.backdropFilter = 'blur(15px)'
  } else {
    header.style.background = 'rgba(26, 26, 26, 0.95)'
  }

  lastScrollY = scrollY
})

// ========================================
// PREFETCH DE ENLACES DE WHATSAPP
// ========================================

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      const link_tag = document.createElement('link')
      link_tag.rel = 'prefetch'
      link_tag.href = link.href
    })
  })
}

export { initNavigation, renderProductTabs, renderMobileAccordion }
