const BaseService = require('./baseService');

let ideaRepository = null;
let notFoundException = null;
let requiredFieldException = null;

class IdeaService extends BaseService{
  constructor({IdeaRepository, NotFoundException, RequiredFieldException}){
    super(IdeaRepository);
    ideaRepository = IdeaRepository;
    notFoundException = NotFoundException;
    requiredFieldException = requiredFieldException;
  }

  async getUserIdeas(author){
    if(!author){
      throw new requiredFieldException('author');
    }

    return await ideaRepository.getUserIdeas(author);
  }

  async upVoteIdea(ideaId){
    if(!ideaId){
      throw new requiredFieldException('Idea Id');
    }

    const idea = await ideaRepository.get(ideaId);
    if(!idea){
      throw new notFoundException('Idea');
    }

    idea.upVotes.push(true);
    return await ideaRepository.update(ideaId, {upVotes: idea.upVotes});
  }

  async downVoteIdea(ideaId){
    if(!ideaId){
      throw new requiredFieldException('Idea Id');
    }
    
    const idea = await ideaRepository.get(ideaId);
    if(!idea){
      throw new notFoundException('Idea');
    }

    idea.downVotes.push(true);
    return await ideaRepository.update(ideaId, {downVotes: idea.downVotes});
  }
}

module.exports = IdeaService;