import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/validateJwt.middleware";
import { meService } from "../../services/auth/me.service";

export const meController = async (req: AuthRequest, res: Response) => {
  const user = await meService(req.token.userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    user,
  });
};
