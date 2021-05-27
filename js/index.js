// Punto 1
/* const fraseSnakeCase =
  "ves_amb_compte_amb_el_que_rapejes_que_pots_acabar_a_la_preso";

const palabras = fraseSnakeCase.split("_");

let palabrasModificadas = palabras[0];
for (const palabra of palabras.slice(1)) {
  const inicialMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  palabrasModificadas += inicialMayuscula;
}

console.log(palabrasModificadas);
 */

// Punto 2
const fraseCamelCase = "vesAmbCompteQuanProtestisQuePotsPerdreUnUll";
let fraseSnakeCase = "";
for (const caracter of fraseCamelCase) {
  if (caracter.toUpperCase() === caracter) {
    fraseSnakeCase += `_${caracter.toLowerCase()}`;
  } else {
    fraseSnakeCase += caracter;
  }
}

console.log(fraseSnakeCase);
