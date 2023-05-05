import { ICategory } from "./category";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  isAddCart?: boolean;
  categoria?: string | ICategory;
}