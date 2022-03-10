// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10) // (m) = m > 10 == function mayorQueDiez (m) { m > 10 }

// let mayorQueVeinte = mayorQue(20) // (m) = m > 20 == function mayorQueVeinte (m) { m > 20 }

// console.log(mayorQueDiez(12)); // true = 12 > 10

// console.log(mayorQueDiez(8)); // false = 8 > 10

// console.log(mayorQueVeinte(24)); // true = 24 > 20

// console.log(mayorQueVeinte(15)); // false = 15 > 20

// // -----------------------

// function asignarOperacion(op) {

//     if (op == "sumar") {

//         return (a, b) => a + b

//     } else if (op == "restar") {

//         return (a, b) => a - b

//     }
// }

// let sumar = asignarOperacion("sumar")

// console.log(sumar(5,5));

// let restar = asignarOperacion("restar")

// console.log(restar(10,5));

// // ------------FOR EACH-------------

// const number = [1,2,3,4,5,6]

// number.forEach((num) => {
//     num = num * 10
//     console.log(num);
// });

// // ---------------FIND---------------

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find((el) => el.precio === 15000)

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2) // {nombre: 'Javascript', precio: 15000}

// -----------------SOME--------------

// Lo mismo que el FIND solo que retorna TRUE o FALSE

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find((el) => el.precio === "Js")

// console.log(resultado) // TRUE
// console.log(resultado2) // FALSE

let paises = document.getElementsByClassName("paises");
for (const pais of paises) {
    console.log(pais.innerHTML);
}

let titulo = document.getElementById("titulo")

console.log( titulo.innerText ) // “Hola Mundo!”

// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"

console.log( titulo.innerText ) // “Hola Coder!”