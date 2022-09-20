import jwt from "jsonwebtoken";

const withAuth = (handler) => {
  return async (req, res) => {
    try {
      const { jwtToken: token } = req.cookies;
      if (!token) throw new Error("You are not authorized to view this page.");
      // verify the token and get userId
      const userId = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return handler(req, res, userId);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  };
};

export default withAuth;
