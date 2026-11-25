# Sabores de Huánuco

> “Una tierra de sabores, una tradición que nos une”

Página web demostrativa dedicada a la gastronomía típica del departamento de Huánuco (Perú): platos, ingredientes, cultura gastronómica andina y amazónica, galería fotográfica y formulario de contacto.

## Cómo verla

Abre `index.html` directamente en el navegador. No necesita servidor, backend ni instalación.
Las tipografías se cargan desde Google Fonts; sin conexión, la página usa fuentes del sistema.

## Estructura

```
index.html     Estructura y contenido fijo de las secciones
styles.css     Diseño, paleta, animaciones y diseño responsive
script.js      Datos (platos, ingredientes, galería, créditos) e interacciones
assets/img/    Fotografías optimizadas
```

## Funcionalidades

- Menú fijo con menú hamburguesa en celulares y resaltado de la sección activa
- Desplazamiento suave y botón para volver arriba
- Filtros de platos por categoría (andinos, amazónicos, sopas, maíz y dulces)
- Ventana modal con ingredientes, preparación, referencia cultural y origen de cada plato
- Carrusel con botones, arrastre o deslizamiento, y teclado
- Visor de fotos a pantalla completa (lightbox)
- Animaciones al hacer scroll (respeta “reducir movimiento”)
- Formulario validado con JavaScript. **No envía datos a ningún servidor**: solo muestra una confirmación visual.

## Rigor del contenido

- Ningún plato se presenta como exclusivo de Huánuco. Cada ficha indica si tiene **arraigo huanuqueño** o si es **compartido** con otras regiones, y en qué zona de Huánuco se encuentra.
- Los textos son divulgativos y no reemplazan una investigación histórica.

## Fotografías

Todas las fotos son reales y provienen de [Wikimedia Commons](https://commons.wikimedia.org), con licencias libres (dominio público, CC0, CC BY y CC BY-SA). Cada foto indica dónde fue tomada; varias no son de Huánuco (por ejemplo, Huaraz, Iquitos o Lima) y así se indica en la página.
No encontramos una foto verificada del **locro de gallina**, así que su tarjeta usa un diseño tipográfico en lugar de una imagen que no corresponda.
La lista completa de autores y licencias está en el pie de página (“Ver créditos fotográficos”) y en `script.js` (objeto `PHOTOS`).

### Si faltan fotos

Si alguna imagen de `assets/img/` no está, ejecuta desde la carpeta del proyecto:

```
python herramientas/descargar_fotos.py
```

El script descarga solo las fotos que faltan, en el tamaño adecuado, desde Wikimedia Commons.
