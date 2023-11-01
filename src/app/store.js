import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/formSlice'
import dazzleReducer from '../features/dazzleSlice'
import dangReducer from '../features/dangSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    dazzle: dazzleReducer,
    dang: dangReducer
  },
})