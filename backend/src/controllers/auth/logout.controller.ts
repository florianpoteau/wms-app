import type { Request, Response } from "express";

export const logoutController = (req: Request, res: Response) => {
  res.clearCookie("accessToken");

  return res.status(200).json({
    message: "Déconnexion réussie",
  });
};
