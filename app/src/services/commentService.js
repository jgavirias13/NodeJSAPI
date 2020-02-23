const BaseService = require('./baseService');
const NotFoundException = require('../helpers/NotFoundException');
const RequiredFieldException = require('../helpers/requieredFieldException');

let commentRepository = null;
let ideaRepository = null;

class CommentService extends BaseService {
  constructor({
    CommentRepository,
    IdeaRepository
  }) {
    super(CommentRepository);
    commentRepository = CommentRepository;
    ideaRepository = IdeaRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      throw new RequiredFieldException('ideaId');
    }

    const idea = ideaRepository.get(ideaId);
    if (!idea) {
      throw new NotFoundException('Idea');
    }

    return idea.comments;
  }

  async createComments(comment, ideaId){
    if(!ideaId){
      throw new RequiredFieldException('IdeaId');
    }

    const idea = ideaRepository.get(ideaId);
    if(!idea){
      throw new NotFoundException('Idea');
    }

    const createdComment = commentRepository.create(comment);
    idea.comments.push(createdComment);

    return await ideaRepository.update(ideaId, {comments: idea.comment});
  }
}

module.exports = CommentService;
