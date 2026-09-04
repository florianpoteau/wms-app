import argon2 from "argon2";
import jwt from "jsonwebtoken";
import type { UserloginInput } from "../../validators/auth/login.validator";
import { findUserByEmail } from "../../repositories/users/login.repository";
import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";

export async function loginUserService(data: UserloginInput) {
  const user = await findUserByEmail(data.email);

  const jwtSecret = process.env.JWT_SECRET;

  if (!user) {
    await new Promise((resolve) => setTimeout(resolve, 80));
    throw new AppError(ERROR.INVALID_CREDENTIALS);
  }

  const passwordValid = await argon2.verify(user.passwordhashed, data.password);

  if (!passwordValid) {
    throw new AppError(ERROR.INVALID_CREDENTIALS);
  }

  if (!jwtSecret) {
    throw new AppError(ERROR.INVALID_CREDENTIALS);
  }

  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    jwtSecret,
    {
      expiresIn: "1h",
    },
  );

  return {
    token,
  };
}
