const tripSchema = require('../schemas/tripSchema.js');

module.exports = {
  getTrips: (req, res) => {
    tripSchema.find({user_id: 0})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  },
  addTrip: (req, res) => {
    console.log(req.body.destination);
    console.log(req.body.trip[req.body.destination]);
    const addObj = {
      user_id: req.body.id,
      tripActivities: {
        destinationName: req.body.destination,
        events: req.body.trip[req.body.destination]
      }
    }
    tripSchema.create(addObj)
    .then((data) => {
      res.status(200).send(data);
      console.log('Record Saved');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })
  },
  deleteTrip: (req, res) => {
    const findObj = {
      tripActivities: {
        destinationName: req.body.destination
      }
    }
    tripSchema.findOneAndDelete({user_id: 0, "tripActivities.destinationName": req.body.destination})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
      console.log('Record Deleted');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })
  }
}