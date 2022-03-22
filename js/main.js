// Hago un constructor

class Producto {
    constructor (nombreProducto,precio,stock,id) {
        this.producto = nombreProducto;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.id = parseInt(id)
    }
    mostrarProducto(){
        alert(`Nuestros productos son:\nProducto: ${this.producto}, Precio: $${this.precio},  Stock: ${this.stock} y ID: ${this.id}`)
    }
    agregarCanasto(){
        subTotalCompra = subTotalCompra + this.precio
    }
}

// Creo los objetos que necesito gracias al constructor

const remera = new Producto("Remera", 2500, 10, 1);
const pantalon = new Producto("Pantalon", 5000, 20, 2);
const zapatillas = new Producto("Zapatillas", 3500, 8, 3);
const gorra = new Producto("Gorra", 1000, 5, 4);
const campera = new Producto("Campera", 4500, 10, 5);

// Creo un array para ingresar ahi los objetos creados con el class

const listaDeProductos = [];
listaDeProductos.push(remera,pantalon,zapatillas,gorra,campera)

// Utilizo el metodo FILTER para tener un filtrado de los productos que su monto es menor a 3000.

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

// Utilizo DOM, Eventos y JSON

// Uso addEventListener para mostrar mensaje en consola y uso DOM para mostrar productos

const btn1 = document.getElementById("productosBoton")

btn1.onclick = () => {
    for (const producto of listaDeProductos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>Producto: ${producto.producto}</h3>
                                <p>Precio: $${producto.precio}<p>
                                <p>Stock: ${producto.stock} unidades`;
        document.body.appendChild(contenedor)
    }
}

// Agrego un buscador de productos en la pagína implementando EVENTOS y DOM

const btn2 = document.getElementById("buscadorBoton")

btn2.addEventListener("click", () => {
    const input = document.getElementById("entrada")
    let productoBuscado = input.value
    console.log(productoBuscado);
    if (productoBuscado == "Remera" || productoBuscado == "remera"){
        let contenedor = document.createElement("div")
        contenedor.innerHTML = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[0].nombreProducto} y su precio es: $${listaDeProductos[0].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Pantalon" || productoBuscado == "pantalon") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[1].nombreProducto} y su precio es: $${listaDeProductos[1].precio}.</p>`
        console.log(contenedor);
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Zapatillas" || productoBuscado == "zapatillas") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[2].nombreProducto} y su precio es: $${listaDeProductos[2].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Gorra" || productoBuscado == "gorra") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[3].nombreProducto} y su precio es: $${listaDeProductos[3].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Campera" || productoBuscado == "campera") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[4].nombreProducto} y su precio es: $${listaDeProductos[4].precio}.</p>`
        document.body.appendChild(contenedor)
    } else {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h4>El producto que busca no se encuentra disponible.</h4>`
        document.body.appendChild(contenedor)
    }
})

// Implemento un carrito de compra

const botonesAgregarCarrito = document.querySelectorAll(".btn-comprar")

botonesAgregarCarrito.forEach((agregarCarrito) => {

    agregarCarrito.addEventListener("click", botonCarritoClick);

})

const carritoItemsContainer = document.querySelector(".carrito-compra-container")

console.log(carritoItemsContainer);

function botonCarritoClick(event) {
    const boton = event.target
    // Capturo el <div> que contiene todo mi producto
    const producto = boton.closest(".card")
    //Capturo los items de mi producto del HTML
    const nombreProducto = producto.querySelector(".card-title").textContent
    const precioProducto = producto.querySelector(".precio-producto").textContent
    const imagenProducto = producto.querySelector(".imagen-producto").src
    
    agregarItemsCarrito(nombreProducto, precioProducto, imagenProducto);
}

function agregarItemsCarrito(nombreProducto, precioProducto, imagenProducto) {
    const carritoLista = document.createElement("div")
    const carritoContenido = 
    `<div class="row">
        <div class="col-6">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src='${imagenProducto}' class="imagen-producto-carrito">
                <h6 class=" text-truncate ml-3 mb-0">${nombreProducto}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="mb-0">${precioProducto}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="" type="number" value="1">
                <button class="btn btn-danger" type="button">X</button>
            </div>
        </div>
    </div>`;
    carritoLista.innerHTML = carritoContenido
    carritoItemsContainer.append(carritoLista)
}

// ¡Faltaria ingresar el localStorage para el carrito de compras! 

// Aplico localStorage para almacenar los productos ahí

localStorage.setItem("PRODUCTOS", JSON.stringify(listaDeProductos))
let productosLocalStorage = localStorage.getItem('PRODUCTOS')

// Comienzo el if dependiendo lo que seleccione el usuario en el confirm, mostramos nuestros productos uno por uno y el usuario ingresa que prendas desea comprar

let consultaComprar = confirm("Desea realizar alguna compra por nuestra tienda online?");

let subTotalCompra = 0;

let cantidadProductos = 0;

if (consultaComprar == false) {
    alert("Gracias por visitar la tienda web de Mode Kove!")
} else {
    remera.mostrarProducto();
    pantalon.mostrarProducto();
    zapatillas.mostrarProducto();
    gorra.mostrarProducto();
    campera.mostrarProducto();
    while (consultaComprar == true) {
        let consultaPrenda = prompt("Que prenda desea comprar?\nEscriba 'Remera', 'Pantalon', 'Zapatillas', 'Gorra', 'Campera' o 'Finalizar' para terminar la compra!")
        switch (consultaPrenda) {
            case "Remera":
                alert("Hemos agregado una 'remera' a tu carrito!\nEl precio es: $"+remera["precio"])
                remera.agregarCanasto()
                cantidadProductos = cantidadProductos + 1
                break
            case "Pantalon":
                alert("Hemos agregado un 'pantalon' a tu carrito!\nEl precio es: $"+pantalon["precio"]);
                pantalon.agregarCanasto();
                cantidadProductos = cantidadProductos + 1
                break
            case "Zapatillas":
                alert("Hemos agregado unas 'zapatillas' a tu carrito!\nEl precio es: $"+zapatillas["precio"])
                zapatillas.agregarCanasto()
                cantidadProductos = cantidadProductos + 1
                break
            case "Gorra":
                alert("Hemos agregado una 'gorra' a tu carrito!\nEl precio es: $"+gorra["precio"])
                gorra.agregarCanasto()
                cantidadProductos = cantidadProductos + 1
                break
            case "Campera":
                alert("Hemos agregado una 'campera' a tu carrito!\nEl precio es: $"+campera["precio"])
                campera.agregarCanasto()
                cantidadProductos = cantidadProductos + 1
                break
            case "Finalizar":
                consultaComprar = false
                break
            default:
                alert("No has seleccionado ninguna opción, por favor ingrese correctamente lo que desee!")
        }   
    }
}

// Aplicamos la funcion flecha "interesesCompra" en el subtotal de la compra.

const interesesCompra = (interes) => {
    if (subTotalCompra > 10000) {
        alert("La compra de el/los producto/s tendra un recargo del 21%")
        return subTotalCompra * interes
    } else {
        alert("La compra de el/los producto/s no tendran ningún recargo")
        return subTotalCompra + interes
    }
}

let totalAPagar = 0;

// Aplico un ultimo if en el que si el monto es mayor a 10000 la funcion "interesesCompra" aplica un 21% de interes o sino supera los 10000 no se le agrega ningun interes.

if (subTotalCompra > 10000) {
    totalAPagar = interesesCompra(1.21)
} else {
    totalAPagar = interesesCompra(0)
}

alert(`El monto total a pagar es de $${totalAPagar}.\nSe compro ${cantidadProductos} productos de Moda Kove.`)