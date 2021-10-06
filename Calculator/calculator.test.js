const { TestWatcher } = require("@jest/core")

function calculator(num1, num2) {
    
  if((num1 === "" || num1 === null) && (num2 === "" || num2 === null)) {
      return 'No has introducido ningún número'
  } 
  else if(num1 === "" || num1 === null) {
      return `La raiz cuadrada de ${ num2 } es ${Math.sqrt(num2)}`
  }
  else if(num2 === "" || num2 === null) {
      return `La raiz cuadrada de ${ num1 } es ${Math.sqrt(num1)}`
  }
  else if(isNaN(num1) || isNaN(num2)) {
      return 'El valor introducido no es un número'
  }
  else {
      results.push((num1 + num2))
      results.push((num1 - num2))
      results.push((num1 * num2))
      results.push(division(num1, num2))
  }
}



describe("Given a calculator function", function() {

  describe("when n1 and n2 have no values", function() {
    test("it should return No has introducido ningún número", function() {

      //Arrange
      const n1 = "";
      const n2 = null;
      const expected = "No has introducido ningún número";

      //Act
      const result = calculator(n1, n2);

      //Assert
      expect(result).toBe(expected)
      
    })
  })

  describe("when n1 is 4 and n2 is null", function() {
    test("it should return La raiz cuadrada de 4 es 2", function() {

      //Arrange
      const n1 = 4;
      const n2 = null;
      const expected = "La raiz cuadrada de 4 es 2";

      //Act
      const result = calculator(n1, n2);

      //Assert
      expect(result).toBe(expected)
      
    })
  })

  describe("when n1 is null and n2 is 9", function() {
    test("it should return La raiz cuadrada de 9 es 3", function() {

      //Arrange
      const n1 = null;
      const n2 = 9;
      const expected = "La raiz cuadrada de 9 es 3";

      //Act
      const result = calculator(n1, n2);

      //Assert
      expect(result).toBe(expected);
    })
  })

  describe("when both values are not numbers", function() {
    test("it should return El valor introducido no es un número", function() {

      //Arrange
      const n1 = "hola";
      const n2 = "adiós";
      const expected = "El valor introducido no es un número";

      //Act
      const result = calculator(n1, n2);

      //Assert
      expect(result).toBe(expected)
    })})
  }  
)
