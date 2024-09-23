import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error:
          "You are not authorized to access this route : No token Provided",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.userId) {
      return res.status(401).json({ error: "unauthorized : Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in ProtectRoute Middleware", error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
