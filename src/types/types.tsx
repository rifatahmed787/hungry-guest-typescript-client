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

//booking table
export type BookingTable = {
  email: string;
  date: string;
  time: string;
  name: string;
  people: string;
  phone: string;
};
