// Configuración de WhatsApp y utilidades
export const whatsappConfig = {
  // CAMBIAR: Tu número de WhatsApp (sin + ni espacios)
  phoneNumber: '573001234567',
  baseUrl: 'https://wa.me'
}

export const generateWhatsappLink = (message) => {
  const encoded = encodeURIComponent(message)
  return `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encoded}`
}

export const generateQuoteMessage = () => {
  const defaultMsg = 'Hola, me interesa solicitar una cotización de productos de Braza'
  return generateWhatsappLink(defaultMsg)
}

export const generateFormMessage = (data) => {
  const { name, phone, product, message } = data
  const fullMessage = `*Nueva cotización desde web:*
👤 Nombre: ${name}
📱 Teléfono: ${phone}
🥩 Producto de interés: ${product}
💬 Mensaje: ${message}`
  return generateWhatsappLink(fullMessage)
}

export const openWhatsapp = (message) => {
  const link = generateWhatsappLink(message)
  window.open(link, '_blank')
}

export const openWhatsappWithForm = (formData) => {
  const link = generateFormMessage(formData)
  window.open(link, '_blank')
}
