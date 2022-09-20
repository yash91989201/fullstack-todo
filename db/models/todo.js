import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  userId: mongoose.Schema.Types.ObjectId,
  done: Boolean,
  time: {
    type: Date,
    value: Date.now(),
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
