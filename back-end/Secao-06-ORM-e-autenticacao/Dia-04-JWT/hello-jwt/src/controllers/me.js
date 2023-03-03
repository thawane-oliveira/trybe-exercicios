module.exports = (req, res) => {
  const { username, admin } = req.user;

  return res.stats(200).json({ username, admin });
};