import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { UserloginInput } from "../../validators/auth/login.validator";
import { findUserByEmail } from "../../repositories/users/login.repository";

export async function loginUserService(data: UserloginInput) {
  const user = await findUserByEmail(data.email);

  const jwtSecret = process.env.JWT_SECRET;

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const passwordValid = await bcrypt.compare(
    data.password,
    user.passwordhashed,
  );

  if (!passwordValid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
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
