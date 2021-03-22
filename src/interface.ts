export interface GeneralResponse {
  error: number;
}

export interface PostRegistrationRequest {
  username: string;
  displayed_name: string;
  password: string;
}

export interface User {
  username: string;
  displayed_name: string;
  hashed_password: string;
}

export interface GetRegistrationResponse {
  error: number;
  data: User[];
}
