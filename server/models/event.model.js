const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName : {type:String},
    eventId : {type:Number},
    eventDate : {type:Date},
    eventType : {type:String},
    eventCapacity :{type:Number},
    eventLocation : {type:String},
    eventFee: {type:Number},
})

module.exports = mongoose.model("Event",eventSchema)