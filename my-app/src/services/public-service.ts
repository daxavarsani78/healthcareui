import { AxiosResponse } from "axios";
import httpClient from "./base-service";
import { IHttpsResponse } from "../utility/interfaces";
import { APIRoutes } from "../utility/app-routes";

export const addEnquiry = async (
  request: any
): Promise<AxiosResponse<IHttpsResponse<any>>> =>
  httpClient.post<IHttpsResponse<any>>(APIRoutes.enquiry, request);

export const getEnquiry = async (
  request: any
): Promise<AxiosResponse<IHttpsResponse<any>>> =>
  httpClient.post<IHttpsResponse<any>>(APIRoutes.getEnquiry, request);

export const enquiryMarkAsResolved = async (
  id: number,
  isResolved: boolean
): Promise<AxiosResponse<IHttpsResponse<any>>> =>
  httpClient.put<IHttpsResponse<any>>(
    `${
      isResolved ? APIRoutes.markAsUnResolved : APIRoutes.markAsResolved
    }/${id}`
  );

export const deleteEnquiry = async (
  id: number
): Promise<AxiosResponse<IHttpsResponse<any>>> =>
  httpClient.delete<IHttpsResponse<any>>(`${APIRoutes.deleteEnquiry}/${id}`);
