export interface IUserDetails {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
}
export interface ILoginRequest {
  email: string;
  otp: number;
}
export interface ILoginResponse {
  token: string;
}
