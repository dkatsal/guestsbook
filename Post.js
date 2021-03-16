import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: false },
  text: { type: String, required: false },
  time: { type: String, required: false },
});

export default mongoose.model('Post', Post);
