import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slices/userSlice'
import progressReducer from './slices/progressSlice'
import coursesReducer from './slices/coursesSlice'


export const store = configureStore({
  reducer: {
    user: useReducer,
    progress: progressReducer,
    coursesApp: coursesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})
