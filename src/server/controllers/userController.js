const userSchema = require('../schemas/userSchema.js');

module.exports = {
  addUser: (req, res) => {
    userSchema.create({username: req.body.username, password: req.body.password, trips: []})
    .then((data) => {
      return res.redirect('index.html');
    })
  },
  addTrip: (req,res) => {
    userSchema.findOneAndUpdate({username: req.body.username}, {$push: {trips: req.body.trip}},
    {safe: true, upsert: true})
    .then((data) => {
      return res.send("Trip was successfully added to the Database.");
    })
    .catch((err) => {
      return res.send('Could not add trip to database.');
    })
  },
  deleteTrip: (req, res) => {
    userSchema.findOneAndUpdate({username: req.body.username, trips}, {$pull: {trips: req.body.tripID}})
    .then((err, data) => {
      if(err) {
        return res.status(500).json({'error': 'error in deleting trip'})
      } else{
        return res.send('Trip successfully deleted.');
      }
    })
  },
  // editTrip: (req, res) => {
  //   userSchema.update({'username': req.body.username, 'trips.id': req.body.tripID}, {$set: {"items.$.name":}})
  // }
}