import { findUserInfo } from "../../repositories/users/me.repository";

export const meService = async (userId: string) => {
  const user = await findUserInfo(userId);

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return user;
};
