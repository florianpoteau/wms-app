export const ERROR = {
  ARTICLE_NOT_FOUND: {
    statusCode: 404,
    message: "Article introuvable",
  },
  REFERENCE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "Cette référence existe déjà",
  },
  BARCODE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "Ce code-barres existe déjà",
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: "Utilisateur introuvable",
  },
  INVALID_CREDENTIALS: {
    statusCode: 401,
    message: "Identifiants invalides",
  },
  JWT_NOT_DEFINED: {
    statusCode: 401,
    message: "Session expirée. Veuillez vous reconnectez",
  },
  EMAIL_ALREADY_EXISTS: {
    statusCode: 409,
    message: "Cet email existe déjà",
  },
  PHONE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "Ce numéro de téléphone est déjà utilisé",
  },
};
