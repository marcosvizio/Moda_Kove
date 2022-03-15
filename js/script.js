// Probamos si el archivo js esta bien enlazado con un console log y damos la bienvenida al usuario

console.log("Bienvenidos a Moda Kove");

// Agrego elementos con la función document.createElement(). NO ES LO RECOMENDABLE USAR, PREFERIBLE HACERLO DESDE EL HTML. 

let parrafoModaKove = document.createElement("p");

parrafoModaKove.innerHTML = "<p>¡Esperamos poder cumplir todas sus expectativas desde la atención al cliente hasta calidad de la ropa!</p>";

document.body.append(parrafoModaKove)

// Hago un constructor

class Producto {
    constructor (producto,precio,stock) {
        this.nombreProducto = producto;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    mostrarProducto(){
        alert(`Nuestros productos son:\nProducto: ${this.nombreProducto}, Precio: $${this.precio} y Stock: ${this.stock}`)
    }
    agregarCanasto(){
        subTotalCompra = subTotalCompra + this.precio
    }
    actualizacionPrecio(){
        this.precio = this.precio * 1.30;
    }
}

// Creo los objetos que necesito gracias al constructor

const remera = new Producto("Remera", 2500, 10);
const pantalon = new Producto("Pantalon", 5000, 20);
const zapatillas = new Producto("Zapatillas", 3500, 8);
const gorra = new Producto("Gorra", 1000, 5);
const campera = new Producto("Campera", 4500, 10);

// Creo un array para ingresar ahi los objetos creados con el class

const listaDeProductos = [];
listaDeProductos.push(remera,pantalon,zapatillas,gorra,campera)
console.log(listaDeProductos[1].nombreProducto);

// Utilizo el FOR... OF para mostrar todos los productos del ARRAY "listaDeProductos" al usuario

for (const mostrarProducto of listaDeProductos) {
    console.log(`Tenemos este producto: ${mostrarProducto.nombreProducto} y su precio es: $${mostrarProducto.precio}`);
}

// Utilizo el FOR... OF para actualizar los precios de todos los productos

for (const precioNuevo of listaDeProductos) {
    precioNuevo.actualizacionPrecio();
}

// Utilizo el metodo FILTER para tener un filtrado de los productos que su monto es menor a 3000.

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

// Uso addEventListener para mostrar mensaje en consola y uso DOM para mostrar productos

const btn1 = document.getElementById("productosBoton")

btn1.onclick = () => {
    for (const producto of listaDeProductos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>Producto: ${producto.nombreProducto}</h3>
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
    if (productoBuscado == "Remera"){
        let contenedor = document.createElement("div")
        contenedor.innerHTML = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[0].nombreProducto} y su precio es: $${listaDeProductos[0].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Pantalon") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[1].nombreProducto} y su precio es: $${listaDeProductos[1].precio}.</p>`
        console.log(contenedor);
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Zapatillas") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[2].nombreProducto} y su precio es: $${listaDeProductos[2].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Gorra") {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =  
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${listaDeProductos[3].nombreProducto} y su precio es: $${listaDeProductos[3].precio}.</p>`
        document.body.appendChild(contenedor)
    } else if (productoBuscado == "Campera") {
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

// Comienzo el if dependiendo lo que seleccione el usuario en el confirm, mostramos nuestros productos uno por uno y el usuario ingresa que prendas desea comprar

let consultaComprar = confirm("Desea realizar alguna compra por nuestra tienda online?");

let subTotalCompra = 0;

let cantidadProductos = 0;

if (consultaComprar == false) {
    alert("Gracias por visitar la tienda web de Mode Kobe!")
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