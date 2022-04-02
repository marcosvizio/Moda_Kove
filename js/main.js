// CONSTRUCTOR DE OBJETOS

class Producto {
    constructor (nombreProducto,precio,id) {
        this.producto = nombreProducto;
        this.precio = parseFloat(precio);
        this.id = parseInt(id)
    }
    mostrarProducto(){
        alert(`Nuestros productos son:\nProducto: ${this.producto}, Precio: $${this.precio} y ID: ${this.id}`)
    }
    agregarCanasto(){
        subTotalCompra = subTotalCompra + this.precio
    }
}

// CREANDO OBJETOS GRACIAS AL CONSTRUCTOR

const remera = new Producto("Remera Levis", 2500, 1);
const pantalon = new Producto("Pantalon Jean Kove", 5000, 2);
const zapatillas = new Producto("Zapatillas Kove", 3500, 3);
const gorra = new Producto("Gorra Kove", 1000, 4);
const campera = new Producto("Campera Kove", 4500, 5);

// ARRAY CON TODOS LOS OBJETOS CREADOS

const listaDeProductos = [];
listaDeProductos.push(remera,pantalon,zapatillas,gorra,campera)

// METODO FILTER AL ARRAY

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

// CARRITO DE COMPRAS

let carritoIcono = document.querySelector('#cart-icon')
let carrito = document.querySelector('.cart')
let carritoClose = document.querySelector('#close-cart')

// CARRITO ABIERTO

carritoIcono.onclick = () => {
    carrito.classList.add("activo")
};

// CARRITO CERRADO

// BUSCADOR PAGINA

const btn2 = document.getElementById("buscadorBoton")

btn2.addEventListener("click", () => {

    const input = document.getElementById("entrada")
    const productoBuscado = input.value
    const buscadorContainer = document.querySelector(".buscador-productos")

    const resultado = listaDeProductos.find((buscaProductos) => 
    buscaProductos.producto === productoBuscado)

    if (resultado) {

        let contenedor = document.createElement("div")
        let contenido = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${resultado.producto} y su precio es: $${resultado.precio}.</p>`
        contenedor.innerHTML = contenido
        buscadorContainer.append(contenedor)
    
    } else {

        let contenedor = document.createElement("div")
        let contenido = 
        `<h3>No existe ese producto!</h3>`
        contenedor.innerHTML = contenido
        buscadorContainer.append(contenedor)

    }

})

// Comienzo el if dependiendo lo que seleccione el usuario en el confirm, mostramos nuestros productos uno por uno y el usuario ingresa que prendas desea comprar

let consultaComprar = confirm("Desea realizar alguna compra por nuestra tienda online?");

let subTotalCompra = 0;

let carritoProductos = 0;

if (consultaComprar == false) {

    alert("Gracias por visitar la tienda web de Mode Kove!")

} else {

    remera.mostrarProducto();
    pantalon.mostrarProducto();
    zapatillas.mostrarProducto();
    gorra.mostrarProducto();
    campera.mostrarProducto();

    const usuario = {
        nombre : prompt("Ingrese un nombre de usuario para guardar su progreso en la tienda."),
        edad : parseInt(prompt("Ingrese su edad."))
    }

    localStorage.setItem("Usuario", JSON.stringify(usuario))

    while (consultaComprar == true) {

        let consultaPrenda = prompt("Que prenda desea comprar?\nEscriba 'Remera', 'Pantalon', 'Zapatillas', 'Gorra', 'Campera' o 'Finalizar' para terminar la compra!")

        switch (consultaPrenda) {

            case "Remera":
                alert("Hemos agregado una 'remera' a tu carrito!\nEl precio es: $"+remera["precio"])
                remera.agregarCanasto()
                carritoProductos++ //Operador ++
                break

            case "Pantalon":
                alert("Hemos agregado un 'pantalon' a tu carrito!\nEl precio es: $"+pantalon["precio"]);
                pantalon.agregarCanasto();
                carritoProductos++
                break

            case "Zapatillas":
                alert("Hemos agregado unas 'zapatillas' a tu carrito!\nEl precio es: $"+zapatillas["precio"])
                zapatillas.agregarCanasto()
                carritoProductos++
                break

            case "Gorra":
                alert("Hemos agregado una 'gorra' a tu carrito!\nEl precio es: $"+gorra["precio"])
                gorra.agregarCanasto()
                carritoProductos++
                break

            case "Campera":
                alert("Hemos agregado una 'campera' a tu carrito!\nEl precio es: $"+campera["precio"])
                campera.agregarCanasto()
                carritoProductos++
                break

            case "Finalizar":
                consultaComprar = false
                // Aplicamos la funcion flecha "finalizacionCompra" en el subtotal de la compra.
                const finalizacionCompra = () => {

                    if (subTotalCompra > 10000) {
                        let interes = 1.21
                        alert("La compra de el/los producto/s tendra un recargo del 21%")
                        let totalAPagar = subTotalCompra * interes
                        alert(`El total a pagar es $${totalAPagar} y se esta llevando ${carritoProductos} productos de Moda Kove`)
                        function consultaPagar() {
                            let edad = usuario.edad // Desestructuración
                            edad < 18 ? alert("No puedes realizar la compra por favor llama a tu padre, madre o tutor para finalizar la compra.") : alert("El pago ha sido ingresado!") // Operador ternario
                        }
                        consultaPagar()
                        return totalAPagar

                    } else {
                        let interes = 0
                        alert("La compra de el/los producto/s no tendran ningún recargo")
                        let totalAPagar = subTotalCompra + interes
                        alert(`El total a pagar es $${totalAPagar} y se esta llevando ${carritoProductos} productos de Moda Kove`)
                        function consultaPagar() {
                            let edad = usuario.edad // Desestructuración 
                            edad < 18 ? alert("No puedes realizar la compra por favor llama a tu padre, madre o tutor para finalizar la compra.") : alert("El pago ha sido ingresado!") // Operador ternario
                        }
                        consultaPagar()
                        return totalAPagar

                    }
                }
                finalizacionCompra(0)
                break
            default:
                alert("No has seleccionado ninguna opción, por favor ingrese correctamente lo que desee!")   
        }
    }
}

