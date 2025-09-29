// Arrays
//1
let arrayVacio = [];

//2
let arrayNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [ 0, 2, 4, 6, 8];

//4
let arrayBidimensional = [
    [0, 1, 2],
    ['a', 'b', 'c']
];

// Funciones
//5
function suma(a, b) {
   return a + b;
}

//6
function potenciacion (a, b) {
    return a**b;
}

//7

function separarPalabras (texto) {
    return texto.split(" ");
}

//8

function repetirString (texto, veces){
let = resultado = "";
for (let i = 0; i < veces; i++) {
    resultado += texto;
} 
return resultado;
}

//9
function esPrimo (numero) {
    if (numero <= 1) return false;
    
    for (let i = 2; i < numero; i++) {
        if ( numero % i === 0) {
            return false;
        }
    } 
    return true;
}

//Arrays y funciones
//10 
function ordenarArray (arrayNumeros) {
return arrayNumeros.sort ((a,b) => a - b);
}

//11
function obtenerPares (arrayNumeros) {
    const pares = []
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            pares.push(arrayNumeros[i]);
        }
    }
    return pares
}

//12
function pintarArray(array) {
  return '[' + array.join(', ') + ']';
}

//13
function arrayMapi(array, funcion) {
  return array.map(funcion);
}

//14
function eliminarDuplicados(array) {
  return [...new Set(array)];
}

//Arrays
//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
const holaMundo = ["Hola", "Mundo"];

//17
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//18
const arrayDeArrays = [
  [756, 'nombre'],
  [225, 'apellido'],
  [298, 'direccion']
];

//Funciones
//19
function multiplicacion (a, b) {
    return a * b;
}

//20
function division (a, b) {
    return a / b;
}

//21
function esPar (a) {
    if (a % 2 === 0) {
        return true
    } else return false;
}

//22
function resta(a, b) {
  return a - b;
}
const arrayFunciones = [suma, resta, multiplicacion];

// Mezclando arrays y funciones 
//23
function ordenarArray2(arrayNumeros) {
  return arrayNumeros.sort((a, b) => b - a); // descendente
}

//24
function obtenerImpares(arrayNumeros) {
  return arrayNumeros.filter(num => num % 2 !== 0);
}

//25
function sumarArray(arrayNumeros) {
  return arrayNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

//26
function multiplicarArray(arrayNumeros) {
  return arrayNumeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
}