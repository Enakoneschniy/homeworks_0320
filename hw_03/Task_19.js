"use strict"

function* sequence( a ) {
    for ( let i = 0; i < Infinity; i++ ){
    yield a++
    }
  }

    function square( x ){
     return x * x
     }

  function fmap( square, gen ){ 
    return function(){
        return square(gen.next().value)
    }
    }

let gen = sequence( 0 )
let sguareGen = fmap(square, gen)


console.log (sguareGen())
console.log (sguareGen())
console.log (sguareGen())
console.log (sguareGen())

 
  