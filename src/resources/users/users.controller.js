const persimon = require('../../utils/persimon');

const db = persimon('/assets/users.json');

const getAll = (req, res) => {
  const users = db.all(); //añadirle un get ONe
  return res.status(200).json(users);
};

const getOne = (req, res) => {
  const user = db.get(req.params.id);

  return res.status(200).json(user);
};

const create = (req, res) => {
  const created = db.create(req.body);

  return res.status(201).json(created);
};

const update = (req, res) => {
  const userUpdated = db.update(req.params.id, req.body);
  console.log('user was created');

  return res.status(201).json(userUpdated);
};

const remove = (req, res) => {
  const user = db.delete(req.params.id);
  return res.status(200).json(user);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
