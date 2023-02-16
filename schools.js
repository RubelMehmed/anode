
const EventEmitter = require('events');

class School extends EventEmitter {
  startPeriod() {
    console.log('Starting period...');
    // some logic to do before bellring...
    setTimeout(() => {
      this.emit('bellring', { period: 'first period', text: 'is starting' });
    }, 5000);
    // some logic to do after bellring...
    console.log('Period started.');
  }
}

module.exports = School;



















// const EventEmitter = require('events');

// // const emitter = new EventEmitter();
// class School extends EventEmitter{
//     startPeriod() {
//         console.log('Classs Started');

//         setTimeout(() => {
//             this.emit(('bellring', ({
//                 period:'first',
//                 text: 'period ended'
//             })))
//         })
//     }
// }
// module.exports = School;