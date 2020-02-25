const {Router} = require('express');
const AuthMiddleware = require('../middlewares/authMiddleware');
const ParseIntMiddleware = require('../middlewares/parseIntMiddlewar');
const CacheMiddleware = require('../middlewares/cacheMiddleware');
const TimeHelper = require('../helpers/timeHelper');

module.exports = ({UserController}) => {
  const router = Router();
  
  router.get('/:userId', AuthMiddleware, UserController.get);
  router.get('/', [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(TimeHelper.ONE_HOUR)], UserController.getAll);
  router.patch('/:userId', AuthMiddleware, UserController.update);
  router.delete('/:userId', AuthMiddleware, UserController.delete);

  return router;
}