
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetingSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    note: {type: String},
    isOnline: {type: String},
    isOffline: {type: String},
    isCamera: {type: String},
    from_day: {type: String},
    to_day: {type: String},
    from_time: {type: String},
    to_time: {type: String},
    invite_people: {type: Array},
    member: {type: Array},
    user:{type: String},
    created_at: {type: String},
    updated_at: {type: String},
    

});
// Compile model from schema
 const MeetingModel = mongoose.model('Meeting', MeetingSchema );
 module.exports = MeetingModel;
