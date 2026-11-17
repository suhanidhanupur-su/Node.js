const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please turn of the motor!');
  setTimeout(()=>{
    console.log("Please turn of the motorIt's a gental reminder!");
  },3000)
});
