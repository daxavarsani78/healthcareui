export interface IHttpsResponse<T> {
  message: string;
  response: T;
  status: number;
}

export class JWTDecodedToken {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;

  constructor(data?: any) {
    this.Id = data ? data.Id : null;
    this.FirstName = data ? data.FirstName : null;
    this.LastName = data ? data.LastName : null;
    this.Email = data ? data.Email : null;
    this.PhoneNumber = data ? data.PhoneNumber : null;
  }
}
export interface ISearchCriteria {
  text: string;
  pageNumber: number;
  rowPerPage: number;
  sortDirection: "asc" | "desc";
  sortBy: string;
  resolvedOnly: number; // -1:ALL 0:Un ResolvedOnly && 1:Resolved Only
}
export interface IDropDownFields {
  id: number;
  text: string;
  isActive: boolean;
}
