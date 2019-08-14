import mongoose from 'mongoose';

const Video = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    url: {
        type: String,
    }
  },
  { timestamps: true },
);

export default mongoose.model('Video', Video);