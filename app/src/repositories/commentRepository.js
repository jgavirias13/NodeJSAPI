const BaseRepository = require('./baseRepository');

let comment = null;

class CommentRepository extends BaseRepository{
  constructor({CommentModel}){
    super(CommentModel);
    comment = CommentModel;
  }
}

module.exports = CommentRepository;