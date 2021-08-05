//Event Module
// Node.js has a built-in module,called "Events",
// where you can create -, fire-, and listen for- your own events.

//Example 1-Registering for the event to be fired only one time using once.

//Example 2- create an event emitter instance and register a couple of callbacks

//Example 3 -Registering for the event with callback parameters


const EventEmitter = require('events');//Creating class with the help of event
// const event = require("events");//2nd method

const event = new EventEmitter();

//Example 3

event.on('checkpage' ,(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage",200,'ok');





//Example 2

// event.on('sayMyName',()=>{
//     console.log("Your Name is shivam")
//     });
// event.on('sayMyName',()=>{
//     console.log("Your Name is kumar")
//     });
// event.on('sayMyName',()=>{
//     console.log("Your Name is vishwakarma")
//     });
    

// event.emit('sayMyName');










//Example 1

//event definition 1st(order of execution) allready registered listeners

// event.on('sayMyName',()=>{
// console.log("Your Name is shivam")
// });

// //fire event 2nd
// event.emit('sayMyName');

// The cocept is quite simple : emitter objects emit named events that cause 
// previously registered listeners to be called .So, an emitter objects    
//     basically has two main features:

//     Emmitting name events.
//     Registering an unregistering listener functions.