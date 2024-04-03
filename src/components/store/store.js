import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slices/userSlice'
import progressReducer from './slices/progressSlice'


export const store = configureStore({
  reducer: {
    user: useReducer,
    progress: progressReducer,
  },
})
