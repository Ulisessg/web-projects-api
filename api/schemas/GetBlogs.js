import mongoose from 'mongoose';

const GetBlogsSchema = new mongoose.Schema([
  {
    id: {
      type: Number,
      required: true,
    },
    blogUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    cardUrl: {
      type: String,
      required: true,
    },
    subjects: {
      type: Array,
      required: true,
    },
  },
]);

export default mongoose.model('blogs', GetBlogsSchema);
