
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    created_at: {type: String},
    updated_at: {type: String},

});
// Compile model from schema
const UserModel = mongoose.model('User', UserSchema );
module.exports = UserModel;
