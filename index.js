function saludar() {
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenida/o " + nombre)
}
saludar()

function pregunta() {
    let catalogo = prompt("¿Desea ver nuestro catalogo de productos? (si o no)")
    if (catalogo == "si") {
        comprar()
    }else if (catalogo == "no" ) {
        alert("Gracias por pasarse")
    } else {
        alert("Ingrese una opcion valida")
        pregunta()
    }
}
pregunta() 

function agregar() {
    let vermas = prompt("¿Desea ver algo mas? (si o no)")
    if(vermas == "si"){
        comprar()
    }else if(vermas == "no"){
    }else{
        alert("Ingrese una opción valida")
        agregar()
    }
}


function comprar() {
    let productos = prompt("Que desea ver \n 1. Zapatillas \n 2. Remeras \n 3. Buzos")
    if(productos == 1 || productos == "ZAPATILLAS" || productos == "zapatillas" || productos == "Zapatillas"){
        zapatillas()
    }else if(productos == 2 || productos == "REMERAS" || productos == "remeras" || productos == "Remeras"){
        remeras()
    }else if(productos == 3 || productos == "BUZOS" || productos == "buzos" || productos == "Buzos"){
        buzos()
    }else{
        alert("Ingrese una opcion valida")
        comprar()
    }
}

function pagar () {
    let metodoPago = prompt("Efectivo (20% de descuento) o Tarjeta")
    if (metodoPago == "efectivo" || metodoPago == "Efectivo" || metodoPago == "EFECTIVO" ) {
        let total = prompt("Ingrese el total de su compra")
        let descuento = total * 0.20
        let precioFinal = total - descuento
        alert("Con descuento adquirido queda en un total de: $" + precioFinal)
    } else if (metodoPago == "tarjeta" || metodoPago == "Tarjeta" || metodoPago == "TARJETA" ) {
        let precioFinal = prompt("Ingrese el total de su compra")
        alert("Con tarjeta queda en un total de: $" + precioFinal)
    }else {
        alert("Ingrese efectivo o tarjeta")
        pagar () 
    }
}

function zapatillas() {
    let calzados = prompt("\n 1. Jordan Retro 4 Black Cat \n 2. Jordan Retro 4 Off White \n 3. Dunk Low Panda \n 4. Dunk Off White")
    if (calzados == 1 || calzados == "1" || calzados == "Jordan Retro 4 Black Cat" || calzados == "JORDAN RETRO 4 BLACK CAT" || calzados == "jordan retro 4 black cat"  ) {
        alert("Usted eligio las Jordan Retro 4 Black Cat, su precio es de: $100.000")
        agregar()
        pagar () 
    } else if (calzados == 2 || calzados == "2" || calzados == "Jordan Retro 4 Off White"  || calzados == "JORDAN RETRO 4 OFF WHITE" || calzados == "jordan retro 4 off white" ) {
        alert("Usted eligio las Jordan Retro 4 Off White, su precio es de: $220.000")
        agregar()
        pagar () 
    } else if (calzados == 3 || calzados == "3" || calzados == "Dunk Low Panda" || calzados == "DUNK LOW PANDA" || calzados == "dunk low panda" ) {
        alert ("Usted eligio las Dunk Low Panda, su precio es de: $60.000")
        agregar()
        pagar () 
    } else if (calzados == 4 || calzados == "4" || calzados == "Dunk Off White" || calzados == "DUNK OFF WHITE" || calzados == "dunk off white") {
        alert ("Usted eligio las Dunk Off White, su precio es de: $180.000")
        agregar()
        pagar () 
    } else {
        alert("Ingrese una opcion valida")
        zapatillas()
    }
}

function remeras () {
    let remera = prompt ("\n 1. Remera Essentialls \n 2. Remera Supreme \n 3. Remera Zara \n 4. Remera North Face")
    if (remera == 1 || remera == "1" || remera == "Remera Essentialls" || remera == "REMERA ESSENTIALLS" || remera == "remera essentialls" ) {
        alert ("Usted eligio Remera Essentialls, su precio es de: $40.000")
        agregar()
        pagar () 
    } else if (remera == 2 || remera == "2" || remera == "Remera Supreme" || remera == "REMERA SUPREME" || remera == "remera supreme" ) {
        alert ("Usted eligio Remera Supreme, su precio es de: $50.500")
        agregar()
        pagar () 
    } else if (remera == 3 || remera == "3" || remera == "Remera Zara" || remera == "REMERA ZARA" || remera == "remera zara") {
        alert ("Usted eligio Remera Zara, su precio es de: $8.000")
        pagar () 
        agregar()
    } else if (remera == 4 || remera == "4" || remera == "Remera North Face" || remera == "REMERA NORTH FACE" || remera == "remera north face") {
        alert ("Usted eligio Remera North Face, su precio es de: $24.000")
        agregar()
        pagar () 
    } else {
        alert ("Ingrese una opcion valida")
        remeras()
    }
}

function buzos() {
    let hoodies = prompt("\n 1. Buzo Supreme \n 2. Buzo Nike \n 3. Buzo Jordan \n 4. Buzo Off White")
    if (hoodies == 1 || buzos == "1" || buzos == "Buzo Supreme" || buzos == "BUZO SUPREME" || buzos == "buzo supreme"  ) {
        alert("Usted eligio Buzo Supreme, el precio es de: $90.000") 
        agregar()
        pagar () 
    } else if (hoodies == 2 || hoodies == "2" || hoodies == "Buzo Nike" || hoodies == "BUZO NIKE" || hoodies == "buzo nike") {
        alert("Usted eligio Buzo Nike, el precio es de: $20.000")
        agregar()
        pagar () 
    } else if (hoodies == 3 || hoodies == "3" || hoodies == "Buzo Jordan" || hoodies == "BUZO JORDAN" || hoodies == "buzo jordan") {
        alert("Usted eligio Buzo Jordan, el precio es de: $22.000")
        agregar()
        pagar () 
    } else if (hoodies == 4 || hoodies == "4" || hoodies == "Buzo Off White" || hoodies == "BUZO OFF WHITE" || hoodies == "buzo off white" ) {
        alert("Usted eligio Buzo Off White, el precio es de: $110.000")
        agregar()
        pagar () 
    } else {
        alert ("Ingrese una opcion valida")
        buzos()
    }
}


