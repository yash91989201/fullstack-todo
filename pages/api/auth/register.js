import connectDB from "db/conn";
import User from "db/models/User";

connectDB();

export default async function handler(req, res) {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error("Student already exists.");
    const newUser = new User({ name, email, password });
    newUser.save();
    res
      .status(200)
      .json({ success: true, message: "New Student added to database." });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}
