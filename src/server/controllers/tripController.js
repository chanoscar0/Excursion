const tripSchema = require('../schemas/tripSchema.js');

module.exports = {
  getTrips: (req, res) => {
    tripSchema.findOne({u_id: req.body})
    .then((data) => {
      res.json(data.trips)
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  },
  addTrip: (req, res) => {

    tripSchema.create({trips:req.body})
  }
}