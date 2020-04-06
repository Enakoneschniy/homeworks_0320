"use strict"
let arr = []


function*  sequence( a, b ) {
  for(let i = 0; i < Infinity; i++){
  arr.push(a)
  yield a += b
  }
}

function take(gen, x ){
  for (let i = 0; i < x; i++){
    gen.next()
  }
}
let gen = sequence(0, 2)
let tpp = take(gen, 6 )

console.log(arr) 
