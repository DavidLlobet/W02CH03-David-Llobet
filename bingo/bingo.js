function startGame() {
    do {
        nombre = prompt('¿Cómo te llamas?')
        if(nombre.length > 0) {
            alert(`Bienvenido ${nombre}. ¡Vamos a jugar al Bingo!`)
            do {
                generateBingoCardNumbers()
                generateBingoCard()
                console.table(bingoCard)
                confirmBingoCard = prompt('¿Quieres jugar con este cartón? Si es así escribe "si"')
                if (confirmBingoCard.toLowerCase()=='si') {
                    alert('Tu puntuación inicial es 500. Cuantos más turnos tardes en hacer Bingo, más puntos perderás. ¡Mucha suerte!');
                    alert('¡Vamos a sacar números!');
                    bingo();                   
                }            
            } while (confirmBingoCard!='si')
            break;                   
        }
        else if(nombre == "") {
            alert('En necesario introducir un nombre para jugar')
        }
    } while (nombre !== null)   
}

function generateBingoCardNumbers() {
    while (bingoCardNumbers.length<15) {
        let num = Math.floor(Math.random() * 99);
        if((bingoCardNumbers.indexOf(num) === -1) && num!=0) {
            bingoCardNumbers.push(num)
        }
    
    }
}

function generateBingoCard() {
    bingoCard = []
    bingoCard.push(bingoCardNumbers.splice(0, 5))
    bingoCard.push(bingoCardNumbers.splice(0, 5))
    bingoCard.push(bingoCardNumbers.splice(0, 5))
}

function newRandomNumber() {
    
    while (uniqueNumbers.length < 100) {
        let randomNumber = Math.floor(Math.random() * 99) + 1;
        if(uniqueNumbers.indexOf(randomNumber) === -1) {
            uniqueNumbers.push(randomNumber);
            newNumber = randomNumber
            numberOfTurns += 1
            alert(randomNumber)
            break;
        }
    }
}

function numberMatch() {
    for (i=0; i<bingoCard.length; i++) {
        for (j=0; j<bingoCard[i].length; j++) {
            if(newNumber === bingoCard[i][j]) {
                alert(`¡El número ${bingoCard[i][j]} está en el cartón!`)
                bingoCard[i][j] = 'X';
            }
        }
    }
    console.table(bingoCard)
}

function checkLine1() {

    let line = true;
    
        for (j=0; j<bingoCard[0].length; j++) {
            if(bingoCard[0][j] != 'X') {
                line = false
                break;
            }
        }   
    if(line == true){
        alert('¡Línea!')
        stopLine = true
    }   
}

function checkLine2() {

    let line = true;
    
        for (j=0; j<bingoCard[1].length; j++) {
            if(bingoCard[1][j] != 'X') {
                line = false
                break;
            }
        }   
    if(line == true){
        alert('¡Línea!')
        stopLine = true

    }   
}

function checkLine3() {

    let line = true;
    
        for (j=0; j<bingoCard[2].length; j++) {
            if(bingoCard[2][j] != 'X') {
                line = false
                break;
            }
        }   
    if(line == true){
        alert('¡Línea!')
        stopLine = true

    }   
}

function checkBingo() {

    let bingo = true;
    
        for (i=0; i<bingoCard.length; i++) {
            for (j=0; j<bingoCard[i].length; j++) {
                if(bingoCard[i][j] != 'X') {
                    bingo = false
                    break;
                }
            }
            
        }   
    if(bingo == true){
        alert('¡Bingo!')
        stopBingo = true
    }   
}

function newTurn() {
    if(window.confirm('¿Quieres sacar otro número?')) {
        confirmNewTurn = true
    } else {
        confirmNewTurn = false
    }
}

function sortRanking() {
    ranking.sort(function (a, b) {return b.points - a.points});
    console.log('Los jugadores que han obtenido más puntos son:')
    for (i=0; i<ranking.length; i++) {
        console.log(`${ranking[i].person}: ${ranking[i].points}`)
    }
}

function bingo() {

    let points = 500
    stopLine = false
    stopBingo = false

    do {
            newRandomNumber()
            numberMatch()
            if(stopLine == false) { 
                checkLine1()
                checkLine2()
                checkLine3() }
            checkBingo()           
            if(stopBingo == false) {
                newTurn() }
            if(confirmNewTurn == false) {
                break;
            }
    } while (stopBingo == false)
    if(stopBingo == true) {
        alert(`Has completado el Bingo en ${numberOfTurns} turnos.`)
        points -= numberOfTurns*3
        alert(`¡Tu puntuación es ${points}!`)
        let result = {person: "noname", points: 0}
        result.person=nombre
        result.points=points
        ranking.push(result)
    }
    if(confirm('¿Quieres volver a jugar?')) {
        uniqueNumbers = []
        numberOfTurns = 0
        startGame()
    } else {
        sortRanking()
    }   
}

let nombre
let bingoCardNumbers = []
let bingoCard = []
let confirmBingoCard
let uniqueNumbers = []
let newNumber
let confirmNewTurn
let numberOfTurns = 0
let stopLine = false
let stopBingo = false
let ranking = []

startGame()