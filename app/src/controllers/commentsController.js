let commentService = null;

class CommentController {
  constructor({ CommentService }) {
    commentService = CommentService;
  }

  async get(req, res) {
    const commentId = req.params.commentId;
    const comment = await commentService.get(commentId);
    return res.send(comment);
  }

  async create(req, res){
    const body = req.body;
    const ideaId = req.params.ideaId;
    const createdComment = await commentService.createComments(body, ideaId);

    res.status(201).send(createdComment);
  }

  async update(req, res) {
    const commentId = req.params.commentId;
    const body = req.body;
    const updatedComment = await commentService.update(commentId, body);

    return res.send(updatedComment);
  }

  async delete(req, res) {
    const commentId = req.params.commentId;
    const deletedComment = await commentService.delete(commentId);

    return res.send(deletedComment);
  }

  async getIdeaComments(req, res){
    const ideaId = req.params.ideaId;
    const comments = await commentService.getIdeaComments(ideaId);

    return res.send(comments);
  }
}

module.exports = CommentController;
