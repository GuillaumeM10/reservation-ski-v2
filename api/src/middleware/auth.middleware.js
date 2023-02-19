var jwt = require('jsonwebtoken');

authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization
  if(authorization == undefined) {
    return res.status(401).send({message : "Invalid Token"})
  }
  const token = authorization.split(' ')[1];

  try{

    jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return res.status(401).send({message : "Invalid Token"})
  }

  next();
}

module.exports = authMiddleware; 