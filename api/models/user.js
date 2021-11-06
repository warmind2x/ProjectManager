import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  usuario: { type: String, required: [true] },
  email: { type: String, required: [true], unique: true},
  password: {  type: String, required: [true]},
  created: {type: Date}
});


//Validator
userSchema.plugin(uniqueValidator, { message: 'Error, email already exists.'});


// convert to model
const User = mongoose.model('User', userSchema);

export default User;