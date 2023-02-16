const EventEmitter = require('events');


const emitter = new EventEmitter();

// register a listener for bellring event
emitter.on('bellring', () => {
    console.log('We need to run!');
});

//raise an event => call func
setTimeout( () => {
    emitter.emit('bellring');

}, 10000);


const neoEmitter = new EventEmitter;
neoEmitter.on('bellring', (jol) => {
    console.log(`We need to run because ${jol}`);
});



setTimeout( () => {
    neoEmitter.emit('bellring', 'the period jol is ended');

}, 5000);

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously by  variable');

    const sum = a + b;
    console.log(sum);
    // return sum;
  });
});
myEmitter.emit('event', 6, 7);
console.log('this happens asynchronously by');

    const sum = a + b;
    console.log(sum);
    // return sum;
  });
});
myEmitter.emit('event', 6, 7);



// class sumEmitter extends EventEmitter {}
const sumEmitter = new MyEmitter();
sumEmitter.on('event', ({a, b}) => {
  setImmediate(() => {
    console.log('this happens asynchronously by  object');

    const sum = a + b;
    console.log(sum);
    // return sum;
  });
});

sumEmitter.emit('event', {a:6, b:7});

//------------------------>

const startPeriod = new MyEmitter();
function startPeriod()
    console.log('Class Started');
