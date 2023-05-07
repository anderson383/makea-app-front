import { IProduct } from "@/src/services/models/product"
import { IProductState } from "../models/products"

import {PayloadAction} from '@reduxjs/toolkit'

export const updateProductCar = (state:IProductState, { payload }: PayloadAction<IProduct>) => {

  if (!payload.isAddCart) {
    state.products = state.products.filter(prodItem => prodItem.id !== payload.id)
  } else {
    state.products = [...state.products, payload]
  }
}

export const loadProducts = (state:IProductState, {payload }:PayloadAction<IProduct[]>) => {
  state.products = payload
}