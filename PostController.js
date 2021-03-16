import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { name, text, time } = req.body;
      const post = await Post.create({ name, text, time });
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      // if (!id) {
      //   res.status(400).json({ message: 'ID  не указан!' });
      // }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
