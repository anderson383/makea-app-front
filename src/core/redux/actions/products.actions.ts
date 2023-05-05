import { IProduct } from "@/src/services/models/product"
import { IProductState } from "../models/products"

import {PayloadAction} from '@reduxjs/toolkit'

export const updateProductCar = (state:IProductState, { payload }: PayloadAction<IProduct>) => {
  const existProd = state.products.find(prod => prod.id === payload.id)

  if (existProd) {
    state.products = state.products.filter(prod => prod.id !== payload.id)
  } else {
    state.products = [...state.products, payload]
  }
}