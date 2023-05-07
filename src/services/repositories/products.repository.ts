import { IProduct } from "../models/product";

export interface ProductsRepository {
  list (code:string): Promise<IProduct[]>
  get (id:string): Promise<IProduct> 
}