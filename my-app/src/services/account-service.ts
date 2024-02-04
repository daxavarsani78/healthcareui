import { AxiosResponse } from "axios";
import httpClient from "./base-service";
import {
  IHttpsResponse,
  ILoginRequest,
  ILoginResponse,
} from "../utility/interfaces";
import { APIRoutes } from "../utility/app-routes";

export const login = async (
  request: ILoginRequest
): Promise<AxiosResponse<IHttpsResponse<ILoginResponse>>> =>
  httpClient.post<IHttpsResponse<ILoginResponse>>(APIRoutes.login, request);

export const signUp = async (
  request: any
): Promise<AxiosResponse<IHttpsResponse<any>>> =>
  httpClient.post<IHttpsResponse<any>>(APIRoutes.signup, request);
