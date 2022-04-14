// CONSTRUCTOR DE OBJETOS

class Producto {
    constructor (nombreProducto,precio,img,id) {
        this.nombreProducto = nombreProducto;
        this.precio = parseFloat(precio);
        this.img = img;
        this.id = parseInt(id)
    }
}

// CREANDO OBJETOS GRACIAS AL CONSTRUCTOR

const polleraInglesa = new Producto("Pollera Inglesa Kove", 7000, "pollera_kove.jpg", 1);
const tapadoIngles = new Producto("Tapado Claro Ingles Kove", 15500, "tapado_kove.jpg", 2);
const zapatillasKove = new Producto("Zapatillas Kove", 9500, "zapatillas_kove.jpg", 3);
const pantalonClaro = new Producto("Pantalon Claro kove", 11500, "pantalon_jean.jpg", 4);
const camperaKove = new Producto("Campera Negra Kove", 12500, "campera_negra.jpg", 5);
const tapadoMarron = new Producto("Tapado Marron Kove", 15000, "tapado_marron.jpg", 6);
const camperaUrbanaBlanca = new Producto("Campera Urbana Blanca Kove", 14000, "campera_urbanaBlanca-kove.jpg", 7);
const sueterMarronKove = new Producto("Sueter Marron Kove", 7500, "sueter_marron-kove.jpg",8)
const pantalonCuadrilleClaro= new Producto ("Pantalon Cuadrille Claro Kove", 10500,"pantalon_cuadrilleClaro-kove.jpg", 9)
