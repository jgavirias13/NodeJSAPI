const mongoose = require('mongoose');
const Scheema = mongoose.Schema;
const autoPopulate = require('mongoose-autopopulate');

const ideaScheema = new Scheema({
  idea: { type: String, required: true },
  description: { type: String },
  upVotes: [{ type: Boolean }],
  downVotes: [{ type: Boolean }],
  author: {
    type: Scheema.Types.ObjectId,
    ref: 'user',
    required: true,
    autopopulate: true
  },
  comments: [{
    type: Scheema.Types.ObjectId,
    ref: 'comment',
    autopopulate: true
  }]
});

ideaScheema.plugin(autoPopulate);

mongoose.model('idea', ideaScheema);
module.exports = mongoose.model('idea');
