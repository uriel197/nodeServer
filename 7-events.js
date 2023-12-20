const EventEmitter = require('events');
const myEvents = new EventEmitter();

myEvents.on('response', (name, id) => {
    console.log(`User with name ${name} and id: ${id} just logged in`);
})

myEvents.on('response', () => {
    console.log('it is possible to listen to as many events as you want');
})
myEvents.emit('response', 'Uri', '12345');
