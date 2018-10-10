const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const User = new mongoose.Schema({
  username: String,
  password: String,
  trips: []
});

User.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
  next();
})

module.exports = mongoose.model('User', User);