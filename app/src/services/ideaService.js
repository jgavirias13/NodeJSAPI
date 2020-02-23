const BaseService = require('./baseService');
const NotFoundException = require('../helpers/notFoundException');
const RequiredFieldException = require('../helpers/requieredFieldException');

let ideaRepository = null;

class IdeaService extends BaseService{
  constructor({IdeaRepository}){
    super(IdeaRepository);
    ideaRepository = IdeaRepository;
  }

  async getUserIdeas(author){
    if(!author){
      throw new RequiredFieldException('author');
    }

    return await ideaRepository.getUserIdeas(author);
  }

  async upVoteIdea(ideaId){
    if(!ideaId){
      throw new RequiredFieldException('Idea Id');
    }

    const idea = await ideaRepository.get(ideaId);
    if(!idea){
      throw new NotFoundException('Idea');
    }

    idea.upVotes.push(true);
    return await ideaRepository.update(ideaId, {upVotes: idea.upVotes});
  }

  async downVoteIdea(ideaId){
    if(!ideaId){
      throw new RequiredFieldException('Idea Id');
    }
    
    const idea = await ideaRepository.get(ideaId);
    if(!idea){
      throw new NotFoundException('Idea');
    }

    idea.downVotes.push(true);
    return await ideaRepository.update(ideaId, {downVotes: idea.downVotes});
  }
}

module.exports = IdeaService;