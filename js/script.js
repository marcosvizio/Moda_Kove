// Probamos si el archivo js esta bien enlazado con un console log y damos la bienvenida al usuario
console.log("Bienvenidos a Moda Kove");

let consultaComprar = confirm("Desea realizar alguna compra por nuestra tienda online?")

let subTotalCompra = 0;

let cantidadProductos = 0;

class productos {
    constructor (producto,precio,stock) {
        this.producto = producto;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    mostrarProducto(){
        alert(`Nuestros productos son:\nProducto: ${this.producto}, Precio: $${this.precio} y Stock: ${this.stock}`)
    }
    agregarCanasto(){
        subTotalCompra = subTotalCompra + this.precio
    }
}

const remera = new productos("Remera", 2500, 10);
const pantalon = new productos("Pantalon", 5000, 20);
const zapatillas = new productos("Zapatillas", 3500, 8);
const gorra = new productos("Gorra", 1000, 5);
const campera = new productos("Campera", 4500, 10);

// Creo un array para ingresar ahi los objetos creados con el class

const listaDeProductos = [];

listaDeProductos.push(remera,pantalon,zapatillas,gorra,campera)

for (const producto of listaDeProductos) {
    console.log(`Tenemos este producto: ${producto.producto} y su precio es: ${producto.precio}`);
}

// Utilizo MAP para tener un filtrado de los productos que su monto es menor a 3000.

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 3000)
console.log(productosBaratos);

// Comienzo el if dependiendo lo que seleccione el usuario en el confirm, mostramos nuestros productos uno por uno y el usuario ingresa que prendas desea comprar

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