const express = require('express');
const db = require('../models');

const stop = express.Router();

stop.post('/', (req, res) => {
  console.log(req.body, 'STOP');
  const longlat = `${req.body.stop.lng},${req.body.stop.lat}`;
  db.sequelize.models.stop.create({
    long_lat: longlat,
    name: req.body.stop.name,
    tripId: req.body.stop.tripId,
  })
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

stop.get('/', (req, res) => {
  db.sequelize.models.stop.findAll({
    where: { tripId: req.query.tripid },
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

stop.post('/itinerary', (req, res) => {
  console.log(req.body);
  const longlat = `${req.body.stop.lng},${req.body.stop.lat}`;
  db.sequelize.models.stop.destroy({
    where: {
      tripId: req.body.tripId,
      long_lat: longlat,
    },
  })
    .catch((err) => {
      console.error(err);
    });
});


module.exports.stopRouter = stop;
