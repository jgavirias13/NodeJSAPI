const BaseRepository = require('./baseRepository');

let idea = null;

class IdeaRepository extends BaseRepository {
  constructor({ ideaModel }) {
    super(ideaModel);
    idea = ideaModel;
  }

  async getUserIdea(author) {
    return await idea.find({ author: author });
  }
}

module.exports = IdeaRepository;