import axiosIntance from '../config/axios-config';
import { IProduct } from '../models/product';
import { ProductsRepository } from './products.repository';
import {injectable} from 'inversify'

@injectable()
class ProductsRepositoryImpl implements ProductsRepository {

  constructor() {

  }
  async list (): Promise<IProduct[]> {

    try {
      const {data} =await axiosIntance.get<IProduct[]>('/product')
      return data.map(prod => ({...prod, isAddCart: false}))
    } catch (error) {
      console.error(error)
      return []
    }
  }
}

export {ProductsRepositoryImpl}