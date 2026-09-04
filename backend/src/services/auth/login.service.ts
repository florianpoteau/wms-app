import argon2 from "argon2";
import jwt from "jsonwebtoken";
import type { UserloginInput } from "../../validators/auth/login.validator";
import { findUserByEmail } from "../../repositories/users/login.repository";

export async function loginUserService(data: UserloginInput) {
  const user = await findUserByEmail(data.email);

  const jwtSecret = process.env.JWT_SECRET;

  if (!user) {
    await new Promise((resolve) => setTimeout(resolve, 80));
    throw new Error("INVALID_CREDENTIALS");
  }

  const passwordValid = await argon2.verify(user.passwordhashed, data.password);

  if (!passwordValid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  if (!jwtSecret) {
    throw new Error("JWT_NOT-DEFINED");
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
