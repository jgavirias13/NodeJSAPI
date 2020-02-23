const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

const commentScheema = new Scheema({
  comment: {type: String, required: true},
  author: {
    type: Scheema.Types.ObjectId,
    ref: 'user',
    required: true,
    autopopulate: true
  }
});

mongoose.model('comment', commentScheema);

module.exports = mongoose.model('comment');