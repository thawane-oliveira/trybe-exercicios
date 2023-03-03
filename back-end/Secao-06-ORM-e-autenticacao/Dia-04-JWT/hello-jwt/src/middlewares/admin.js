module.exports = (req, res, next) => {
  const { user } = req;

  if (!user) {
    const erro = new Error('This endpoint requires authentication');

    erro.statusCode = 401;

    return next(erro);
  }

  if (!user.admin) {
    const erro = new Error('Restricted access');
    erro.statusCode = 403;
    return next(erro);
  }

  return next();
};