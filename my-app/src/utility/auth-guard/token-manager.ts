import { ENVIRONMENT } from "../../config";
import { AppTokenKey, LocalAppEncryptKey } from "../constant";
import { AppRoutes } from "../app-routes";
import { IUserDetails } from "../interfaces";
import jwtDecode from "jwt-decode";
import { JWTDecodedToken } from "../interfaces/common";

export const getDecodedToken = (token: string): JWTDecodedToken => {
  try {
    const decodedValue = jwtDecode(token);
    return new JWTDecodedToken(decodedValue);
  } catch {
    return new JWTDecodedToken();
  }
};

const clearCookiesAndLocalStorage = () => {
  localStorage.removeItem(ENVIRONMENT + AppTokenKey);
};

export const clearSession = (returnUrl?: string) => {
  clearCookiesAndLocalStorage();
};

export const getToken = (): string | undefined => {
  const encryptToken = localStorage.getItem(ENVIRONMENT + AppTokenKey);
  const token = doEncryptDecrypt(false, encryptToken);
  const sessionToken = token?.slice(1, -1);
  if (sessionToken) return sessionToken;
  else {
    clearCookiesAndLocalStorage();
    return undefined;
  }
};
export const setAuthorization = (jwtToken: string): void => {
  localStorage.setItem(
    ENVIRONMENT + AppTokenKey,
    doEncryptDecrypt(true, "bearer " + jwtToken)
  );
};
export const getUserDetails = (): IUserDetails | undefined => {
  const token = getToken();
  if (token) {
    const decodedToken = getDecodedToken(token);
    const userDetails: IUserDetails = {
      Id: decodedToken.Id,
      FirstName: decodedToken.FirstName,
      LastName: decodedToken.LastName,
      Email: decodedToken.Email,
      PhoneNumber: decodedToken.PhoneNumber,
    };
    return userDetails;
  }
  return undefined;
};
const doEncryptDecrypt = (isEncrypt: boolean, data: any): string => {
  if (data) {
    const CryptoJS = require("crypto-js");
    if (isEncrypt === true) {
      // Encrypt
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        LocalAppEncryptKey
      ).toString();
      return ciphertext;
    }
    // Decrypt
    const bytes = CryptoJS.AES.decrypt(data, LocalAppEncryptKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
  return "";
};
