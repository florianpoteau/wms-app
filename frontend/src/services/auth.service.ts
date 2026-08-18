import type { loginFormData } from "../forms/login.schema";
import axios from "axios";

export const loginService = async (data: loginFormData) => {
  return axios.post("/api/auth/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
