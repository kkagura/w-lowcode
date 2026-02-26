import { request } from "@/request";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export const login = (data: LoginRequest) => {
  return request<LoginResponse, LoginRequest>({
    url: "/auth/signIn",
    method: "POST",
    data,
    needToken: false,
  });
};

export interface UserInfoResponse {
  username: string;
  nickname: string;
}
export const getUserInfo = () => {
  return request<UserInfoResponse, void>({
    url: "/auth/getInfo",
    method: "GET",
  });
};
