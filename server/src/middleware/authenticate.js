const authenticate = (req, res, next) => {
  if (
    req.headers &&
    req.headers["api-key"] &&
    req.headers["api-key"] === "12345"
  ) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authenticate;
