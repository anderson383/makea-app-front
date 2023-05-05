import { IProduct } from "../models/product";


export interface ProductsRepository {
  list (): Promise<IProduct[]>
}