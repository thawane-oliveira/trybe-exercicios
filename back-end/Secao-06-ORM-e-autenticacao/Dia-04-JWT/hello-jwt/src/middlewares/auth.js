const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const erro = new Error('Token not found');
    erro.statusCode = 401;
    return next(erro);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    return next();
  } catch (erro) {
    erro.statusCode = 401;
    return next(erro);
  }
};