const EventEmitter = require("events");

const event = new EventEmitter();



event.on("say",()=>{
    console.log("hi shubham");
});
event.emit("say");


