const assert = require("assert");
const { validarTelefono } = require("../src/script.js");
// Pruebas unitarias para la función validarTelefono----VERIFICA UNICAMENTE QUE TENGA...
assert.strictEqual(validarTelefono("123456789"), true);   //  números
assert.strictEqual(validarTelefono("12ab34"), false);     //  letras
assert.strictEqual(validarTelefono(""), false);           // vacío
assert.strictEqual(validarTelefono("12 34"), false);      //  espacio
assert.strictEqual(validarTelefono("+54911"), false);     //  símbolo

console.log("Todos los tests pasaron");