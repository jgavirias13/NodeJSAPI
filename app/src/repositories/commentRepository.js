const BaseRepository = require('./baseRepository');

let comment = null;

class CommentRepository extends BaseRepository{
  constructor({commentModel}){
    super(commentModel);
    comment = commentModel;
  }
}

module.exports = CommentRepository;