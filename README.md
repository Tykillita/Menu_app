# 🍽️ La Cocina de Anita - Sistema de Pedidos Online

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Una aplicación web **moderna y elegante** para pedidos de comida casera venezolana con integración directa a WhatsApp. ¡Experiencia de usuario premium con diseño oscuro y animaciones fluidas!

## 🌟 Características

### 🎨 Interfaz Premium
- **Diseño Dark Mode**: Estética moderna con gradientes elegantes
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales
- **Responsive Design**: Optimizado para móviles y desktop
- **UX Intuitiva**: Navegación paso a paso guiada

### 🍴 Sistema de Menús Múltiples
- **Menú Semanal**: Platos principales y comida tradicional
- **Menú de Salsas**: Salsas congeladas artesanales
- **Menú de Postres**: Dulces caseros venezolanos
- **Personalización Completa**: Cantidades y opciones flexibles
- **Múltiples Pedidos**: Combinar diferentes tipos de productos

### 📱 Integración WhatsApp
- **Envío Automático**: Formateo profesional del pedido
- **Datos Completos**: Cliente, dirección y detalles del pedido
- **Contacto Directo**: Comunicación inmediata con el restaurante
- **Plantilla Estructurada**: Mensaje organizado y fácil de leer

### 💳 Sistema de Pagos Múltiple
- **Efectivo**: Pago contra entrega
- **Transferencia Bancaria**: Banco General incluido
- **Yappy**: Pagos móviles instantáneos (6825-7958)
- **Información Visible**: Datos de pago siempre accesibles

## 📋 Requisitos del Sistema

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet para integración WhatsApp
- Dispositivo móvil o desktop
- WhatsApp instalado (para envío de pedidos)

## 🚀 Instalación

1. **Descarga los archivos:**
```bash
git clone https://github.com/tu-usuario/la-cocina-de-anita.git
cd la-cocina-de-anita
```

2. **Estructura de archivos necesaria:**
```
la-cocina-de-anita/
│
├── index.html                    # Aplicación principal
├── pictures/                     # Carpeta de imágenes
│   └── La cocina de anita logo cosido 2 (sin fondo).png
├── README.md                     # Este archivo
└── LICENSE                       # Licencia MIT
```

3. **Configurar las imágenes:**
- Agrega el logo del restaurante en la carpeta `pictures/`
- Asegúrate que el archivo se llame exactamente como está en el código

4. **Abrir la aplicación:**
```bash
# Opción 1: Abrir directamente
double-click en index.html

# Opción 2: Servidor local
python -m http.server 8000
# Luego ir a http://localhost:8000

# Opción 3: Live Server (VS Code)
Instalar extensión Live Server y hacer click derecho -> Open with Live Server
```

## 🎮 Cómo Usar

### Flujo de Pedido Completo:

#### 1. **Pantalla de Bienvenida** 🏠
- Logo animado con efecto pulsante
- **Menú de la Semana**: Platos principales
- **Menú de Salsas**: Salsas congeladas artesanales
- **Menú de Postres**: Dulces venezolanos caseros
- Enlaces directos a redes sociales
- Diseño elegante con gradientes

#### 2. **Selección por Tipo de Menú** 🍖

##### **Menú de la Semana:**
- **Pasta Linguini a la Bolognesa**: $4.00
- **Pabellón Criollo Venezolano**: $5.00
- **Hallacas Venezolanas**: Individual ($3.00) o Por Mayor ($2.50)

##### **Menú de Salsas Congeladas (24 oz):**
- **Salsa Bolognesa**: $5.00
- **Salsa Napoli**: $5.00

##### **Menú de Postres:**
- **Dulce de Maracuyá (Parchita)**: $2.00
- **Dulce de Limón**: $2.00

#### 3. **Personalización de Cantidades** 🔢
- **Selector Visual**: Botones + / - intuitivos
- **Límites Inteligentes**: Máximos según tipo de producto
- **Precios Dinámicos**: Cálculo automático en tiempo real
- **Validación**: Cantidades mínimas para productos especiales

#### 4. **Información del Pedido** 👤
- Especificar para quién es cada producto
- Útil para pedidos familiares o grupales
- Validación obligatoria del campo

#### 5. **Resumen y Confirmación** 📋
- Vista detallada de cada pedido
- Precio individual y total calculado
- Opción de agregar más productos
- **Selector de Tipo**: Permite mezclar menús diferentes

#### 6. **Datos del Cliente** 📝
- **Nombre completo**: Para personalización
- **Teléfono**: Coordinación de entrega
- **Dirección detallada**: Con referencias para delivery
- **Validación completa**: Campos obligatorios
- **Nota de Privacidad**: Datos solo para el pedido actual

#### 7. **Envío por WhatsApp** 📱
- Formato profesional automático
- Todos los datos organizados por tipo de producto
- Enlace directo a WhatsApp Business
- Mensaje listo para enviar

## 🍽️ Menú Completo Disponible

### Platos Principales (Menú Semanal):

#### 🍝 Pasta Linguini a la Bolognesa - $4.00
- Pasta linguini artesanal
- Salsa bolognesa casera
- Pan de ajo incluido
- Tajada de plátano

#### 🇻🇪 Pabellón Criollo Venezolano - $5.00
- **Arroz blanco** grano suelto
- **Carne mechada** deshebrada tradicional
- **Caraotas negras** (frijoles negros)
- **Tajadas de plátano** dulce
- Plato completo tradicional venezolano

#### 🫔 Hallacas Venezolanas
**Individual - $3.00 c/u (máximo 9)**
- Masa de maíz amarillo
- Guiso de carne, pollo y cerdo
- Aceitunas, pasas y alcaparras
- Envueltas en hoja de plátano

**Por Mayor - $2.50 c/u (mínimo 10)**
- Ideal para fiestas y reuniones
- Mismo sabor tradicional
- Precio especial por cantidad
- Perfectas para eventos familiares

### Salsas Congeladas Artesanales (24 oz):

#### 🍝 Salsa Bolognesa - $5.00
- Carne molida premium
- Tomate fresco y especias
- Listo para calentar
- Rinde para 4-6 porciones

#### 🍅 Salsa Napoli - $5.00
- Salsa tradicional italiana
- Base de tomate puro
- Sin conservantes artificiales
- Perfecta para pastas

### Postres Caseros Venezolanos:

#### 🥭 Dulce de Maracuyá (Parchita) - $2.00
- Fruta fresca venezolana
- Textura cremosa artesanal
- Sabor tropical auténtico
- Porción individual

#### 🍋 Dulce de Limón - $2.00
- Limones frescos seleccionados
- Preparación tradicional
- Dulce casero artesanal
- Porción individual

## 💳 Métodos de Pago

### Efectivo 💵
- Pago contra entrega
- Sin comisiones adicionales
- Cambio disponible
- Método tradicional

### Transferencia Bancaria 🏦
- **Banco**: Banco General
- **Tipo**: Cuenta de Ahorro
- **Número**: 04-20-99488149-0
- Enviar comprobante por WhatsApp

### Yappy 📱
- **Número**: 6825-7958
- Pago instantáneo
- Sin comisiones
- Confirmación automática

## 🏗️ Arquitectura del Código

### Funciones Principales:

#### Sistema de Menús Múltiples:
```javascript
// Funciones de apertura de menús
openMenu()           // Menú semanal
openSauceMenu()      // Salsas congeladas  
openDessertMenu()    // Postres caseros

// Variables de control
let isDessertMode = false;
let isSauceMode = false;
```

#### Gestión de Productos:
```javascript
selectDish(dishType)     // Platos principales
selectSauce(sauceType)   // Salsas congeladas  
selectDessert(dessertType) // Postres
selectHallacaOption(option) // Hallacas individual/mayor
```

#### Sistema de Cantidades:
```javascript
showQuantitySelector()   // Selector visual
changeQuantity(change)   // Incrementar/decrementar
confirmQuantity()        // Validar y continuar
```

#### Gestión de Pedidos Múltiples:
```javascript
addAnotherOrder()        // Agregar producto diferente
showOrderTypeSelector()  // Elegir tipo de menú
selectOrderType(type)    // Cambiar entre menús
```

### Estructuras de Datos:

#### `currentOrder` Object:
```javascript
{
    dishType: '',           // Tipo de producto
    protein: '',            // Variante específica
    side: '',              // Descripción completa
    hallacaOption: '',     // 'individual' | 'bulk'
    hallacaQuantity: 1,    // Para hallacas por mayor
    quantity: 1,           // Cantidad estándar
    ensalada: false,       // No aplicable para nuevos menús
    tajada: false,         // Solo para algunos platos
    forWho: ''            // Destinatario del pedido
}
```

#### Sistema de Precios Dinámico:
```javascript
function getCurrentPrice() {
    if (isSauceMode) return 5.00;
    if (isDessertMode) return 2.00;
    if (currentOrder.dishType === 'hallaca' && currentOrder.hallacaOption === 'individual') return 3.00;
    if (currentOrder.dishType === 'hallaca' && currentOrder.hallacaOption === 'bulk') return 2.50;
    if (currentOrder.dishType === 'pabellon') return 5.00;
    if (currentOrder.dishType === 'pasta-linguini') return 4.00;
    return 5.00; // Precio por defecto
}
```

### Optimizaciones Implementadas:

- **Navegación Contextual**: Pasos adaptativos según tipo de producto
- **Validación Inteligente**: Límites específicos por producto
- **Cálculo Dinámico**: Precios actualizados en tiempo real
- **UX Mejorada**: Información clara de precios y cantidades
- **Reset Inteligente**: Limpieza apropiada entre cambios de menú

## 🎨 Personalización de Estilos

### Colores Temáticos por Menú:
```css
/* Pabellón Venezolano */
background: linear-gradient(45deg, rgba(255,193,7,0.1), rgba(220,53,69,0.1));
border: 1px solid rgba(255,193,7,0.3);

/* Hallacas */
background: linear-gradient(45deg, rgba(255,215,0,0.1), rgba(139,69,19,0.1));
border: 1px solid rgba(255,215,0,0.3);

/* Pasta Linguini */
background: linear-gradient(45deg, rgba(139,69,19,0.1), rgba(160,82,45,0.1));
border: 1px solid rgba(139,69,19,0.3);

/* Colores principales mantenidos */
--primary-green: #228b22;
--accent-red: #c41e3a;
--info-blue: #4ecdc4;
--dark-bg: #1a1a1a;
```

### Elementos Visuales Mejorados:
- **Descripciones de Productos**: Información detallada bajo cada opción
- **Precios Destacados**: Colores distintivos para precios
- **Notas Informativas**: Cajas con información adicional
- **Gradientes Temáticos**: Colores según el tipo de comida

## 📱 Responsive Design

### Características Móviles Mejoradas:
- **Touch Targets Amplios**: Fácil navegación táctil
- **Scroll Suave**: Navegación fluida entre secciones
- **Textos Legibles**: Tamaños optimizados para móvil
- **Botones Responsivos**: Adaptación automática de tamaños

### Breakpoints Optimizados:
```css
@media (max-width: 480px) {
    .container { max-width: 100%; }
    .welcome-title { font-size: 2rem; }
    .logo { width: 150px; height: 150px; }
    .btn { min-width: 180px; padding: 12px 25px; }
    .text-input { padding: 12px; }
}
```

## 🔧 Configuración Personalizable

### Cambiar Información de Contacto:
```javascript
// WhatsApp Business
window.open('https://wa.me/50768257958', '_blank');

// Instagram
window.open('https://www.instagram.com/lacocinadeanita507/', '_blank');
```

### Modificar Precios por Producto:
```javascript
// En función getCurrentPrice()
if (isSauceMode) return 5.00;          // Salsas
if (isDessertMode) return 2.00;        // Postres  
if (dishType === 'pabellon') return 5.00;     // Pabellón
if (dishType === 'pasta-linguini') return 4.00; // Pasta
if (hallacaOption === 'individual') return 3.00; // Hallaca individual
if (hallacaOption === 'bulk') return 2.50;       // Hallaca por mayor
```

### Actualizar Datos de Pago:
```html
<!-- Yappy -->
<span>6825-7958</span>

<!-- Transferencia Bancaria -->
<div>Banco General</div>
<div>Cta. Ahorro</div>
<div>04-20-99488149-0</div>
```

### Agregar Nuevos Productos:
```javascript
// En setupInitialMenuSteps() agregar:
<button class="option-btn" onclick="selectDish('nuevo-plato')">
    🆕 Nuevo Plato
    <div style="font-size: 0.8rem; color: #ccc; margin-top: 5px;">
        Descripción del nuevo plato
    </div>
</button>
```

## 🐛 Solución de Problemas

### Logo no se muestra:
```bash
❌ Error: Logo no aparece

# Solución:
1. Verifica ruta: pictures/La cocina de anita logo cosido 2 (sin fondo).png
2. Confirma que el archivo existe y tiene el nombre exacto
3. Revisa las líneas que referencian la imagen
```

### Precios no se calculan correctamente:
```bash
❌ Error: Cálculos incorrectos

# Solución:
1. Verifica función getCurrentPrice()
2. Confirma que quantity se actualiza correctamente
3. Revisa multiplicaciones en updateOrderSummary()
```

### Menús no cambian correctamente:
```bash
❌ Error: No se cambia entre menús

# Solución:
1. Verifica variables isDessertMode y isSauceMode
2. Confirma que resetSteps() limpia correctamente
3. Revisa setupInitialMenuSteps()
```

### WhatsApp no recibe formato correcto:
```bash
❌ Error: Mensaje mal formateado

# Solución:
1. Revisa función sendFinalOrder()
2. Verifica encoding de caracteres especiales
3. Confirma que allOrders contiene datos correctos
```

## 📦 Características Técnicas Avanzadas

### Sistema de Validación por Contexto:
- **Hallacas Individuales**: Máximo 9 unidades
- **Hallacas Por Mayor**: Mínimo 10 unidades
- **Productos Generales**: Sin límite específico
- **Campos Obligatorios**: Validación progresiva

### Navegación Adaptativa:
- **Flujo Dinámico**: Pasos según tipo de producto
- **Saltos Inteligentes**: Omite pasos no aplicables
- **Memoria de Estado**: Mantiene selecciones previas
- **Reset Contextual**: Limpieza apropiada por menú

### Experiencia de Usuario Mejorada:
- **Información Previa**: Descripciones detalladas
- **Precios Visibles**: Siempre mostrados claramente
- **Confirmaciones**: Validación en cada paso
- **Progreso Visual**: Indicadores de avance

## 🤝 Contribuir

### Ideas de Mejoras Sugeridas:
- 🕒 **Horarios de Disponibilidad**: Por tipo de producto
- 📊 **Dashboard de Ventas**: Para el restaurante
- 🎁 **Sistema de Promociones**: Descuentos y combos
- 📍 **Zonas de Entrega**: Mapa interactivo
- ⭐ **Sistema de Reseñas**: Feedback de clientes
- 📧 **Notificaciones Email**: Confirmaciones automáticas
- 🏷️ **Etiquetas Dietarias**: Vegetariano, sin gluten, etc.
- 📱 **PWA Completa**: App instalable

## 📝 Changelog

### v2.0.0 (Actual)
- ✅ **Menús Múltiples**: Semanal, Salsas y Postres separados
- ✅ **Productos Venezolanos**: Hallacas, Pabellón, Dulces típicos
- ✅ **Precios Diferenciados**: Por tipo y cantidad de producto
- ✅ **Hallacas Especiales**: Individual vs Por Mayor con precios distintos
- ✅ **UX Mejorada**: Navegación contextual y información clara
- ✅ **Salsas Congeladas**: Nuevo segmento de productos
- ✅ **Validación Avanzada**: Límites específicos por producto

### v1.0.0 (Anterior)
- ✅ Sistema básico de pedidos
- ✅ Solo milanesas y pabellón
- ✅ Integración WhatsApp básica
- ✅ Diseño responsive inicial

### Próximas Versiones:
- 🔄 **v2.1.0**: Sistema de horarios por producto
- 🎯 **v2.2.0**: Panel administrativo web
- 🏅 **v2.3.0**: Programa de fidelidad
- 📊 **v2.4.0**: Analytics detallados por menú

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tykillita](https://github.com/tykillita)
- LinkedIn: [rubenpino](https://www.linkedin.com/in/rubenpino/)
- Proyecto: [La Cocina de Anita](https://github.com/tykillita/la-cocina-de-anita)

## 🙏 Agradecimientos

- 🍽️ **La Cocina de Anita**: Por mantener viva la tradición culinaria venezolana
- 🇻🇪 **Cultura Gastronómica**: Por los sabores auténticos que inspiraron este proyecto
- 📱 **WhatsApp Business**: Por facilitar la comunicación comercial
- 🎨 **Diseño Responsivo**: Por hacer accesible la experiencia en cualquier dispositivo
- 🌟 **Comunidad Open Source**: Por las herramientas que hacen posible este proyecto

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto del Restaurante

### La Cocina de Anita
- 📱 **WhatsApp**: +507 6825-7958
- 📸 **Instagram**: [@lacocinadeanita507](https://www.instagram.com/lacocinadeanita507/)
- 🕒 **Horarios**: Consultar disponibilidad por WhatsApp
- 🚚 **Entregas**: Zona de Panamá (consultar cobertura)
- 🇻🇪 **Especialidad**: Comida casera venezolana auténtica

### Productos Destacados:
- 🫔 **Hallacas**: Disponibles todo el año
- 🇻🇪 **Pabellón**: El sabor de Venezuela en tu mesa
- 🍝 **Salsas Artesanales**: Para disfrutar en casa
- 🍯 **Postres Caseros**: Dulces tradicionales venezolanos

**¿Te gustó el proyecto? ¡Dale una ⭐ en GitHub y prueba los auténticos sabores venezolanos de La Cocina de Anita!**

¡Que aproveche! 🍽️🇻🇪✨
