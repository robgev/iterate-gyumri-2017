'use strict';

//let counter = 0;

// use clearInterval to stop the
// setInterval
// use if(condition) {} else {}
// use Google for more info on clearInterval
//const interval = setInterval(function(){
//  console.log(`Called ${++counter} times`);
//}, 3000)

// Callbacks
// ++counter is shorthand of
// counter = counter + 1;

process.stdin.on('data', function(d) {
  console.log(d);
  console.log(d.toString().toUpperCase())
})
