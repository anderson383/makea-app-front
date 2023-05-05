import { createSlice } from "@reduxjs/toolkit"
import { IProductState } from "../models/products"
import {updateProductCar} from '../actions/products.actions'

const INITIAL_STATE: IProductState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    updateProductCar
  }
})

export const {
  updateProductCar: updateProductCarSlice
} = productsSlice.actions;