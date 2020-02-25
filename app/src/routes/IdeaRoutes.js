const {Router} = require('express');
const ParseIntMiddleware = require('../middlewares/parseIntMiddlewar');

module.exports = ({IdeaController}) => {
  const router = Router();

  router.get('/', ParseIntMiddleware, IdeaController.getAll);
  router.post('/', IdeaController.create);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.get('/:ideaId', IdeaController.get);
  router.patch('/:ideaId', IdeaController.update);
  router.delete('/:ideaId', IdeaController.delete);
  router.post('/:ideaId/upVote', IdeaController.upVoteIdea);
  router.post('/:ideaId/downVote', IdeaController.downVoteIdea);

  return router;
}