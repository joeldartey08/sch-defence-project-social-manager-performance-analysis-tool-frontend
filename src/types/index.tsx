export type Primitive = number | string;

export interface Product {
  readonly id: Primitive;
  name: string;
  category: string;
  description?: string;
  size?: Primitive;
  color: string[];
  old_price?: number;
  new_price: number;
  image: string;
  gender: "male" | "female" | "unisex";
}

export type Cart = Product & { quantity: number };

export interface User {
  readonly id: Primitive;
  username: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
}

export interface Contact {
  name: string;
  email: string;
  no: number;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  status: number;
  success: boolean;
  data: T;
  errors?: Record<string, string[]>;
}

export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = {
  username: string;
  email: string;
  password: string;
};
export type CodeData = {
  email: string;
  code: string;
};
