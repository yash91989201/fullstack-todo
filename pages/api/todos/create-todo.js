import Todo from "db/models/todo";
import withAuth from "middleware/withAuth";

async function handler(req, res, userId) {
  const { title } = req.body;
  try {
    // if (!userId) throw new Error("Not authorized");
    const newTodo = await Todo.create({ title, userId, done: false });
    res.status(200).json({ success: true, data: newTodo });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
export default withAuth(handler);
