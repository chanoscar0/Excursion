const mongoose = require('mongoose');

const Trip= new mongoose.Schema({
  u_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  destination: String,
});

module.exports = mongoose.model('Trip', Trip);