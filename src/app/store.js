import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/formSlice'
import dazzleReducer from '../features/dazzleSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    dazzle: dazzleReducer
  },
})