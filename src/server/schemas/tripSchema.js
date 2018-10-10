const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Trip= new Schema({
  user_id: Number,
  tripActivities: {
    destinationName: String,
    events: []
  }
});

module.exports = mongoose.model('Trip', Trip);