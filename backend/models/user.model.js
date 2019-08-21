const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
  email: { type: String, required: true, minlength: 10, trim: true },
  tel: { type: Number, required: true },
  address: { type: String, required: true, minlength: 3, trim: true },
},
{ timestamps: true, }

);

const User = mongoose.model('User', userSchema);
module.exports = User;
