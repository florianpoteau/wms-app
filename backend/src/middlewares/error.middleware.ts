import type { NextFunction, Request, Response } from "express";

export const errorHandling = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof Error && error.message === "REFERENCE_ALREADY_EXISTS") {
    return res.status(409).json({
      message: "Il y a déja une référence sur cette article",
    });
  }
  if (error instanceof Error && error.message === "BARCODE_ALREADY_EXISTS") {
    return res.status(409).json({
      message: "Il y a déja un barcode sur cette article",
    });
  }
  if (error instanceof Error && error.message === "ARTICLE_NOT_FOUND") {
    return res.status(404).json({
      message: "Cette article n'existe pas",
    });
  }
  if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
    return res.status(400).json({
      message: "Erreur de la connexion",
    });
  }
  if (error instanceof Error && error.message === "JWT_NOT_DEFINED") {
    return res.status(400).json({
      message: "Veuillez vous reconnectez",
    });
  }
  if (error instanceof Error && error.message === "USER_NOT_FOUND") {
    return res.status(404).json({
      message: "Utilisateur non trouvé",
    });
  }
  if (error instanceof Error && error.message === "EMAIL_ALREADY_EXISTS") {
    return res.status(409).json({
      message: "Cette email existe déja",
    });
  }
  if (error instanceof Error && error.message === "PHONE_ALREADY_EXISTS") {
    return res.status(409).json({
      message: "Ce numéro de téléphone est déja utilisé",
    });
  }

  return res.status(500).json({
    message: "Une erreur est survenue.",
  });
};
