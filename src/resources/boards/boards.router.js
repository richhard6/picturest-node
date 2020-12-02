const { Router } = require('express');
const boardsController = require('./boards.controller');
const router = Router();

router.route('/').get(boardsController.getAll).post(boardsController.create);
router
  .route('/:id')
  .get(boardsController.getOne)
  .patch(boardsController.update)
  .delete(boardsController.remove);

module.exports = router;
