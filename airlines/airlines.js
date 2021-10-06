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
        
        let nombre = prompt('¿Cómo te llamas?')
        if(nombre !== null) {
        alert('Bienvenido ' + nombre)
        }
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
        console.log(`Los destinos de los cinco últimos vuelos del día son ${lastFlights}`)}
    


       
