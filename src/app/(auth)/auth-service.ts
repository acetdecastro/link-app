import { API_AUTH_URL } from "@/constants/urls";
import axios from "axios";
import { LoginFormFields } from "./login/login-dto";
import { SignupFormFields } from "./signup-dto";

function logIn(data: LoginFormFields) {
  return axios.post(`${API_AUTH_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function signUp(data: SignupFormFields) {
  return axios.post(`${API_AUTH_URL}/signup`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { logIn, signUp };
