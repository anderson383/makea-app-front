import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './slices/products.slice';

const rootReducer = combineReducers({
  product: productsSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;