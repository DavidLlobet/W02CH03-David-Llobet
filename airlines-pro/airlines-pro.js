function addFlights() { 

    for (let newFlightId = 11; flights.length < 15; newFlightId++) {

        let addFlights = {}
        addFlights.id = newFlightId
        newFlightDestination = prompt('Introduzca el destino del vuelo');
        addFlights.to = newFlightDestination
        newFlightProcedence = prompt('Introduzca la procedencia del vuelo')
        addFlights.from = newFlightProcedence
        do {
            newFlightCost = prompt('Introduzca el coste del vuelo')
            if(!isNaN(parseInt(newFlightCost))) {
                addFlights.cost = parseInt(newFlightCost)
                break;
            } else if(typeof newFlightCost == 'string') {
                alert('El valor introducido no es válido');
            }
            else if(newFlightCost == null) {
                alert('Es necesario introducir un precio')
            }
        } while (typeof newFlightCost != 'number')
        if(confirm('¿El vuelo realiza escala?')) {
            addFlights.scale = true
        } else {
            addFlights.scale = false
        }
        flights.push(addFlights);
        showFlights();
        if(confirm('¿Quieres introducir más vuelos?')) {
            if(flights.length<15) {} 
            else {
                alert('No puedes introducir más vuelos')
            }   
        } else { break }
    }
}

function showFlights() {
    for (let i = 0; i<flights.length; i++) {

        if(flights[i].scale == true) {
            vuelosConEscala.push(`${flights[i].from}-${flights[i].to}`)
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala`)}
        else {
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala`)}
        }
}

function eraseFlights() {

    let removeFlight

    do {
        removeFlight = prompt('Por favor, indica el identificador del vuelo que deseas eliminar')
        if(!isNaN(parseInt(removeFlight))) {
            removeFlight = parseInt(removeFlight)
            let index = flights.findIndex(function (flight) {return flight.id == removeFlight});
            if(index != -1){
                alert(`El vuelo con identificador ${flights[index].id} ha sido eliminado.`)
                flights.splice(index, 1)
            }else{
                alert('El número introducido no se corresponde con ningún vuelo')
            }
            if(confirm('¿Desea eliminar algún otro vuelo?')) {                         
            }
            else { break } 
            
        } else if(typeof removeFlight == 'string') {
            alert('El valor introducido no es válido');
        }
        
    } while (removeFlight !== null)
} 

function expensiveFlights() {
    let expensive = []
    for (let i = 0; i<flights.length; i++) {
        if(flights[i].cost > precio) {
            expensive.push(`\n${flights[i].from}-${flights[i].to} (${flights[i].cost}€)`)        
        }
    }
    console.log(`Los vuelos que son más caros de ${precio}€ son ${expensive}`)
}

function cheapFlights() {
    let cheap = []
    for (let i = 0; i<flights.length; i++) {
        if(flights[i].cost < precio) {
            cheap.push(`\n${flights[i].from}-${flights[i].to} (${flights[i].cost}€)`)        
        }
    }
    console.log(`Los vuelos que son más baratos de ${precio}€ son ${cheap}`)
}

function samePrice() {
    let same = []
    for (let i = 0; i<flights.length; i++) {
        if(flights[i].cost == precio) {
            same.push(`\n${flights[i].from}-${flights[i].to}`)        
        }
    }
    console.log(`Los vuelos que cuestan exactamente ${precio}€ son ${same}`)
}

function buyFlights() {

    let flight

    do {
        flight = prompt('Por favor, introduce el número del vuelo que deseas comprar')
        if(!isNaN(parseInt(flight))) {
            if(flight>flights.length-1) {
            alert('El vuelo con el número que ha indicado no existe') 
            }
            else if(flight<flights.length) { 
                for (i=0; i<flights.length; i++) {
                    if(flights[i].id==flight) {
                        alert(`Ha escogido el vuelo ${flights[i].from}-${flights[i].to}. Gracias por su compra, vuelva pronto`)
                    }
                }
            }
            if(confirm('¿Desea comprar algún otro vuelo?')) {                         
                }
                else { break }   
        }
                       
        else if(typeof flight == 'string') {
                alert('El valor introducido no es válido')
            }                  
    } while (flight !== null)
}

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
        
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
        
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
        
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
        
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
        
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
        
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
        
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
        
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
        
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
        
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
      
    let nombre
    
    do {
        nombre = prompt('¿Cómo te llamas?')
        if(nombre.length > 0) {
            alert('Bienvenido ' + nombre)
            break; 
        }
        else if(nombre == "") {
            alert('Es necesario introducir un nombre')
        }
    } while (nombre != null)

    let totalCost = 0
    let vuelosConEscala = []
    let lastFlights = []

    for (let i = 0; i<flights.length; i++) {
        totalCost += flights[i].cost

        if(flights[i].scale == true) {
            vuelosConEscala.push(`${flights[i].from}-${flights[i].to}`)
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala`)}
        else {
            console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala`)}
        }
   
    let costAverage = Math.round(totalCost/flights.length)

    console.log(`El precio medio de todos los vuelos es de ${costAverage}€`)
    console.log(`Los vuelos que realizan escala son ${vuelosConEscala}`)

    for (let i = 0; i<flights.length; i++) {
        if(flights.indexOf(flights[i])>=flights.length-5) {
            lastFlights.push(flights[i].to)
        }
    }
    console.log(`Los destinos de los cinco últimos vuelos del día son ${lastFlights}`)
       
let registro
let precio

    if(nombre != null) {
        do {
            registro = prompt('Por favor, escribe si eres admin o user')
            if(registro.toLowerCase() =='admin') {
                if(confirm('¿Quieres introducir más vuelos?')) {
                    addFlights() }
                if(confirm('¿Deseas eliminar algún vuelo?')) {
                eraseFlights() }
                break;
            }
            else if(registro.toLowerCase() =='user') {
                do {
                    precio = prompt('Por favor, introduce un precio para empezar a buscar vuelos')
                    if(!isNaN(parseInt(precio))) {
                        if(confirm('¿Deseas ver los vuelos que cuestan más que el valor que has introducido?')) {
                            expensiveFlights() }
                        if(confirm('¿Deseas ver los vuelos que cuestan menos que el valor que has introducido?')) {
                            cheapFlights() }
                        if(confirm('¿Deseas ver los vuelos que tienen el mismo precio que el valor que has introducido?')) {
                            samePrice() }
                        if(confirm('¿Quieres comprar un vuelo?')) {
                            buyFlights() }
                            break; 
                    }
                    else if(typeof precio == 'string') {
                        alert('El valor introducido no es válido')
                    }
                } while (precio !== null)
                break;
            }     
        
            else if(registro!==null) {
                    alert('El valor introducido no es válido')
            }
            
        } while (registro !== null)
    }


