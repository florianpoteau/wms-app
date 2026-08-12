import { loginUserService } from "../../services/auth/login.service";
import type { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const result = await loginUserService(req.body);

  res.cookie("accessToken", result.token, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });
  return res.status(200).json({
    message: "Connexion réussie",
  });
};
