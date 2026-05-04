// Productos organizados por categoría
export const products = {
  carneFreska: [
    { id: 1, name: 'Bistec de res', category: 'carneFreska' },
    { id: 2, name: 'Carne molida de res', category: 'carneFreska' },
    { id: 3, name: 'Carne para hamburguesa', category: 'carneFreska' },
    { id: 4, name: 'Milanesa de res', category: 'carneFreska' },
    { id: 5, name: 'Costilla de res', category: 'carneFreska' },
    { id: 6, name: 'Falda de res', category: 'carneFreska' },
    { id: 7, name: 'Chambarete', category: 'carneFreska' },
    { id: 8, name: 'Suadero', category: 'carneFreska' },
    { id: 9, name: 'Cecina', category: 'carneFreska' },
    { id: 10, name: 'Arrachera', category: 'carneFreska' }
  ],
  cerdo: [
    { id: 11, name: 'Chuleta de cerdo', category: 'cerdo' },
    { id: 12, name: 'Costilla de cerdo', category: 'cerdo' },
    { id: 13, name: 'Lomo de cerdo', category: 'cerdo' },
    { id: 14, name: 'Pierna de cerdo', category: 'cerdo' },
    { id: 15, name: 'Milanesa de cerdo', category: 'cerdo' },
    { id: 16, name: 'Espaldilla', category: 'cerdo' },
    { id: 17, name: 'Chamorro', category: 'cerdo' },
    { id: 18, name: 'Tocino', category: 'cerdo' },
    { id: 19, name: 'Chicharrón prensado', category: 'cerdo' },
    { id: 20, name: 'Manteca', category: 'cerdo' }
  ],
  marinados: [
    { id: 21, name: 'Arrachera marinada', category: 'marinados' },
    { id: 22, name: 'Carne enchilada', category: 'marinados' },
    { id: 23, name: 'Carne al pastor', category: 'marinados' },
    { id: 24, name: 'Cecina enchilada', category: 'marinados' },
    { id: 25, name: 'Costilla marinada', category: 'marinados' },
    { id: 26, name: 'Carne adobada', category: 'marinados' },
    { id: 27, name: 'Brochetas', category: 'marinados' },
    { id: 28, name: 'Alambre de res', category: 'marinados' },
    { id: 29, name: 'Alambre de pollo', category: 'marinados' },
    { id: 30, name: 'Fajitas preparadas', category: 'marinados' }
  ],
  embutidos: [
    { id: 31, name: 'Chorizo ranchero', category: 'embutidos' },
    { id: 32, name: 'Chorizo para asar', category: 'embutidos' },
    { id: 33, name: 'Chistorra', category: 'embutidos' },
    { id: 34, name: 'Longaniza', category: 'embutidos' },
    { id: 35, name: 'Chuleta ahumada', category: 'embutidos' },
    { id: 36, name: 'Tocino ahumado', category: 'embutidos' }
  ],
  complementos: [
    { id: 37, name: 'Queso Oaxaca', category: 'complementos' },
    { id: 38, name: 'Queso manchego', category: 'complementos' },
    { id: 39, name: 'Carbón', category: 'complementos' },
    { id: 40, name: 'Salmón empacado al vacío', category: 'complementos' }
  ]
}

export const categoryLabels = {
  carneFreska: 'Carne Fresca y Cortes',
  cerdo: 'Cerdo',
  marinados: 'Marinados y Preparados',
  embutidos: 'Embutidos y Ahumados',
  complementos: 'Complementos'
}

export const featuredProducts = [
  { id: 21, name: 'Arrachera marinada', emoji: '🔥', desc: 'Ideal para asados' },
  { id: 3, name: 'Carne para hamburguesa', emoji: '🍔', desc: 'Premium molida' },
  { id: 31, name: 'Chorizo ranchero', emoji: '🌶️', desc: 'Artesanal' },
  { id: 35, name: 'Chuleta ahumada', emoji: '💨', desc: 'Con sabor ahumado' },
  { id: 9, name: 'Cecina', emoji: '🥓', desc: 'Tradicional' },
  { id: 36, name: 'Tocino ahumado', emoji: '🔥', desc: 'Premium ahumado' }
]
