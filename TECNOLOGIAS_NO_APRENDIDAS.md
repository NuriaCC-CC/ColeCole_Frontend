# Tecnologías o técnicas no aprendidas en el curso

En este archivo explico brevemente las técnicas que he utilizado en ColeCole y que no aparecen en el temario del máster.

## HTML y accesibilidad

### Roles y atributos ARIA

He usado atributos como `aria-label`, `aria-expanded` y `aria-pressed`. Sirven para que los lectores de pantalla comprendan el nombre o el estado de un elemento. Por ejemplo, en `index.html`, `aria-expanded` indica si el desplegable de tallas está abierto o cerrado.

### Atributo `hidden`

He usado `hidden` para ocultar elementos hasta que sea necesario mostrarlos. Por ejemplo, el desplegable de tallas de `index.html` comienza oculto y JavaScript lo muestra al pulsar su botón.

```html
<div class="size-dropdown" id="size-dropdown" hidden></div>
```

### Atributos complementarios de formularios

He usado `autocomplete`, `inputmode` y `novalidate`. Sirven para facilitar el autocompletado, mostrar el teclado adecuado en móvil o utilizar mensajes de error propios. Por ejemplo, `publish.html` utiliza `inputmode="decimal"` en el campo del precio.

### Atributos `data-*` y `getAttribute()`

He usado atributos `data-*` para guardar información sencilla que después utiliza JavaScript. Por ejemplo, en `index.html`, `data-open-modal` indica qué modal debe abrir cada botón.

```html
<button type="button" data-open-modal="empty-results-modal">Abrigos</button>
```

### Gestión del foco

He usado `document.activeElement` y `focus()`. Sirven para llevar el foco del teclado al modal y devolverlo al elemento anterior cuando se cierra. Se utilizan en `assets/js/states.js`.

## CSS

### `filter` y `mix-blend-mode`

He usado `filter` y `mix-blend-mode` para adaptar algunos iconos a su fondo sin mostrar recuadros blancos. Por ejemplo, en `assets/css/publish.css`, el fondo del icono de la cámara se integra con el celeste del área de fotografías.

```css
.photo-empty-area > img {
  mix-blend-mode: multiply;
}
```

### `appearance`

He usado `appearance: none` para ocultar la flecha predeterminada de los campos `select` y mostrar el chevron de ColeCole. Se utiliza en los desplegables de `personal_data.css` y `publish.css`.

```css
.field select {
  appearance: none;
  background-image: url("../icons/icon_chevron_down.png");
}
```

### Ocultación visual accesible con `clip`

He usado `clip` para ocultar visualmente un texto sin ocultarlo a los lectores de pantalla. Por ejemplo, la clase `.visually-hidden` permite mantener títulos o etiquetas accesibles sin modificar el diseño.

```css
.visually-hidden {
  clip: rect(0, 0, 0, 0);
}
```

### `calc()`

He usado `calc()` para calcular medidas combinando porcentajes, píxeles o variables. Por ejemplo, en `publish.css` permite dejar 16 píxeles a cada lado del encabezado.

```css
.publish-heading {
  width: calc(100% - 32px);
}
```

### `prefers-reduced-motion`

He usado `prefers-reduced-motion` para reducir las animaciones cuando una persona así lo ha configurado en su dispositivo. Por ejemplo, en `index.css` y `personal_area.css` se desactiva el aumento de las tarjetas.

### Media queries `hover` y `pointer`

He usado `hover: hover` y `pointer: fine` para aplicar efectos de ratón únicamente en dispositivos que pueden utilizarlos correctamente. Por ejemplo, el efecto `hover` de las tarjetas no se aplica en una pantalla táctil.

```css
@media (hover: hover) and (pointer: fine) {
  .school-option--link:hover {
    background-color: var(--primary-100);
  }
}
```

### `pointer-events`

He usado `pointer-events: none` para que un aviso visual no bloquee los botones situados debajo. Se utiliza en el mensaje `.success-message` de `assets/css/personal_data.css`.

### `object-position`

He usado `object-position` para decidir cómo se alinea una imagen dentro de su espacio. Por ejemplo, en `desktop_header.css` mantiene el logotipo alineado a la izquierda sin deformarlo.

```css
.brand img {
  object-position: left center;
}
```

### `white-space` y `text-overflow`

He usado `white-space` y `text-overflow` para controlar los saltos de línea y mostrar puntos suspensivos cuando un texto no cabe. Por ejemplo, se utilizan en los nombres de colegio de `school_selection.html`.

```css
.school-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### `resize`

He usado `resize: vertical` para que el campo de descripción de `publish.html` solo pueda ampliarse hacia arriba o hacia abajo y no rompa el ancho de la pantalla.

## JavaScript

### `setTimeout()`

He usado `setTimeout()` para esperar un tiempo antes de realizar una acción. Por ejemplo, en `assets/js/personal_data.js` mantiene visible el mensaje de guardado durante 1,6 segundos antes de volver al área personal.

```javascript
setTimeout(function () {
  window.location.href = "personal_area.html";
}, 1600);
```

### Métodos sencillos de texto

He usado `trim()`, `toLowerCase()`, `includes()` y `replace()` para limpiar, comparar o modificar textos. Por ejemplo, `assets/js/school_selection.js` permite buscar colegios sin distinguir entre mayúsculas y minúsculas.

```javascript
const searchText = schoolSearchInput.value.trim().toLowerCase();
```

### Navegación con `location` e `history`

He usado `window.location` para abrir otra pantalla y `history.back()` para volver a la anterior. Por ejemplo, en `assets/js/cart.js`, la flecha vuelve a la página previa y utiliza `index.html` como alternativa.
