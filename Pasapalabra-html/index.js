const questions = [

    [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "armario", status: 0, question: "CON LA A. Mueble con puertas y estantes o perchas para guardar ropa y otros objetos"},
    { letter: "a", answer: "alcalde", status: 0, question: "CON LA A. Presidente del ayuntamiento y primera autoridad gubernativa en un municipio"}],

    [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "botanica", status: 0, question: "CON LA B. Ciencia que trata de los vegetales"},
    { letter: "b", answer: "breva", status: 0, question: "CON LA B. Higo grande de la primera cosecha de las higueras"}],

    [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "cuatrimestre", status: 0, question: "CON LA C. Espacio de cuatro meses"},
    { letter: "c", answer: "carisma", status: 0, question: "CON LA C. Especial capacidad de algunas personas para atraer o fascinar"}],

    [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "dios", status: 0, question: "CON LA D. Deidad a que dan o han dado culto las diversas religiones politeístas"},
    { letter: "d", answer: "dinastia", status: 0, question: "CON LA D. Serie de reyes o soberanos de un país pertenecientes a la misma familia"}],

    [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "esmeralda", status: 0, question: "CON LA E. Gema transparente muy apreciada, variedad del berilo, teñida de verde por el óxido de cromo"},
    { letter: "e", answer: "economia", status: 0, question: "CON LA E. Estado de riqueza de un país, de una persona o de una entidad cualquiera"}],

    [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "festin", status: 0, question: "CON LA F. Banquete espléndido"},
    { letter: "f", answer: "fontanero", status: 0, question: "CON LA F. Persona que instala y arregla conducciones de agua o grifos"}],

    [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "gingival", status: 0, question: "CON LA G. Perteneciente o relativo a las encías"},
    { letter: "g", answer: "gatazo", status: 0, question: "CON LA G. Nombre del territorio donde tuvo lugar la batalla de la guerra civil ecuatoriana que provocó la revolución liberal en 1985"}],

    [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "homero", status: 0, question: "CON LA H. Nombre del poeta griego considerado el autor de la Ilíada y la Odísea"},
    { letter: "h", answer: "hervir", status: 0, question: "CON LA H. Producir un líquido burbujas por la acción del calor"}],

    [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "incendio", status: 0, question: "CON LA I. Fuego grande que destruye lo que no debería quemarse"},
    { letter: "i", answer: "indurain", status: 0, question: "CON LA I. Apellido del ciclista español que ganó cinco tours de Francia de 1991 a 1995"}],

    [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jurasico", status: 0, question: "CON LA J. Se dice del segundo periodo de la era mesozoica caracterizado por el apogeo de los dinosaurios"},
    { letter: "j", answer: "joven", status: 0, question: "CON LA J. Se aplica a la persona, animal o planta de poca edad que no ha alcanzado la madurez"}],

    [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "lampara", status: 0, question: "CON LA L. Utensilio o aparato que colgado o sostenido sobre un pie sirve de soporte a una o varias luces artificiales"},
    { letter: "l", answer: "lamento", status: 0, question: "CON LA L. Queja con llanto y otras muestras de afección"}],

    [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "moeris", status: 0, question: "CON LA M. Antiguo lago de Egipto que estaba situado en la superficie que ocupa actualmente el lago Birket Qarun"},
    { letter: "m", answer: "menaje", status: 0, question: "CON LA M. Conjunto de muebles, utensilios y ropas de que está provista una casa"}],

    [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "nudo", status: 0, question: "CON LA N. Lazo que se estrecha y cierra de modo que con dificultad se puede soltar por sí solo"},
    { letter: "n", answer: "nereida", status: 0, question: "CON LA N. Cada una de las ninfas del mar que eran jóvenes y hermosas de medio cuerpo arriba y peces en lo restante"}],

    [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo"},
    { letter: "ñ", answer: "albariño", status: 0, question: "CONTIENE LA Ñ. Vino blanco afrutado originario de Galicia"},
    { letter: "ñ", answer: "champiñon", status: 0, question: "CONTIENE LA Ñ. Variedad de hongos muy usada como comestible"}],

    [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "oferta", status: 0, question: "CON LA O. Puesta a la venta de un determinado producto rebajado de precio"},
    { letter: "o", answer: "ovillo", status: 0, question: "CON LA O. Bola o lío que se forma devanado hilo de lino, algodón, seda o lana"}],

    [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "psicofonia", status: 0, question: "CON LA P. Grabación de sonidos atribuidos a espíritus del más allá"},
    { letter: "p", answer: "polka", status: 0, question: "CON LA P. Danza de origen polaco de movimiento rápido y en compás de dos por cuatro"}],

    [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "aquelarre", status: 0, question: "Contiene la Q. Reunión nocturna de brujas y brujos"},
    { letter: "q", answer: "tabaquillo", status: 0, question: "Contiene la Q. Movimiento oscilatorio de los automóviles por defecto de la dirección"}],

    [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "r", answer: "reeves", status: 0, question: "CON LA R. Apellido del actor que interpretó el papel de Neo en la trilogía Matrix"},
    { letter: "r", answer: "rapido", status: 0, question: "CON LA R. Que se mueve, se hace o sucede a gran velocidad, muy deprisa"}],

    [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "supervivencia", status: 0, question: "CON LA S. Instinto de los animales"},
    { letter: "s", answer: "saldo", status: 0, question: "CON LA S. Cantidad positiva o negativa que resulta de una cuenta"}],

    [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "tabasco", status: 0, question: "CON LA T. Salsa de color rojo muy picante hecha con pimienta y ají"},
    { letter: "t", answer: "teatro", status: 0, question: "CON LA T. Edificio local destinado a la representación de obras dramáticas"}],

    [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "unplugged", status: 0, question: "CON LA U. Se aplica al concierto de música pop o rock en el que no se emplean instrumentos eléctricos"},
    { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Elemento químico metálico que es el primer elemento de una serie radiactiva"}],

    [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "vehiculo", status: 0, question: "CON LA V. Medio de transporte de personas o cosas"},
    { letter: "v", answer: "valades", status: 0, question: "CON LA V. Apellido del escritor autor del cuento 'Las raíces irritadas'"}],

    [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "complexion", status: 0, question: "CONTIENE LA X. Conjunto de características físicas de un individuo que determina su aspecto, fuerza y vitalidad"},
    { letter: "x", answer: "extrarradio", status: 0, question: "CONTIENE LA X. Parte o zona exterior que rodea el casco y radio de una población"}],

    [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "calypso", status: 0, question: "CONTIENE LA Y. Título de la novela de inspiración autobiográfica del humorista David Sedaris y publicada en 2018"},
    { letter: "y", answer: "ayer", status: 0, question: "CONTIENE LA Y. Adverbio que designa el día que precede inmediatamente al de hoy"}],

    [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zurrar", status: 0, question: "CON LA Z. Coloquialmente castigar a alguien, especialmente con azotes o golpes"},
    { letter: "z", answer: "zozobrar", status: 0, question: "CON LA Z. Peligrar una embarcación por la fuerza y contraste de los vientos"}]]

let firstName
let ready = false
let chosenQuestions = []
let i = 0
let correctAnswers = 0
let wrongAnswers = 0
let ranking = []
let element = 0;
let timeLeft = 150;
let startClock = 0;
let stopCountDown = false;

function enterName() {
    ready = false;
    do {
        firstName = prompt('¿Cómo te llamas?')
        if(firstName != "" && firstName != null) {
            alert(`Bienvenido ${firstName}. ¡Vamos a jugar a Pasapalabra!`);
            ready = true;
            generateQuestions();
            timeLeft = 150;
            if(startClock == 0) {
                countdown();
                startClock = 1;
            }
            pasapalabra();
            break;          
        }
        else if(firstName == "" || firstName == null) {
            alert('En necesario introducir un nombre para jugar')
        }
    } while (ready == false)   
}

function generateQuestions() {
    chosenQuestions = [];
    for (let i=0; i<questions.length; i++) {
        let question = questions[i][Math.floor(Math.random() * questions[i].length)];
        chosenQuestions.push(question)
    }
}

function pasapalabra() {
 
    if(chosenQuestions.length > 0) {
        document.getElementById('screen').innerHTML = chosenQuestions[i].question;
    } else {
        results();
    }
}

document.getElementById('envia').onclick = () => {

    if(document.getElementById('answer').value.toLowerCase()==chosenQuestions[i].answer) {
        document.getElementById('message').innerHTML = '¡Correcto! Ganas un punto.';
        correctAnswers += 1;
        document.getElementById('count').innerHTML = correctAnswers;
        document.getElementById('answer').value = "";
        document.getElementById(chosenQuestions[i].letter).style.backgroundColor = "green";
    }

    else if(document.getElementById('answer').value != chosenQuestions[i].answer) {
        document.getElementById('message').innerHTML = `No es correcto. La respuesta correcta era "${chosenQuestions[i].answer}"`;
        wrongAnswers += 1;
        document.getElementById('answer').value = "";
        document.getElementById(chosenQuestions[i].letter).style.backgroundColor = "red";
    }

    if(chosenQuestions[i].letter == chosenQuestions[chosenQuestions.length-1].letter) {
        chosenQuestions.splice(i, 1);
        i=0;

    } else {
        chosenQuestions.splice(i, 1);
    }

    pasapalabra();
}

document.getElementById('pasapalabra').onclick = () => {
    if(chosenQuestions[i].letter == chosenQuestions[chosenQuestions.length-1].letter) {
        i=0;
        pasapalabra();
    } else {
        i++;
        pasapalabra();
    }
}

document.getElementById('end').onclick = () => {

    document.getElementById('message').innerHTML = `Has contestado correctamente ${correctAnswers} palabras y 
    has fallado ${wrongAnswers} palabras.`
    if(confirm('¿Quieres volver a jugar?')) {
        i=0;
        correctAnswers = 0;
        wrongAnswers = 0;
        document.getElementById('count').innerHTML = 0;
        resetRosco();
        enterName();
    } else {
        endGame();
        stopCountDown = true;
        sortRanking();
    }     
}

function results() {

        document.getElementById('message').innerHTML = `Has contestado correctamente ${correctAnswers} palabras 
        y has fallado ${wrongAnswers} palabras.`; 
        let result = {person: "noname", answers: 0};
        result.person=firstName;
        result.answers=correctAnswers;
        ranking.push(result);
        if(confirm('¿Quieres volver a jugar?')) {
            if(timeLeft == 0) {
                startClock = 0;
            }
            correctAnswers = 0;
            wrongAnswers = 0;
            document.getElementById('count').innerHTML = 0;
            resetRosco();
            enterName();
        } else {
            endGame();
            stopCountDown = true;
            sortRanking();
        }
}

function sortRanking() {
    ranking.sort(function (a, b) {return b.answers - a.answers});
    let html = "<p>Los jugadores que han contestado más preguntas correctamente son:</p>";
    for (i=0; i<ranking.length; i++) {
        html += `<p style="margin:2px">${ranking[i].person}: ${ranking[i].answers}</p>`;
    }
    document.getElementById('message').innerHTML = html;
}

function resetRosco() {
    for(j=0; j<document.getElementsByClassName("letter").length; j++) {
        document.getElementsByClassName("letter")[j].style.backgroundColor="blue";
    }
}

document.getElementById('play').onclick = () => {
    enterName();
}

function endGame() {
    document.getElementById('play').disabled = true;
    document.getElementById('end').disabled = true;
    document.getElementById('envia').disabled = true;
    document.getElementById('pasapalabra').disabled = true;
}

function countdown() {
	timeLeft--;
	document.getElementById("timer").innerHTML = String( timeLeft );
	if (timeLeft > 0 && stopCountDown == false) {
		setTimeout(countdown, 1000);
	}
    else if (timeLeft == 0 && stopCountDown == false) {
        alert('¡Se ha acabado el tiempo!');
        i=0;
        results();
    }
    else if (stopCountDown == true) {
        return;
    }
};

