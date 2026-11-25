/* =========================================================
   SABORES DE HUÁNUCO — script.js
   JavaScript Vanilla · sin dependencias
   ========================================================= */

/* ---------------------------------------------------------
   1. DATOS
   Fotografías: Wikimedia Commons (licencias libres).
   Cada foto indica el lugar donde fue tomada.
   --------------------------------------------------------- */

const IMG = "assets/img/";

const PHOTOS = {
  "pachamanca-panao": { file: "Pachamanca de cerdo.jpg", author: "Jilmer Atanacio Inocente", license: "CC BY-SA 4.0", place: "Panao, Pachitea (Huánuco)" },
  "picante-de-cuy": { file: "PicantedeCuy.JPG", author: "Dtarazona", license: "Dominio público", place: "Mercado Central de Huaraz (Áncash)" },
  "juane": { file: "Juane, plato emblema de la selva del Perú.jpg", author: "Neil Vega Murrieta", license: "CC BY-SA 2.0", place: "Selva del Perú" },
  "tacacho-cecina": { file: "Tacacho y cecina.jpg", author: "vivir_de_ilusiones", license: "CC BY 2.0", place: "Lima" },
  "chicharron-mote": { file: "ChicharronMote.JPG", author: "Dtarazona", license: "Dominio público", place: "Mercado Central de Huaraz (Áncash)" },
  "caldo-verde": { file: "EL YACUCHUPE O YACUCHUPI O CHUPE VERDE, Sopa Inca", url: "https://flickr.com/photo.gne?id=30475227896", author: "Usuario de Flickr 134894678@N07", license: "Dominio público (PDM)", place: "Perú" },
  "mazamorra-calabaza": { file: "Mazamorra de calabaza.JPG", author: "Dtarazona", license: "Dominio público", place: "Perú" },
  "humitas": { file: "humita", url: "https://flickr.com/photo.gne?id=25832455744", author: "leobenavente", license: "CC BY-NC-ND 2.0", place: "Lugar no indicado" },
  "cushuro": { file: "Cushuro en Huaraz.jpg", author: "Cbrescia", license: "CC BY-SA 4.0", place: "Mercado de Huaraz (Áncash)" },
  "mercado-viejo-puesto": { file: "Puesto de comida en el mercado Viejo de Huánuco.jpg", author: "Carlo Brescia", license: "CC BY-SA 4.0", place: "Mercado Viejo, ciudad de Huánuco" },
  "papas-nativas": { file: "Papas Nativas.jpg", author: "Davidsuna", license: "CC BY-SA 4.0", place: "Sierra peruana" },
  "maiz": { file: "Mote [cereals]", url: "https://flickr.com/photo.gne?id=13984294622", author: "Rocco Lucia", license: "CC BY 2.0", place: "Maíz tostado (cancha) · lugar no indicado" },
  "aji-amarillo": { file: "Aji amarillo expo.jpg", author: "MiguelAlanCS", license: "CC BY-SA 4.0", place: "Perú" },
  "huacatay": { file: "Tagetes minuta flower.jpg", author: "Arthur Chapman", license: "CC BY 2.0", place: "Queensland, Australia (misma especie)" },
  "cuy-chavin": { file: "Picante de cuy en Chavín.jpg", author: "Cbrescia", license: "CC BY-SA 4.0", place: "Chavín de Huántar (Áncash)" },
  "yuca": { file: "Mandioca", url: "https://flickr.com/photo.gne?id=28223600369", author: "Codevasf", license: "CC BY 2.0", place: "Brasil (misma raíz que la yuca peruana)" },
  "platano": { file: "Mercado Minorista de Pucallpa plátano.jpg", author: "Aulaverde", license: "CC BY-SA 4.0", place: "Mercado de Pucallpa (Ucayali)" },
  "cocona": { file: "Cocona.JPG", author: "Dtarazona", license: "Dominio público", place: "Perú" },
  "paisajes-huanuco": { file: "Huanuco, Peru", url: "https://flickr.com/photo.gne?id=3501375637", author: "One Laptop per Child", license: "CC BY 2.0", place: "Región Huánuco" },
  "tingo-maria": { file: "Tingo María, ciudad en el río Huallaga.jpg", author: "Tessio-777", license: "CC BY-SA 4.0", place: "Tingo María, Leoncio Prado (Huánuco)" },
  "pachamanca-tierra": { file: "Pachamanca in Peru.jpg", author: "Unukorno", license: "CC BY 3.0", place: "Perú" },
  "pachamanca-casera": { file: "Pachamanca underground barbecue lunch", url: "https://flickr.com/photo.gne?id=45060427701", author: "Bex Walton", license: "CC BY 2.0", place: "Orilla de un lago altoandino" },
  "pachahorno": { file: "Pachamanca", url: "https://flickr.com/photo.gne?id=45060395041", author: "Bex Walton", license: "CC BY 2.0", place: "Orilla de un lago altoandino" },
  "preparando-tacacho": { file: "Making Tacacho.JPG", author: "Dtarazona", license: "Dominio público", place: "Perú" },
  "mercado-viejo-interior": { file: "Interior del Mercado Viejo, Huánuco 01.jpg", author: "Carlo Brescia", license: "CC BY-SA 4.0", place: "Mercado Viejo, ciudad de Huánuco" },
  "mercado-viejo-interior-2": { file: "Interior del Mercado Viejo, Huánuco 02.jpg", author: "Carlo Brescia", license: "CC BY-SA 4.0", place: "Mercado Viejo, ciudad de Huánuco" },
  "mercado-viejo": { file: "Mercado Viejo, Huánuco.jpg", author: "Carlo Brescia", license: "CC BY-SA 4.0", place: "Ciudad de Huánuco" },
  "cocinera-chicha": { file: "Cocinera de Chicha.jpg", author: "Elianturlione3", license: "CC BY-SA 4.0", place: "Perú" },
  "papas-expo": { file: "Exposición de papas nativas peruanas en la UNMSM.jpg", author: "Eclipxstical", license: "CC BY-SA 4.0", place: "UNMSM, Lima" },
  "tacacho-iquitos": { file: "Tacacho con cecina.jpg", author: "Mayimbú", license: "CC BY-SA 4.0", place: "Iquitos (Loreto)" },
  "humita-dulce": { file: "Humita dulce preparado en Huancayo.jpg", author: "Johann Wilde Huaman Ricaldi", license: "CC BY-SA 4.0", place: "Huancayo (Junín)" },
  "aji-amarillo-fruto": { file: "Ají amarillo.jpg", author: "Soderomekvatorn", license: "CC BY-SA 4.0", place: "Lugar no indicado" },
  "negritos": { file: "Negrito de Huánuco (Danzante)", url: "https://flickr.com/photo.gne?id=30583304204", author: "Thomas Flores", license: "CC BY-SA 2.0", place: "Huánuco" }
};

const commonsUrl = (file) => "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file.replace(/ /g, "_"));
const sourceUrl = (p) => p.url || commonsUrl(p.file);
const sourceName = (p) => p.url ? "Flickr" : "Wikimedia Commons";

/* Platos típicos.
   origin: "arraigo"  → plato con fuerte presencia y tradición en Huánuco (no exclusivo)
           "compartido" → plato compartido con otras regiones del Perú */
const DISHES = [
  {
    id: "pachamanca",
    name: "Pachamanca huanuqueña",
    photo: "pachamanca-panao",
    cats: ["andes"],
    zone: "Andes · valles y alturas",
    origin: "arraigo",
    originLabel: "Arraigo huanuqueño",
    desc: "Carnes, papas, camotes, habas y humitas cocidos bajo tierra con piedras calientes y hierbas aromáticas.",
    ings: ["Cerdo, cordero o pollo", "Papa", "Camote", "Habas", "Huacatay", "Chincho"],
    culture: "Plato de fiesta y faena: se arma, se tapa y se destapa en comunidad.",
    steps: [
      "Se calientan piedras en un horno armado con leña (huatia o pachahorno).",
      "Las carnes se maceran con un aderezo de hierbas andinas molidas y ají.",
      "Se acomodan por capas papas, camotes, carnes, habas y humitas entre las piedras.",
      "Se cubre todo con hojas, mantas y tierra; se cocina lentamente durante horas.",
      "Se destapa entre todos y se sirve al momento."
    ],
    history: "En quechua, pacha significa ‘tierra’ y manka, ‘olla’: es la cocina de la tierra. La técnica es común en la sierra central del Perú (Junín, Huancavelica, Ayacucho, Huánuco, entre otras).",
    originText: "No es exclusiva de Huánuco: es compartida con la sierra central. En la región tiene una fuerte presencia en fiestas y celebraciones; la foto fue tomada en Panao (Pachitea), donde se prepara de manera tradicional con piedras y leña."
  },
  {
    id: "picante-de-cuy",
    name: "Picante de cuy",
    photo: "picante-de-cuy",
    cats: ["andes"],
    zone: "Andes",
    origin: "compartido",
    originLabel: "Compartido · sierra",
    desc: "Cuy frito o dorado bañado en una salsa de ají y maní, acompañado de papa sancochada.",
    ings: ["Cuy", "Ají amarillo o panca", "Maní", "Papa", "Ajo", "Comino"],
    culture: "El cuy se cría en las casas andinas desde hace milenios y es infaltable en celebraciones.",
    steps: [
      "Se limpia el cuy y se adoba con ajo, sal y comino.",
      "Se fríe o dora hasta que la piel quede crocante.",
      "Aparte se prepara un aderezo de ají con maní molido.",
      "Se sirve el cuy cubierto con la salsa, con papa sancochada y, a veces, mote o arroz."
    ],
    history: "El cuy (Cavia porcellus) fue domesticado en los Andes hace miles de años y sigue siendo parte de la vida familiar y ritual en la sierra.",
    originText: "Plato compartido con muchas regiones andinas del Perú (Áncash, Cajamarca, Junín, Huánuco y otras), cada una con su propia salsa. La foto corresponde a un picante de cuy servido en Huaraz (Áncash)."
  },
  {
    id: "locro-de-gallina",
    name: "Locro de gallina",
    photo: null,
    cats: ["andes", "sopas"],
    zone: "Valles interandinos",
    origin: "arraigo",
    originLabel: "Arraigo huanuqueño",
    desc: "Sopa espesa de papa con presas de gallina de corral, aderezo de ají y hierbas frescas.",
    ings: ["Gallina de corral", "Papa amarilla y blanca", "Ají", "Ajo y cebolla", "Hierbabuena", "Culantro"],
    culture: "Un caldo para reconfortar: se busca en mercados y fondas tradicionales de la ciudad de Huánuco.",
    steps: [
      "Se cocina la gallina a fuego lento hasta obtener un caldo concentrado.",
      "Se prepara un aderezo de cebolla, ajo y ají.",
      "Se añaden las papas, que al deshacerse dan cuerpo y espesor a la sopa.",
      "Se termina con hierbas frescas picadas y se sirve con la presa de gallina."
    ],
    history: "La palabra ‘locro’ proviene del quechua (ruqru) y nombra a guisos espesos presentes en varios países andinos.",
    originText: "Se le reconoce como uno de los platos tradicionales de la ciudad de Huánuco, pero el nombre ‘locro’ se usa en muchas regiones de los Andes para recetas distintas. No contamos con una fotografía verificada de este plato, por eso no mostramos una imagen."
  },
  {
    id: "juane",
    name: "Juane",
    photo: "juane",
    cats: ["amazonia"],
    zone: "Selva alta · Tingo María",
    origin: "compartido",
    originLabel: "Compartido · Amazonía",
    desc: "Arroz sazonado con palillo (cúrcuma), gallina, huevo y aceituna, envuelto y cocido en hoja de bijao.",
    ings: ["Arroz", "Gallina", "Huevo", "Aceituna", "Palillo", "Hoja de bijao"],
    culture: "Se asocia a la fiesta de San Juan (24 de junio), muy celebrada en la Amazonía peruana.",
    steps: [
      "Se cocina la gallina y, con su caldo, el arroz sazonado con palillo y ajo.",
      "Se mezcla el arroz con huevo batido para darle cuerpo.",
      "Sobre hojas de bijao se coloca el arroz, una presa, huevo duro y aceituna.",
      "Se amarra como un atado y se hierve; se sirve abierto sobre la misma hoja."
    ],
    history: "Una tradición popular relaciona su forma con la cabeza de San Juan Bautista, patrono de la fiesta amazónica del 24 de junio.",
    originText: "Plato de la Amazonía peruana (Loreto, San Martín, Ucayali, Huánuco y otras regiones). En Huánuco se encuentra en la selva alta, sobre todo en Tingo María y Leoncio Prado."
  },
  {
    id: "tacacho-con-cecina",
    name: "Tacacho con cecina",
    photo: "tacacho-cecina",
    cats: ["amazonia"],
    zone: "Selva alta · Leoncio Prado",
    origin: "compartido",
    originLabel: "Compartido · Amazonía",
    desc: "Bolas de plátano verde asado y machacado con manteca de cerdo, junto a cecina ahumada.",
    ings: ["Plátano verde", "Manteca de cerdo", "Chicharrón", "Cecina", "Sal"],
    culture: "Desayuno contundente de la selva: se acompaña con café o un jugo de frutas amazónicas.",
    steps: [
      "Se asa el plátano verde a la brasa o se fríe hasta dorar.",
      "Se machaca en batán o mortero con manteca y trocitos de chicharrón.",
      "Se forman bolas con las manos.",
      "Se sirve con cecina (carne de cerdo seca y ahumada) frita o a la parrilla."
    ],
    history: "El plátano, base de la cocina amazónica, cumple en la selva el papel que la papa tiene en los Andes.",
    originText: "Plato compartido con toda la Amazonía peruana. En Huánuco se come en la selva alta (Tingo María, Puerto Inca). La foto principal fue tomada en Lima."
  },
  {
    id: "chicharron-con-mote",
    name: "Chicharrón con mote",
    photo: "chicharron-mote",
    cats: ["andes"],
    zone: "Andes · valles",
    origin: "compartido",
    originLabel: "Compartido · sierra",
    desc: "Trozos de cerdo cocidos en su propia grasa hasta dorar, servidos con mote de maíz y salsa criolla.",
    ings: ["Carne de cerdo", "Mote (maíz cocido)", "Cebolla", "Ají", "Limón", "Papa"],
    culture: "Clásico de las mañanas de domingo y de los mercados de la sierra.",
    steps: [
      "Se cocina la carne de cerdo con agua y sal en una paila.",
      "Cuando el agua se evapora, la carne se dora en su propia grasa.",
      "Se sirve con mote caliente, papa y una salsa criolla de cebolla, ají y limón."
    ],
    history: "El mote —maíz pelado y hervido— es uno de los acompañamientos más antiguos de la mesa andina.",
    originText: "Plato compartido con gran parte de la sierra peruana. La foto corresponde al Mercado Central de Huaraz (Áncash)."
  },
  {
    id: "caldo-verde",
    name: "Caldo verde",
    photo: "caldo-verde",
    photoNote: "Foto referencial: muestra un yacuchupe o chupe verde, sopa andina muy parecida al caldo verde, no la misma receta.",
    cats: ["andes", "sopas"],
    zone: "Alturas andinas",
    origin: "compartido",
    originLabel: "Compartido · sierra",
    desc: "Sopa de papa con un molido de hierbas andinas que le da su color, a veces con huevo y queso fresco.",
    ings: ["Papa", "Paico", "Huacatay", "Perejil", "Hierbabuena", "Queso fresco"],
    culture: "Un desayuno caliente para las mañanas frías de altura.",
    steps: [
      "Se hierven las papas peladas en agua con sal.",
      "Se muelen las hierbas frescas hasta obtener una pasta verde.",
      "Se incorpora la pasta al caldo y se cocina unos minutos.",
      "Se puede añadir huevo y queso fresco al final."
    ],
    history: "Es una preparación sencilla que aprovecha las hierbas aromáticas que crecen en la chacra.",
    originText: "Plato compartido con otras regiones andinas; es especialmente conocido en Cajamarca. Las hierbas usadas varían según la zona y la familia."
  },
  {
    id: "mazamorra-de-calabaza",
    name: "Mazamorra de calabaza",
    photo: "mazamorra-calabaza",
    cats: ["maiz"],
    zone: "Andes · valles",
    origin: "compartido",
    originLabel: "Compartido · Perú",
    desc: "Postre espeso de calabaza cocida con chancaca, canela y clavo de olor.",
    ings: ["Calabaza", "Chancaca", "Canela", "Clavo de olor", "Harina o chuño"],
    culture: "Postre casero de época de cosecha, servido tibio o frío.",
    steps: [
      "Se cocina la calabaza en trozos hasta que esté muy suave.",
      "Se aplasta y se mezcla con chancaca, canela y clavo.",
      "Se espesa con un poco de harina o chuño disuelto.",
      "Se cocina removiendo hasta lograr una textura cremosa."
    ],
    history: "Las mazamorras son postres espesos muy extendidos en el Perú; la de calabaza aprovecha un fruto propio de las chacras andinas.",
    originText: "Postre compartido con muchas regiones del Perú; no es exclusivo de Huánuco."
  },
  {
    id: "humitas",
    name: "Humitas",
    photo: "humitas",
    cats: ["maiz", "andes"],
    zone: "Andes · valles",
    origin: "compartido",
    originLabel: "Compartido · Andes",
    desc: "Masa de choclo molido, dulce o salada, envuelta en panca y cocida al vapor.",
    ings: ["Choclo", "Manteca", "Queso fresco o pasas", "Anís", "Azúcar o sal", "Panca de maíz"],
    culture: "Se comen en desayunos y lonches, y suelen acompañar a la pachamanca.",
    steps: [
      "Se desgranan y muelen los choclos tiernos.",
      "La masa se condimenta: dulce con azúcar, anís y pasas, o salada con queso.",
      "Se envuelve en la panca (hoja) del mismo maíz.",
      "Se cocinan al vapor o se colocan dentro de la pachamanca."
    ],
    history: "El maíz es la base de muchos alimentos andinos desde la época prehispánica; las humitas son una de sus formas más tradicionales.",
    originText: "Preparación compartida en todo el Perú y en otros países andinos (Ecuador, Bolivia, Chile, Argentina)."
  },
  {
    id: "sopa-de-cushuro",
    name: "Sopa de cushuro",
    photo: "cushuro",
    photoNote: "La foto muestra el cushuro fresco (ingrediente), no la sopa servida.",
    cats: ["andes", "sopas"],
    zone: "Alturas andinas",
    origin: "compartido",
    originLabel: "Compartido · alto andino",
    desc: "Caldo con cushuro, perlas gelatinosas que crecen en lagunas de altura, con papa y hierbas.",
    ings: ["Cushuro", "Papa", "Huevo", "Cebolla", "Ají", "Hierbas"],
    culture: "Alimento de las comunidades de altura, apreciado por su valor nutritivo.",
    steps: [
      "Se lava bien el cushuro recolectado de lagunas y bofedales.",
      "Se prepara un aderezo y se agrega agua con papas en trozos.",
      "Se incorpora el cushuro y se cocina unos minutos.",
      "Se puede terminar con huevo y hierbas frescas."
    ],
    history: "El cushuro (Nostoc sphaericum) es una cianobacteria que forma colonias esféricas en aguas altoandinas; se consume desde tiempos antiguos.",
    originText: "Compartido con otras zonas altoandinas del Perú (Áncash, Junín, Cajamarca, entre otras). En Huánuco se encuentra en las provincias de altura."
  }
];

const INGREDIENTS = [
  { name: "Papa", photo: "papas-nativas", tag: "Andes", tagClass: "", text: "Cientos de variedades nativas: amarilla, huayro, peruanita… base de sopas, pachamancas y guisos." },
  { name: "Maíz", photo: "maiz", tag: "Andes", tagClass: "", text: "Choclo, mote, cancha y harina: de las humitas a la chicha, el maíz está en toda la mesa." },
  { name: "Ajíes", photo: "aji-amarillo", tag: "Andes y selva", tagClass: "ing__tag--ambos", text: "Ají amarillo, panca y rocoto dan color y picor a cremas, aderezos y salsas." },
  { name: "Hierbas aromáticas", photo: "huacatay", tag: "Andes", tagClass: "", text: "Huacatay, chincho, paico y hierbabuena perfuman la pachamanca y el caldo verde." },
  { name: "Carnes tradicionales", photo: "cuy-chavin", tag: "Andes y selva", tagClass: "ing__tag--ambos", text: "Cuy, gallina de corral, cerdo y cordero; en la selva, la cecina ahumada." },
  { name: "Yuca", photo: "yuca", tag: "Selva", tagClass: "ing__tag--selva", text: "Raíz amazónica que se sancocha, se fríe o acompaña pescados y carnes." },
  { name: "Plátano", photo: "platano", tag: "Selva", tagClass: "ing__tag--selva", text: "Verde o maduro: es la base del tacacho y acompaña casi todo en la selva alta." },
  { name: "Selva y Andes", photo: "cocona", tag: "Andes y selva", tagClass: "ing__tag--ambos", text: "Frutos como la cocona en la selva y el cushuro en las lagunas de altura." }
];

const GALLERY = [
  { photo: "pachamanca-casera", cat: "Preparación", title: "Preparando la pachamanca junto al lago" },
  { photo: "mercado-viejo-interior", cat: "Mercados tradicionales", title: "Interior del Mercado Viejo" },
  { photo: "pachahorno", cat: "Cocinas tradicionales", title: "Armando el horno de piedras" },
  { photo: "papas-expo", cat: "Ferias y exposiciones", title: "Exposición de papas nativas peruanas" },
  { photo: "preparando-tacacho", cat: "Preparación", title: "Machacando el plátano para el tacacho" },
  { photo: "cocinera-chicha", cat: "Cocinas tradicionales", title: "Cocinera de chicha de jora" },
  { photo: "mercado-viejo", cat: "Mercados tradicionales", title: "Mercado Viejo de Huánuco" },
  { photo: "tacacho-iquitos", cat: "Platos típicos", title: "Tacacho con cecina" },
  { photo: "aji-amarillo-fruto", cat: "Ingredientes regionales", title: "Ají amarillo" },
  { photo: "humita-dulce", cat: "Platos típicos", title: "Humita dulce" },
  { photo: "mercado-viejo-interior-2", cat: "Mercados tradicionales", title: "Puestos del Mercado Viejo" },
  { photo: "negritos", cat: "Fiestas tradicionales", title: "Máscara de la danza de los Negritos de Huánuco" }
];

/* ---------------------------------------------------------
   2. UTILIDADES
   --------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function lockScroll(lock) {
  document.body.classList.toggle("is-locked", lock);
}

/* Mantiene el foco dentro de un diálogo */
function trapFocus(container, e) {
  if (e.key !== "Tab") return;
  const f = $$('button:not([disabled]), a[href], input, textarea, [tabindex]:not([tabindex="-1"])', container)
    .filter((el) => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------------------------------------------------------
   3. RENDER: PLATOS
   --------------------------------------------------------- */
function noPhotoBlock(dish) {
  return `
    <div class="dish__media dish__media--type">
      <span class="type-word">${esc(dish.name.split(" ")[0])}</span>
      <p class="type-note">Sin fotografía verificada de este plato: preferimos no mostrar una imagen que no corresponda.</p>
    </div>`;
}

function renderDishes() {
  const grid = $("#dishGrid");
  grid.innerHTML = DISHES.map((d, i) => {
    const p = d.photo ? PHOTOS[d.photo] : null;
    const media = p
      ? `<button class="dish__media" data-dish="${d.id}" aria-label="Ver detalles de ${esc(d.name)}">
           <img src="${IMG}${d.photo}.jpg" alt="${esc(d.name)} — foto tomada en ${esc(p.place)}" loading="lazy">
           <span class="dish__num">${String(i + 1).padStart(2, "0")}</span>
           <span class="dish__badge ${d.origin === "arraigo" ? "dish__badge--root" : ""}">${esc(d.originLabel)}</span>
           <span class="dish__zone">${esc(d.zone)}</span>
           ${d.photoNote ? `<span class="dish__ref" title="${esc(d.photoNote)}">Foto referencial</span>` : ""}
         </button>`
      : `<div class="dish__media-wrap" style="position:relative">
           ${noPhotoBlock(d)}
           <span class="dish__num">${String(i + 1).padStart(2, "0")}</span>
           <span class="dish__badge ${d.origin === "arraigo" ? "dish__badge--root" : ""}">${esc(d.originLabel)}</span>
         </div>`;
    return `
      <article class="dish reveal" data-cats="${d.cats.join(" ")}" style="--i:${i % 3}">
        ${media}
        <div class="dish__body">
          <h3 class="dish__title">${esc(d.name)}</h3>
          <p class="dish__desc">${esc(d.desc)}</p>
          <ul class="dish__ings" aria-label="Ingredientes principales">
            ${d.ings.slice(0, 4).map((x) => `<li>${esc(x)}</li>`).join("")}
          </ul>
          <p class="dish__culture">${esc(d.culture)}</p>
          <div class="dish__cta">
            <button class="btn btn--outline" data-dish="${d.id}">Descubrir más <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </article>`;
  }).join("");

  // Contadores de filtros
  $$("[data-count]").forEach((el) => {
    const f = el.dataset.count;
    el.textContent = f === "todos" ? DISHES.length : DISHES.filter((d) => d.cats.includes(f)).length;
  });
}

/* ---------------------------------------------------------
   4. FILTROS
   --------------------------------------------------------- */
function initFilters() {
  const buttons = $$(".filter");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on);
      });
      const cards = $$(".dish");
      cards.forEach((c) => c.classList.add("is-hiding"));
      setTimeout(() => {
        cards.forEach((c) => {
          const show = f === "todos" || c.dataset.cats.split(" ").includes(f);
          c.hidden = !show;
          if (show) {
            c.classList.add("is-visible");
            requestAnimationFrame(() => requestAnimationFrame(() => c.classList.remove("is-hiding")));
          }
        });
      }, prefersReduced ? 0 : 260);
    });
  });
}

/* ---------------------------------------------------------
   5. MODAL DE PLATOS
   --------------------------------------------------------- */
const modal = { el: null, lastFocus: null, index: 0 };

function openDish(id) {
  const idx = DISHES.findIndex((d) => d.id === id);
  if (idx < 0) return;
  modal.index = idx;
  const d = DISHES[idx];
  const p = d.photo ? PHOTOS[d.photo] : null;

  $("#modalMedia").innerHTML = p
    ? `<img src="${IMG}${d.photo}.jpg" alt="${esc(d.name)}">
       <figcaption>${d.photoNote ? esc(d.photoNote) + " " : ""}Foto: ${esc(p.place)} · ${esc(p.author)} (${esc(p.license)}), ${sourceName(p)}</figcaption>`
    : noPhotoBlock(d);

  const prev = DISHES[(idx - 1 + DISHES.length) % DISHES.length];
  const next = DISHES[(idx + 1) % DISHES.length];

  $("#modalBody").innerHTML = `
    <div class="modal__tags">
      <span class="${d.origin === "arraigo" ? "root" : ""}">${esc(d.originLabel)}</span>
      <span>${esc(d.zone)}</span>
    </div>
    <h2 class="modal__title" id="modalTitle">${esc(d.name)}</h2>
    <p class="modal__intro">${esc(d.desc)}</p>

    <h3>Ingredientes principales</h3>
    <ul class="modal__ings">${d.ings.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>

    <h3>Preparación tradicional</h3>
    <ol class="modal__steps">${d.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>

    <h3>Referencia cultural</h3>
    <p class="modal__culture">${esc(d.history)}</p>

    <h3>¿Es propio de Huánuco?</h3>
    <p class="modal__origin">${esc(d.originText)}</p>

    <div class="modal__nav">
      <button class="link-arrow" data-dish-nav="${prev.id}">← ${esc(prev.name)}</button>
      <button class="link-arrow" data-dish-nav="${next.id}">${esc(next.name)} →</button>
    </div>`;

  const wasHidden = modal.el.hidden;
  modal.el.hidden = false;
  $(".modal__body", modal.el).scrollTop = 0;
  $(".modal__panel", modal.el).scrollTop = 0;
  if (wasHidden) {
    modal.lastFocus = document.activeElement;
    lockScroll(true);
  }
  $(".modal__close", modal.el).focus();
}

function closeDish() {
  if (modal.el.hidden) return;
  modal.el.hidden = true;
  lockScroll(false);
  if (modal.lastFocus) modal.lastFocus.focus();
}

function initModal() {
  modal.el = $("#dishModal");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-dish]");
    if (trigger) { e.preventDefault(); openDish(trigger.dataset.dish); return; }
    const nav = e.target.closest("[data-dish-nav]");
    if (nav) { openDish(nav.dataset.dishNav); return; }
    const openFromFeature = e.target.closest("[data-open-dish]");
    if (openFromFeature) { e.preventDefault(); openDish(openFromFeature.dataset.openDish); return; }
    if (e.target.closest("[data-close]")) closeDish();
  });

  modal.el.addEventListener("keydown", (e) => trapFocus(modal.el, e));
}

/* ---------------------------------------------------------
   6. INGREDIENTES
   --------------------------------------------------------- */
function renderIngredients() {
  $("#ingGrid").innerHTML = INGREDIENTS.map((ing, i) => {
    const p = PHOTOS[ing.photo];
    return `
      <article class="ing reveal" style="--i:${i % 4}">
        <div class="ing__media">
          <img src="${IMG}${ing.photo}.jpg" alt="${esc(ing.name)}" loading="lazy">
          <span class="ing__tag ${ing.tagClass}">${esc(ing.tag)}</span>
        </div>
        <h3>${esc(ing.name)}</h3>
        <p>${esc(ing.text)}</p>
        <small class="ing__credit">Foto: ${esc(p.place)}</small>
      </article>`;
  }).join("");
}

/* ---------------------------------------------------------
   7. CARRUSEL + LIGHTBOX
   --------------------------------------------------------- */
const carousel = { index: 0, track: null, slides: [] };

function renderGallery() {
  carousel.track = $("#carouselTrack");
  carousel.track.innerHTML = GALLERY.map((g, i) => {
    const p = PHOTOS[g.photo];
    return `
      <div class="slide" role="group" aria-roledescription="diapositiva" aria-label="${i + 1} de ${GALLERY.length}">
        <button class="slide__btn" data-lb="${i}" aria-label="Ampliar: ${esc(g.title)}">
          <span class="slide__media">
            <img src="${IMG}${g.photo}.jpg" alt="${esc(g.title)} — ${esc(p.place)}" loading="lazy" draggable="false">
            <span class="slide__zoom" aria-hidden="true">⤢</span>
          </span>
          <span class="slide__cat">${esc(g.cat)}</span>
          <span class="slide__title">${esc(g.title)}</span>
          <span class="slide__place">${esc(p.place)}</span>
        </button>
      </div>`;
  }).join("");
  carousel.slides = $$(".slide", carousel.track);
}

function maxIndex() {
  // Último índice que todavía permite avanzar sin dejar espacio vacío
  const track = carousel.track;
  const viewport = track.parentElement.clientWidth;
  const total = track.scrollWidth;
  const slides = carousel.slides;
  for (let i = 0; i < slides.length; i++) {
    if (total - slides[i].offsetLeft + parseFloat(getComputedStyle(track).paddingLeft) <= viewport + 1) return Math.max(i, 0);
  }
  return slides.length - 1;
}

function goTo(i) {
  const max = maxIndex();
  carousel.index = Math.max(0, Math.min(i, max));
  const slide = carousel.slides[carousel.index];
  const pad = parseFloat(getComputedStyle(carousel.track).paddingLeft);
  let offset = slide.offsetLeft - pad;
  const limit = carousel.track.scrollWidth - carousel.track.parentElement.clientWidth;
  offset = Math.max(0, Math.min(offset, limit));
  carousel.track.style.transform = `translateX(${-offset}px)`;
  $("#carouselCount").textContent = `${String(carousel.index + 1).padStart(2, "0")} / ${String(GALLERY.length).padStart(2, "0")}`;
  $("#carouselBar").style.width = `${((carousel.index + 1) / (max + 1)) * 100}%`;
  $("#prevBtn").disabled = carousel.index === 0;
  $("#nextBtn").disabled = carousel.index >= max;
}

function initCarousel() {
  $("#prevBtn").addEventListener("click", () => goTo(carousel.index - 1));
  $("#nextBtn").addEventListener("click", () => goTo(carousel.index + 1));

  // Arrastre / swipe
  const root = $("#carousel");
  let startX = 0, startY = 0, dx = 0, dragging = false, moved = false, baseOffset = 0;
  const getOffset = () => {
    const m = /translateX\((-?[\d.]+)px\)/.exec(carousel.track.style.transform);
    return m ? parseFloat(m[1]) : 0;
  };
  root.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging = true; moved = false; startX = e.clientX; startY = e.clientY; dx = 0;
    baseOffset = getOffset();
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - startY)) {
      moved = true; root.classList.add("is-dragging");
    }
    if (moved) carousel.track.style.transform = `translateX(${baseOffset + dx}px)`;
  });
  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    root.classList.remove("is-dragging");
    if (moved) {
      const steps = Math.max(1, Math.round(Math.abs(dx) / 280));
      goTo(carousel.index + (dx < 0 ? steps : -steps));
    }
  });
  // Evita que un arrastre abra el lightbox
  root.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  // Teclado cuando el carrusel tiene foco
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { goTo(carousel.index + 1); }
    if (e.key === "ArrowLeft") { goTo(carousel.index - 1); }
  });

  window.addEventListener("resize", () => goTo(carousel.index));
  goTo(0);
}

const lb = { el: null, index: 0, lastFocus: null };

function showLightbox(i) {
  lb.index = (i + GALLERY.length) % GALLERY.length;
  const g = GALLERY[lb.index];
  const p = PHOTOS[g.photo];
  const img = $("#lbImg");
  img.classList.remove("is-missing");
  img.parentElement.classList.remove("has-missing");
  img.style.animation = "none"; void img.offsetWidth; img.style.animation = "";
  img.src = `${IMG}${g.photo}.jpg`;
  img.alt = `${g.title} — ${p.place}`;
  $("#lbCaption").innerHTML = `<strong>${esc(g.title)}</strong> · ${esc(p.place)}
    <small>${lb.index + 1} / ${GALLERY.length} · Foto: ${esc(p.author)} (${esc(p.license)}) · <a href="${sourceUrl(p)}" target="_blank" rel="noopener">${sourceName(p)}</a></small>`;
}

function openLightbox(i) {
  lb.lastFocus = document.activeElement;
  lb.el.hidden = false;
  lockScroll(true);
  showLightbox(i);
  $(".lightbox__close", lb.el).focus();
}

function closeLightbox() {
  if (lb.el.hidden) return;
  lb.el.hidden = true;
  lockScroll(false);
  if (lb.lastFocus) lb.lastFocus.focus();
  goTo(Math.min(lb.index, maxIndex()));
}

function initLightbox() {
  lb.el = $("#lightbox");
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-lb]");
    if (t) openLightbox(parseInt(t.dataset.lb, 10));
  });
  $("[data-lb-close]").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => showLightbox(lb.index - 1));
  $("#lbNext").addEventListener("click", () => showLightbox(lb.index + 1));
  lb.el.addEventListener("click", (e) => { if (e.target === lb.el || e.target.classList.contains("lightbox__figure")) closeLightbox(); });
  lb.el.addEventListener("keydown", (e) => trapFocus(lb.el, e));

  // Swipe en lightbox
  let sx = null;
  lb.el.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.el.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const d = e.changedTouches[0].clientX - sx;
    if (Math.abs(d) > 50) showLightbox(lb.index + (d < 0 ? 1 : -1));
    sx = null;
  });
}

/* Tecla Escape y flechas globales para diálogos */
document.addEventListener("keydown", (e) => {
  if (lb.el && !lb.el.hidden) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showLightbox(lb.index + 1);
    if (e.key === "ArrowLeft") showLightbox(lb.index - 1);
    return;
  }
  if (modal.el && !modal.el.hidden && e.key === "Escape") closeDish();
  if (e.key === "Escape" && $("#menu").classList.contains("is-open")) toggleMenu(false);
});

/* ---------------------------------------------------------
   8. NAVEGACIÓN
   --------------------------------------------------------- */
function toggleMenu(force) {
  const menu = $("#menu"), burger = $("#burger");
  const open = typeof force === "boolean" ? force : !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  document.body.classList.toggle("menu-open", open);
  lockScroll(open);
}

function initNav() {
  const nav = $("#nav");
  $("#burger").addEventListener("click", () => toggleMenu());
  $$(".menu__link").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  // Desplazamiento suave con compensación del header (también para navegadores sin CSS smooth)
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute("data-open-dish")) return;
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - (id === "#inicio" ? 0 : 70);
    window.scrollTo({ top: y, behavior: prefersReduced ? "auto" : "smooth" });
    history.replaceState(null, "", id);
  });

  // Estado al hacer scroll
  const toTop = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 30);
    toTop.classList.toggle("is-visible", y > window.innerHeight * 0.8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  // Enlace activo según la sección visible
  const map = { inicio: "#inicio", nosotros: "#nosotros", platos: "#platos", ingredientes: "#ingredientes", cultura: "#ingredientes", galeria: "#galeria", destacado: "#galeria", contacto: "#contacto" };
  const links = $$(".menu__link");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const href = map[en.target.id];
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === href));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(map).forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

/* ---------------------------------------------------------
   9. ANIMACIONES AL HACER SCROLL
   --------------------------------------------------------- */
function initReveal() {
  // Retardos escalonados en el hero
  $$(".hero .reveal").forEach((el, i) => el.style.setProperty("--i", i));

  const els = $$(".reveal, .altitude");
  if (!("IntersectionObserver" in window) || prefersReduced) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const delay = parseInt(getComputedStyle(en.target).getPropertyValue("--i") || 0, 10) * 90;
        setTimeout(() => en.target.classList.add("is-visible"), en.target.closest(".hero") ? 0 : delay);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

/* Parallax suave en la sección destacada */
function initParallax() {
  if (prefersReduced) return;
  const img = $(".feature__bg img");
  const sec = $(".feature");
  let ticking = false;
  const update = () => {
    const r = sec.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight) {
      const p = (r.top + r.height) / (window.innerHeight + r.height); // 1 → 0
      img.style.transform = `translateY(${(p - 0.5) * -10}%)`;
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
}

/* ---------------------------------------------------------
   10. FORMULARIO (validación sin servidor)
   --------------------------------------------------------- */
function initForm() {
  const form = $("#contactForm");
  const fields = {
    nombre: {
      el: $("#nombre"),
      check: (v) => v.trim().length === 0 ? "Escribe tu nombre." :
        v.trim().length < 3 ? "El nombre debe tener al menos 3 caracteres." :
        !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' .-]+$/.test(v.trim()) ? "Usa solo letras y espacios." : ""
    },
    correo: {
      el: $("#correo"),
      check: (v) => v.trim().length === 0 ? "Escribe tu correo electrónico." :
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Ingresa un correo válido, por ejemplo nombre@correo.com." : ""
    },
    mensaje: {
      el: $("#mensaje"),
      check: (v) => v.trim().length === 0 ? "Escribe tu mensaje." :
        v.trim().length < 10 ? `Tu mensaje es muy corto (mínimo 10 caracteres, llevas ${v.trim().length}).` : ""
    }
  };

  const validate = (key) => {
    const f = fields[key];
    const msg = f.check(f.el.value);
    const wrap = f.el.closest(".field");
    wrap.classList.toggle("is-invalid", !!msg);
    wrap.classList.toggle("is-valid", !msg);
    f.el.setAttribute("aria-invalid", !!msg);
    $(".field__error", wrap).textContent = msg;
    return !msg;
  };

  Object.keys(fields).forEach((k) => {
    const el = fields[k].el;
    el.addEventListener("blur", () => { if (el.value) validate(k); });
    el.addEventListener("input", () => { if (el.closest(".field").classList.contains("is-invalid")) validate(k); });
  });

  const count = $("#msgCount");
  fields.mensaje.el.addEventListener("input", (e) => { count.textContent = `${e.target.value.length} / 600`; });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(fields).map(validate);
    if (results.every(Boolean)) {
      $("#successName").textContent = fields.nombre.el.value.trim().split(" ")[0];
      $("#formSuccess").hidden = false;
      $("#resetForm").focus();
    } else {
      form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
      const firstBad = Object.values(fields).find((f) => f.el.getAttribute("aria-invalid") === "true");
      if (firstBad) firstBad.el.focus();
    }
  });

  $("#resetForm").addEventListener("click", () => {
    form.reset();
    count.textContent = "0 / 600";
    $$(".field", form).forEach((f) => { f.classList.remove("is-valid", "is-invalid"); $(".field__error", f).textContent = ""; });
    Object.values(fields).forEach((f) => f.el.removeAttribute("aria-invalid"));
    $("#formSuccess").hidden = true;
    fields.nombre.el.focus();
  });
}

/* ---------------------------------------------------------
   11. CRÉDITOS FOTOGRÁFICOS
   --------------------------------------------------------- */
function initCredits() {
  const list = $("#credits");
  list.innerHTML = Object.values(PHOTOS).map((p) =>
    `<li><a href="${sourceUrl(p)}" target="_blank" rel="noopener">${esc(p.file)}</a> — ${esc(p.author)} · ${esc(p.license)} · ${esc(p.place)} · ${sourceName(p)}</li>`
  ).join("");
  const btn = $("#creditsToggle");
  btn.addEventListener("click", () => {
    const open = list.hidden;
    list.hidden = !open;
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Ocultar créditos fotográficos ↑" : "Ver créditos fotográficos →";
  });
  $("#year").textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   12. FOTOS NO DISPONIBLES
   Si una imagen no carga, se muestra un recuadro en lugar de un ícono roto.
   --------------------------------------------------------- */
function markMissing(img) {
  img.classList.add("is-missing");
  const box = img.parentElement;
  if (box && !box.classList.contains("has-missing")) {
    box.classList.add("has-missing");
    box.setAttribute("data-missing", "Foto pendiente");
  }
}
document.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG") markMissing(e.target);
}, true);
function checkImages() {
  $$("img").forEach((img) => { if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) markMissing(img); });
}

/* ---------------------------------------------------------
   INICIO
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderDishes();
  renderIngredients();
  renderGallery();
  initFilters();
  initModal();
  initCarousel();
  initLightbox();
  initNav();
  initReveal();
  initParallax();
  initForm();
  initCredits();
  checkImages();
});
window.addEventListener("load", checkImages);
