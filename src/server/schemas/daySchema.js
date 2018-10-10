const mongoose = require('mongoose');

const Day = new mongoose.Schema({
  t_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'},
  events: [],
});

module.exports = mongoose.model('Day', Day);