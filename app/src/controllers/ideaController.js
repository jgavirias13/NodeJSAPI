let ideaService = null;

class IdeaController {
  constructor({ IdeaService }) {
    ideaService = IdeaService;
  }

  async get(req, res) {
    const ideaId = req.params.ideaId;
    const idea = await ideaService.get(ideaId);
    return res.send(idea);
  }

  async getAll(req, res) {
    const pageSize = req.query.pageSize;
    const pageNum = req.query.pageNum;

    const ideas = await ideaService.getAll(pageSize, pageNum);
    return res.send(ideas);
  }

  async create(req, res){
    const body = req.body;
    const createdIdea = await ideaService.create(body);

    res.status(201).send(createdIdea);
  }

  async update(req, res) {
    const ideaId = req.params.ideaId;
    const body = req.body;
    const updatedIdea = await ideaService.update(ideaId, body);

    return res.send(updatedIdea);
  }

  async delete(req, res) {
    const ideaId = req.params.ideaId;
    const deletedIdea = await ideaService.delete(ideaId);

    return res.send(deletedIdea);
  }

  async getUserIdeas(req, res) {
    const userId = req.params.userId;
    const ideas = await ideaService.getUserIdeas(userId);

    return res.send(ideas);
  }

  async upVoteIdea(req, res){
    const ideaId = req.params.ideaId;
    const idea = await ideaService.upVoteIdea(ideaId);

    return res.send(idea);
  }

  async downVoteIdea(req, res){
    const ideaId = req.params.ideaId;
    const idea = await ideaService.downVoteIdea(ideaId);

    return res.send(idea);
  }
}

module.exports = IdeaController;
