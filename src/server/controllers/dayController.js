const daySchema = require('../schemas/daySchema.js');

module.exports = {
  addDay: (req, res) => {
    daySchema.create({events: req.body});
  }
}