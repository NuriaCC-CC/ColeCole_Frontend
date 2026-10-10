# ColeCole — frontend del Trabajo Final de Máster (TFM)

ColeCole es una propuesta digital para facilitar la búsqueda, publicación, compra e intercambio de uniformes escolares de segunda mano entre familias de un mismo colegio.

Este repositorio contiene el frontend navegable desarrollado para el TFM. La interfaz reproduce los diseños aprobados en Figma y demuestra la aplicación práctica de HTML, CSS, responsive design, accesibilidad y JavaScript básico.

## Contenido

1. [Objetivo](#objetivo)
2. [Alcance del proyecto](#alcance-del-proyecto)
3. [Tecnologías utilizadas](#tecnologías-utilizadas)
4. [Cómo visualizar el proyecto](#cómo-visualizar-el-proyecto)
5. [Recorrido principal](#recorrido-principal)
6. [Pantallas](#pantallas)
7. [Estructura de archivos](#estructura-de-archivos)
8. [Organización del frontend](#organización-del-frontend)
9. [Interacciones implementadas](#interacciones-implementadas)
10. [Estados de la interfaz](#estados-de-la-interfaz)
11. [Accesibilidad](#accesibilidad)
12. [Limitaciones y mejoras futuras](#limitaciones-y-mejoras-futuras)

## Objetivo

El objetivo del frontend es trasladar el diseño de ColeCole a una interfaz funcional, clara y responsive utilizando los contenidos aprendidos en el Máster de Diseño UX/UI y Desarrollo Web.

Con este proyecto, pretendo demostrar:

- Una estructura HTML semántica y comprensible.
- Una maquetación fiel a Figma.
- Una adaptación mobile-first para móvil y escritorio.
- El uso coherente de componentes y variables CSS.
- Interacciones sencillas mediante JavaScript.
- La aplicación de criterios básicos de accesibilidad.

## Alcance del proyecto

ColeCole es un prototipo frontend para mi TFM. Sus pantallas y conexiones permiten representar el recorrido principal de la experiencia, pero no existe un sistema real de usuarios, compra o publicación.

El alcance cubre el recorrido desde la bienvenida hasta el catálogo, junto con las principales tareas de publicación, consulta de uniformes, carrito, conversación y gestión del perfil. También incluye los estados necesarios para explicar qué sucede mientras se carga contenido o cuando una acción no produce el resultado esperado.

Los datos son estáticos y se reinician al recargar o cambiar de página. No se utilizan backend, base de datos, pagos, APIs ni almacenamiento local.

## Tecnologías utilizadas

- **HTML5:** estructura semántica, formularios, imágenes, enlaces y controles.
- **CSS3:** estilos propios, variables, Flexbox, Grid, transiciones y animaciones.
- **Responsive design:** estilos mobile-first y adaptaciones mediante media queries.
- **JavaScript básico:** validaciones, cambios de estado y manipulación sencilla del DOM.
- **Google Fonts:** carga de la familia tipográfica Manrope utilizada en Figma.

## Cómo visualizar el proyecto

### Opción recomendada: Live Server

1. Descarga o copia la carpeta completa del proyecto.
2. Ábrela en Visual Studio Code.
3. Abre `welcome.html`.
4. Pulsa **Go Live** si tienes instalada la extensión Live Server.
5. Recorre el prototipo desde la pantalla de bienvenida.

### Opción directa

También puedes abrir `welcome.html` directamente en el navegador. 

### Requisitos

- Navegador actualizado, como Chrome, Edge o Firefox.
- Conexión a internet para cargar la tipografía Manrope desde Google Fonts. Si no está disponible, se utilizará Arial como alternativa.
- JavaScript habilitado para probar las interacciones.

## Recorrido principal

Bienvenida
├── Iniciar sesión ──> Inicio de sesión ──> Selección de colegio
└── Crear cuenta ────> Crear cuenta ──────> Selección de colegio
                                              │
                                              └── Colegio Padres Blancos ──> Inicio


Desde Inicio se puede acceder a Publicar, Carrito, Perfil y, mediante las conexiones definidas, a los estados y al detalle de los uniformes. 

## Pantallas

| Archivo | Pantalla y finalidad |
| --- | --- |
| `welcome.html` | Bienvenida y acceso a iniciar sesión o crear una cuenta. |
| `login.html` | Inicio de sesión con validación y feedback dentro del formulario. |
| `signing.html` | Formulario de creación de cuenta. |
| `school_selection.html` | Búsqueda y selección del colegio. |
| `index.html` | Inicio, catálogo, categorías, filtros, favoritos visuales y modales de vacío y error. |
| `loading.html` | Representación del estado de carga del detalle. |
| `product_detail.html` | Galería, información de los uniformes y acciones de carrito y chat. |
| `publish.html` | Formulario para publicar un uniforme y modal de confirmación. |
| `cart.html` | Resumen del carrito, eliminación de uniformes y actualización del total. |
| `chat.html` | Conversación concreta relacionada con un uniforme. |
| `personal_area.html` | Perfil de la usuaria y sus publicaciones. |
| `personal_data.html` | Consulta y edición de datos personales. |
| `states.html` | Página de comprobación conjunta de los modales vacío, error y éxito. |
| `empty_state.html` | Comprobación aislada del estado vacío. |
| `error_state.html` | Comprobación aislada del estado de error. |
| `success_state.html` | Comprobación aislada del estado de éxito. |

Las cuatro últimas páginas permiten revisar los estados por separado. No representan pasos adicionales del recorrido principal.

## Estructura de archivos

ColeCole_Frontend_Organizado/
├── *.html                    # Pantallas descritas en la tabla anterior
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── desktop_header.css
│   │   └── un archivo para los estilos de cada pantalla
│   ├── js/
│   │   └── archivos de las pantallas que necesitan interacción
│   ├── images/
│   └── icons/
├── TECNOLOGIAS_NO_APRENDIDAS.md
└── README.md

Los HTML están en la raíz. Los estilos, scripts, imágenes e iconos están separados dentro de `assets/`. Todas las rutas del proyecto son relativas.

## Organización del frontend

### CSS

- `variables.css` contiene los colores, tipografías, espaciados, radios, sombras y otros tokens procedentes de Figma.
- `base.css` contiene el reset común aplicado a todas las páginas.
- `desktop_header.css` reúne los ajustes compartidos de las cabeceras de escritorio.
- Cada pantalla conserva sus estilos Mobile y Desktop en el mismo archivo.
- Los estilos base corresponden a móvil. Las adaptaciones de escritorio se encuentran después, dentro de media queries con `min-width`.
- El color de foco es Primary 500 (`#294F70`) y se reutiliza mediante `--color-focus`.

### JavaScript

- Cada script tiene una finalidad concreta y está separado del HTML y del CSS.
- Las interacciones utilizan eventos, condicionales, funciones sencillas y manipulación del DOM.
- JavaScript añade, elimina o alterna clases CSS para representar los estados visuales.
- No se guardan datos al cerrar o recargar una página.

### Recursos visuales

- Las fotografías y logotipos se encuentran en `assets/images/`.
- Los iconos se encuentran en `assets/icons/`.
- Los iconos de Figma se conservan como imágenes; no se sustituyen por emojis.

## Interacciones implementadas

- Validación básica de formularios y mensajes de error dentro de la interfaz.
- Mostrar y ocultar contraseñas.
- Búsqueda visual de colegios.
- Apertura del panel de categorías en móvil.
- Desplegable de tallas en desktop.
- Cambio visual del corazón de Favoritos.
- Carrusel de imágenes del detalle.
- Apertura y cierre de modales.
- Cierre de modales con la tecla `Escape`.
- Eliminación de uniformes del carrito y recálculo del total.
- Envío visual de mensajes en el chat.
- Contador de caracteres en la descripción de una publicación.
- Confirmaciones de guardado y publicación.

Estas interacciones representan el comportamiento del prototipo.

## Estados de la interfaz

El proyecto incorpora los estados necesarios para explicar el comportamiento de ColeCole:

- **Carga:** skeleton de la pantalla de detalle en `loading.html`.
- **Vacío:** modal “No hemos encontrado prendas”, conectado al filtro Abrigos de Inicio.
- **Error:** modal “Algo ha salido mal”, conectado a la tarjeta Camiseta roja de Inicio.
- **Éxito:** modal “¡Prenda publicada!”, mostrado al completar el formulario de Publicar.
- **Favorito:** cambio visual del corazón en tarjetas y detalle.
- **Feedback de formulario:** mensajes de error o confirmación dentro de la pantalla correspondiente.

`states.html` permite abrir los tres modales de feedback desde una única página para comprobar su aspecto y comportamiento.

## Accesibilidad

La accesibilidad se ha aplicado durante la maquetación y no como un añadido visual posterior.

- Cada página tiene un título descriptivo y un único `h1` principal.
- Se utilizan `header`, `nav`, `main`, `section`, `aside` y `footer` cuando corresponden por su función.
- Los formularios tienen labels relacionados con sus campos.
- Las imágenes informativas tienen texto alternativo y las decorativas utilizan `alt=""`.
- Los controles que solo contienen un icono tienen un nombre accesible.
- El foco del teclado es visible y utiliza un color con contraste suficiente.
- Los errores y confirmaciones no se comunican únicamente mediante color.
- Los modales reciben el foco al abrirse y lo devuelven al control anterior al cerrarse.
- Las animaciones se reducen cuando el dispositivo tiene activada la preferencia de movimiento reducido.
- Los controles interactivos pueden utilizarse con teclado.

Todo lo que he investigado y no aparece en el temario están explicados en `TECNOLOGIAS_NO_APRENDIDAS.md`.

## Limitaciones y mejoras futuras

Las siguientes funciones quedan fuera del alcance actual porque no tienen una pantalla final diseñada:

- Pantalla completa de Favoritos. La microinteracción del corazón sí está implementada.
- Bandeja general de conversaciones. Solo existe un chat concreto.
- Checkout, pago y confirmación de compra.
- Persistencia de favoritos, mensajes, carrito y formularios.
- Registro e inicio de sesión reales.
- Publicación y almacenamiento real de imágenes.
- Pantallas correspondientes a los demás colegios.
- Destino de la acción `Guardar borrador`.

Estas funciones se consideran posibles mejoras futuras.
