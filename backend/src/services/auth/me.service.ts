import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findUserInfo } from "../../repositories/users/me.repository";

export const meService = async (userId: string) => {
  const user = await findUserInfo(userId);

  if (!user) {
    throw new AppError(ERROR.USER_NOT_FOUND);
  }

  return user;
};
