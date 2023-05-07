import { IProduct } from "../models/product";

export interface ProductsRepository {

  /**
   * Get list elements
   * @param {string} code A code category filter
   */
  list (code:string): Promise<IProduct[]>

  /**
   * Get One element
   * @param {string} id A id product
   */
  get (id:string): Promise<IProduct> 
}