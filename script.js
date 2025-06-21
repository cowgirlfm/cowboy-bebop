const imagenes = [
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Jet1.jpg?v=1708625850264',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Faye1.jpg?v=1708625856330',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Ein1.jpg?v=1708625865841',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Spike1.jpg?v=1708625922958',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Ed1.jpg?v=1708625939438',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Jet2.jpg?v=1708625936128',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Faye2.jpg?v=1708625947898',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Ein2.jpg?v=1708625874214',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Spike2.jpg?v=1708625927999',
  'https://cdn.glitch.global/2f999962-cad9-400e-baea-6d6b5fadaf83/Ed2.jpg?v=1708625945225',
]

const titulos = [
'Asteroid Blues',
'Stray Dog Strut',
'Honky Tonk Women',
'Gateway Shuffle',
'Ballad of Fallen Angels',
'Sympathy for the Devil',
'Heavy Metal Queen',
'Waltz for Venus',
'Jamming with Edward',
'Ganymede Elegy',
'Toys in the Attic',
'Jupiter Jazz 1',
'Jupiter Jazz 2',
'Bohemian Rhapsody',
'My Funny Valentine',
'Black Dog Serenade',
'Mushroom Samba',
'Speak Like a Child',
'Wild Horses',
'Boogie Woogie Feng Shui',
'Cowboy Funk',
'Brain Scratch',
'Hard Luck Woman',
'The Real Folk Blues Part 1',
'The Real Folk Blues Part 2',

];

const frases = [
'Tank',
'Rush',
'Spokey Dokey',
'Bad Dog No Biscuits',
'Cat Blues',
'Cosmos',
'Space Lion',
'Waltz for Zizi',
'Piano Black',
'Pot City',
'Too Good Too Bad',
'Car24',
'The Egg and I',
'Felt Tip Pen',
'Rain',
'Digging My Potato',
'Memory',
  
];

let indicesElegidos = [];

// Traer los elementos del HTML que tienen ese id
const prediccion = document.getElementById('prediccion1');
const titulo = document.getElementById('titulo1');
const boton = document.getElementById('boton');
const imagen = document.getElementById('foto');

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// Función para elegir uno de los versos
function generarVerso() {
  const random = numeroRandom(0, frases.length - 1);
  
  // 'return' devuelve un valor al ejecutar la función. En este caso una frase de la lista de frases.
  return frases[random];
}

// Función para generar el poema completo sumando los cuatro versos
function generarPrediccion() {
  const indiceTitulo = numeroRandom(0, titulos.length - 1);
  const indiceImagen = numeroRandom(0, imagenes.length - 1);

  const verso1 = generarVerso();
  const verso2 = generarVerso();
  const verso3 = generarVerso();
  const verso4 = generarVerso();
  
  // Reemplazar el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indiceTitulo] ? titulos[indiceTitulo] : 'Sin título';
  imagen.src = imagenes[indiceImagen];
  
  // Reemplazar el texto del elemento 'poema' por un poema compuesto de cada uno de los versos y saltos de línea ('\n')
  prediccion.innerText = verso1 + '\n' + verso2 + '\n' + verso3 + '\n' + verso4 + '.';
}


// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener('click', function () {
  generarPrediccion();
});

generarPrediccion();