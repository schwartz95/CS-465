const mongoose = require('mongoose');
require('../models/travlr');

const Model = mongoose.model('trips');

// GET /api/trips - return all trips
const tripsList = async (req, res) => {
  const q = await Model
    .find({})
    .exec();

  if (!q) {
    return res
      .status(404)
      .json(q);
  } else {
    return res
      .status(200)
      .json(q);
  }
};

// GET /api/trips/:tripCode - return the matching trip
const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({ code: req.params.tripCode })
    .exec();

  if (!q) {
    return res
      .status(404)
      .json(q);
  } else {
    return res
      .status(200)
      .json(q);
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Model.create(req.body);
    return res.status(201).json(trip);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true, runValidators: true }
    ).exec();

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Model.findOneAndDelete({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};