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

const polleraInglesa = new Producto("polleraInglesa", 5000, 1);
const tapadoIngles = new Producto("Tapado Claro Ingles", 10000, 2);
const zapatillasKove = new Producto("Zapatillas Kove", 7000, 3);
const pantalonClaro = new Producto("Pantalon Claro kove", 8500, 4);
const camperaKove = new Producto("Campera Negra Kove", 12000, 5);
const tapadoMarron = new Producto("Tapado Marron Kove", 11000, 6);
