import { loginUserService } from "../../services/auth/login.service";
import type { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const result = await loginUserService(req.body);

  return res.status(200).json(result);
};
