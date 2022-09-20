import bcrypt from "bcrypt";
import cookie from "cookie";
import connectDB from "db/conn";
import User from "db/models/User";

connectDB();

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) throw new Error("User doesnot exists.");
    const isPasswordMatch = await bcrypt.compare(password, userExists.password);
    if (!isPasswordMatch) throw new Error("Invalid credentials.");
    let token = await userExists.generateAuthToken();
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("jwtToken", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        path: "/",
      })
    );
    res.status(200).json({ success: true, message: "Login Successful" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
}
