import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends JwtPayload {
  userId?: string;
  role?: string;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      message: "token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.token = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};
