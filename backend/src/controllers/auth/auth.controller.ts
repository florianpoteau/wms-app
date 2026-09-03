import type { Request, Response } from "express";
import { loginUserService } from "../../services/auth/login.service";
import type { AuthRequest } from "../../middlewares/validateJwt.middleware";
import { meService } from "../../services/auth/me.service";

export default class AuthController {
  static loginController = async (req: Request, res: Response) => {
    const result = await loginUserService(req.body);

    res.cookie("accessToken", result.token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.status(200).json({
      message: "Login successful",
    });
  };

  static logoutController = async (req: Request, res: Response) => {
    res.clearCookie("accessToken");
    return res.status(200).send();
  };

  static meController = async (req: AuthRequest, res: Response) => {
    const user = await meService(req.token.userId);

    if (!user) {
      return res.status(404).send();
    }
    return res.status(200).json({
      user,
    });
  };
}
