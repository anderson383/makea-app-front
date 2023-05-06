import { ICategory } from "./category";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  isAddCart?: boolean;
  categoria?: string | ICategory;
}