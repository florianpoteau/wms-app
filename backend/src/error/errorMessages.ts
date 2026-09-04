export const ERROR = {
  ARTICLE_NOT_FOUND: {
    statusCode: 404,
    message: "Article not found",
  },
  REFERENCE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "This reference already exists",
  },
  BARCODE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "This barcode already exists",
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: "User not found",
  },
  INVALID_CREDENTIALS: {
    statusCode: 401,
    message: "Invalid identifiers",
  },
  JWT_NOT_DEFINED: {
    statusCode: 401,
    message: "Session expired. Please log in again",
  },
  EMAIL_ALREADY_EXISTS: {
    statusCode: 409,
    message: "this email already in use",
  },
  PHONE_ALREADY_EXISTS: {
    statusCode: 409,
    message: "this phone number is already in use",
  },
};
