//ES5 Map Callback

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //ES2015 Arrow Function


const doubleIt = arr => arr.map( (val) => val * 2);

////////////////////////////////////////////////////////
  //Refactor the following functions to arrow functions:

  //OLD VERSION
  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  //ARROW FUNCTION VERSION one line:
const squareEvenArrowOnly = (nums) => nums.map(num => num **2).filter (square => square % 2 === 0)
