import type { Request, Response, NextFunction } from "express";
import { Roles } from "../../generated/prisma/client";
import type { AuthRequest } from "./validateJwt.middleware";

export const permit = (...allowedRoles: Roles[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!allowedRoles.includes(req.token.role as Roles)) {
      return res.status(403).json({
        message: "Vous n'avez pas les permissions nécessaires",
      });
    }

    next();
  };
};
