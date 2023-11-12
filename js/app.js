const words = ["calidad", "precio", "y durabilidad"];
let indicePalabraActual = 0;
let indiceLetra = 0;
const velocidadEscritura = 100;
const textoElement = document.querySelector('#texto');

function writeText() {
  const palabraActual = words[indicePalabraActual];
  
  if (indiceLetra < palabraActual.length) {
    textoElement.textContent += palabraActual.charAt(indiceLetra);
    indiceLetra++;
    setTimeout(writeText, velocidadEscritura);
  } else {
    setTimeout(deleteText, 1000);
  }
}
function deleteText() {
  if (indiceLetra > 0) {
    const textoActual = textoElement.textContent;
    textoElement.textContent = textoActual.slice(0, -1);
    indiceLetra--;
    setTimeout(deleteText, velocidadEscritura);
  } else {
    indicePalabraActual = (indicePalabraActual + 1) % words.length;
    setTimeout(writeText, 500);
  }
}
setTimeout(writeText, 1000);


