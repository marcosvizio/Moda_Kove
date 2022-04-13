// ARRAY CON TODOS LOS OBJETOS CREADOS

const listaDeProductos = [];
listaDeProductos.push()
console.log(listaDeProductos);

// METODO FILTER AL ARRAY

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

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

// Implemento FETCH 

const lista = document.getElementById("comentariosPagina") 

fetch('../data.json')
    .then( (res) => res.json())
    .then( data => {
        data.forEach((comentario) => {
            const listaComentarios = document.createElement("div")
            listaComentarios.innerHTML = `
            <p>USUARIO: ${comentario.usuario}</p>
            <p>ARTICULO: ${comentario.Compra}</p>
            <p class="comentarios__container--parrafoComentario">COMENTARIO: ${comentario.Comentario}</p>`
            lista.append(listaComentarios)
        });
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

        let consultaUsuario = prompt("Que prenda desea comprar?\nEscriba 'Remera', 'Pantalon', 'Zapatillas', 'Gorra', 'Campera' o 'Finalizar' para terminar la compra!")

        const prendaSeleccionada = listaDeProductos.find((consultaPrenda) => consultaPrenda.producto === consultaUsuario)

        if (prendaSeleccionada) {
            alert(`Hemos agregado una '${prendaSeleccionada.producto}' a tu carrito!\nEl precio es: $${prendaSeleccionada.precio}`)
            prendaSeleccionada.agregarCanasto()
            carritoProductos++ //Operador ++
        } else if (consultaUsuario == "Finalizar") {
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
        } else {
            alert("No has seleccionado ninguna opción, por favor ingrese correctamente lo que desee!")
        }
    }
}