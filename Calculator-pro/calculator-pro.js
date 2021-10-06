function squareRoot(num1) {
    let sqrt = Math.sqrt(num1);

    if(!Number.isInteger(sqrt)) {
        sqrt = sqrt.toFixed(3)
    }
    return sqrt
}

function division(num1, num2) {
    let divi = (num1 / num2);

    if(!Number.isInteger(divi)) {
        divi = divi.toFixed(3)
    }
    return divi
}

function calculatorPro() {
    let newNumber;
    let numberList = [];

    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        if(!isNaN(parseInt(newNumber))) {
            numberList.push(parseInt(newNumber))
        } else if(typeof newNumber == 'string') {
            alert('This is not a number');
        }
       
    } while (newNumber !== null)

    if(numberList.length == 1) {
        alert('The square root of ' + numberList[0] + ' is ' + squareRoot(numberList[0]))
    } else if(numberList.length == 0) {
        alert('No has introducido ningún número')
    } else {
        let sum = 0;
        let rest = 0;
        let multi = 1;
        let divi = 1;

        for (let i = 0; i<numberList.length; i++) {
            sum = sum + numberList[i];
            rest = numberList[i] - rest;
            multi = multi * numberList[i];
            divi = division(numberList[i], divi);
        }
        alert('The result of the sum is ' + sum);
        alert('The result of the rest is ' + rest);
        alert('The result of the multiplication is ' + multi);
        alert('The result of the division is ' + divi);
    }

}

calculatorPro()

  if (confirm('New numbers?')) {
    calculatorPro()
  } else {
    alert('Bye!');
  }
