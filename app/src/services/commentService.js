const BaseService = require('./baseService');

let commentRepository = null;
let ideaRepository = null;
let notFoundException = null;
let requiredException = null;

class CommentService extends BaseService {
  constructor({
    CommentRepository,
    IdeaRepository,
    NotFoundException,
    RequiredException
  }) {
    super(CommentRepository);
    commentRepository = CommentRepository;
    ideaRepository = IdeaRepository;
    notFoundException = NotFoundException;
    requiredException = RequiredException;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      throw new requiredException('ideaId');
    }

    const idea = ideaRepository.get(ideaId);
    if (!idea) {
      throw new notFoundException('Idea');
    }

    return idea.comments;
  }

  async createComments(comment, ideaId){
    if(!ideaId){
      throw new requiredException('IdeaId');
    }

    const idea = ideaRepository.get(ideaId);
    if(!idea){
      throw new notFoundException('Idea');
    }

    const createdComment = commentRepository.create(comment);
    idea.comments.push(createdComment);

    return await ideaRepository.update(ideaId, {comments: idea.comment});
  }
}

module.exports = CommentService;
