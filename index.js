const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {
    callback()
  }
  
  
  function returnsANamedFunction() {
    return function named() {
      console.log("The girl is Anna.")
    }
  }
  

  function returnsAnAnonymousFunction() {
    return function() {
      console.log('The girl has no name.')
    }
  };