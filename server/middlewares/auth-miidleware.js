const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const jwtToken = token.replace("Bearer", "").trim();
//   console.log(jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);
    req.user = userData;
    req.token =token
    req.userId = userData._id

    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};

module.exports = authMiddleware;
