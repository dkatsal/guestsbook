import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  time: { type: String, required: false },
});

export default mongoose.model('Post', Post);
