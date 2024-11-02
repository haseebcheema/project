const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

const authMiddleware = (context) => {
  const token = context.req.headers.authorization;
  if (token) {
    try {
      const user = jwt.verify(token, secret);
      return { userId: user.id };
    } catch (err) {
      throw new Error("Invalid/Expired token");
    }
  }
};

module.exports = authMiddleware;
