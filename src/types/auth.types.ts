import { GenderEnum } from "./enum/enum";

// user register types
export interface IRegister {
  userName: string;
  gender?: GenderEnum;
  email: string;
  password: string;
}

export interface IUser {
  _id?: string;
  email?: string;
  userName?: string;
  hasVerifiedEmail?: boolean;
  role?: "Admin" | "User";
  avatar?: string;
  phoneNumber?: string;
  location?: string;
}

export interface IRegisterData {
  user?: IUser | null;

  error: string;
  accessToken?: string | null;
  refreshToken?: string | null;
}
export interface IRegisterRes {
  status?: boolean;
  message?: string;
  data?: IRegisterData;
}

//user login types
export interface LoginUser {
  email: string;
  password: string;
}
