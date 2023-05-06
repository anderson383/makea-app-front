import axiosIntance from '../config/axios-config';
import { IProduct } from '../models/product';
import { ProductsRepository } from './products.repository';
import {injectable} from 'inversify'

@injectable()
class ProductsRepositoryImpl implements ProductsRepository {

  constructor() {

  }
  async list (code:string): Promise<IProduct[]> {
    try {
      const {data} =await axiosIntance.get<IProduct[]>('/product/?code=' + code)
      return data.map(prod => ({...prod, isAddCart: false}))
    } catch (error) {
      console.error(error)
      return []
    }
  }

  async get (id:string): Promise<IProduct> { 
    try {
      const {data} =await axiosIntance.get<IProduct>('/product/' + id)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export {ProductsRepositoryImpl}