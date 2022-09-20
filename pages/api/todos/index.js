import todo from "db/models/todo";

export default async function handler(req, res) {
  const { todoId } = req.body;
  try {
    switch (req.method) {
      case "GET": {
        const todos = await todo.find();
        res.status(200).json({ success: true, data: todos });
        break;
      }
      case "PUT": {
        const { acknowledged, modifiedCount } = await todo.updateOne(
          { _id: todoId },
          { $set: { done: true } }
        );
        if (acknowledged && modifiedCount == 1)
          res.status(200).json({ success: true });
        else res.status(200).json({ success: false });
        break;
      }
      case "DELETE": {
        const { acknowledged, deletedCount } = await todo.deleteOne({
          _id: todoId,
        });
        if (acknowledged && deletedCount == 1)
          return res.status(200).json({ success: true });
        res.status(200).json({ success: false });
        break;
      }
    }
  } catch (error) {}
}
