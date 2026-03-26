const jwt = require("jsonwebtoken");

const Middleware = (req, res, next) => {
  try {
    // 1. Get header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // 2. Check format: Bearer token
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {
      return res.status(401).json({
        message: "Invalid token format"
      });
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user
    req.user = decoded;

    console.log("AUTH SUCCESS ✅", decoded); // debug

    next();

  } catch (err) {
    console.log("AUTH ERROR ❌", err.message);

    return res.status(401).json({
      message: "Unauthorized"
    });
  }
};

module.exports = Middleware;