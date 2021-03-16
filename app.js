import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';
const DB_URL =
  'mongodb+srv://dmitry:admin@cluster0.xzm8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT: ' + PORT));
  } catch (e) {
    console.log('server error:', e.message);
    process.exit(1);
  }
}
startApp();
