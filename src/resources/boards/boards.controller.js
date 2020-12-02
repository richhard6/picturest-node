// TODO
const persimon = require('../../utils/persimon');

const db = persimon('/assets/boards.json');

const getAll = (req, res) => {
  const boards = db.all(); //añadirle un get ONe
  return res.status(200).json(boards);
};

const getOne = (req, res) => {
  const board = db.get(req.params.id);

  return res.status(200).json(board);
};

const create = (req, res) => {
  const created = db.create(req.body);

  return res.status(201).json(created);
};

const update = (req, res) => {
  const boardUpdated = db.update(req.params.id, req.body);
  console.log(req.body);

  return res.status(201).json(boardUpdated);
};

const remove = (req, res) => {
  const board = db.delete(req.params.id);
  return res.status(200).json(board);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
