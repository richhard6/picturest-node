// TODO
const persimon = require('../../utils/persimon');

const db = persimon('/assets/pins.json');

const getAll = (req, res) => {
  const pins = db.all(); //añadirle un get ONe

  return res.status(200).json(pins);
};

const getOne = (req, res) => {
  const pin = db.get(req.params.id);

  return res.status(200).json(pin);
};

const create = (req, res) => {
  const created = db.create(req.body);

  return res.status(201).json(created);
};

const update = (req, res) => {
  const pinUpdated = db.update(req.params.id, req.body);
  console.log(req.body);

  return res.status(201).json(pinUpdated);
};

const remove = (req, res) => {
  const pin = db.delete(req.params.id);
  return res.status(200).json(pin);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
