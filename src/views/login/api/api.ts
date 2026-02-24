import { request } from "@/request";

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = (data: LoginRequest) => {
  return request({
    url: "/login",
    method: "POST",
    data,
    needToken: false,
  });
};
