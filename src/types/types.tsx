import { GenderEnum } from "./enum/enum";

// type for servicegrid card
export type serviceGrid = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
};

//serviceList types
export type serviceList = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
};

//servieList category

export type categories = {
  id: number;
  title: string;
  category_id: string;
};

// user register types
export type Register = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  email: string;
  password: string;
  image: string;
};

//user login types
export type LoginUser = {
  email: string;
  password: string;
};
