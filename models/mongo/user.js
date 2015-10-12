/**
 * Created by thangnv on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user_login : String,
    user_pass : String,
    user_email : String,
    user_url : String,
    user_registered : String,
    display_name : String,
    user_image_url : String,
    role : String,
    phone : String,
    desc : String
});
module.exports = mongoose.model('users',userSchema);