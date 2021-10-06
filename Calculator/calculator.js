const results = [];
let val1 = prompt("Please enter first number");
let val2 = prompt("Please enter second number");

if(!Number.isNaN(parseInt(val1))) {
    val1 = parseInt(val1)
}

if(!Number.isNaN(parseInt(val2))) {
    val2 = parseInt(val2)
}

calculator(val1, val2)

function division(num1, num2){
    let div = (num1 / num2);
    
    if(!Number.isInteger(div)){
        div = div.toFixed(3);
    }

    return div;
}

function squareRoot(num1) {
    let sqrt = Math.sqrt(num1);

    if(!Number.isInteger(sqrt)) {
        sqrt = sqrt.toFixed(3);
    }

    return sqrt
}

function calculator(num1, num2) {
    
    if((num1 === "" || num1 === null) && (num2 === "" || num2 === null)) {
        console.log('No has introducido ningún número')
    } 
    else if(num1 === "" || num1 === null) {
        console.log('La raiz cuadrada de '+ num2 +' es '+ squareRoot(num2))
    }
    else if(num2 === "" || num2 === null) {
        console.log('La raiz cuadrada de '+ num1 +' es '+ squareRoot(num1))
    }
    else if(isNaN(num1) || isNaN(num2)) {
        console.log('El valor introducido no es un número');
    }
    else {
        results.push((num1 + num2))
        results.push((num1 - num2))
        results.push((num1 * num2))
        results.push(division(num1, num2))
    }
}

for (let i=0; i<results.length; i++) {
    switch(i) {
        case 0: console.log(`El resultado de la suma es ${results[i]}`)
        break;
        case 1: console.log(`El resultado de la resta es ${results[i]}`)
        break;
        case 2: console.log(`El resultado de la multiplicación es ${results[i]}`)
        break;
        case 3: console.log(`El resultado de la división es ${results[i]}`) 
        break;     
    }
}