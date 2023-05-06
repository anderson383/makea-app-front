import { IProduct } from "@/src/services/models/product"
import { IProductState } from "../models/products"

import {PayloadAction} from '@reduxjs/toolkit'

export const updateProductCar = (state:IProductState, { payload }: PayloadAction<IProduct>) => {
  state.products = state.products.map(prodItem=> prodItem.id === payload.id ? {...prodItem, isAddCart: !prodItem.isAddCart} : prodItem)
}

export const loadProducts = (state:IProductState, {payload }:PayloadAction<IProduct[]>) => {
  state.products = payload
}