const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log("no header");
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const token = authHeader.split(" ")[1];
    console.log('token', token);

    if (!token){
      console.log("no token");
      return res.status(401).send({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log('decoded', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = authMiddleware;
