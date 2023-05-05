import { IrootState } from './models/root';
import rootReducer from './root.reducer';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore<IrootState>({
  reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export default store;