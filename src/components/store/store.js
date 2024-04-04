import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slices/userSlice'
import progressReducer from './slices/progressSlice'
import newCourseReducer from './slices/courseWorkoutSlice'
import * as api from '../http/config'
import { localStorageMiddleware } from './slices/userSlice'
import { databaseURL } from '../http/http'

export const store = configureStore({
  reducer: {
    user: useReducer,
    progress: progressReducer,
    newCourse: newCourseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          databaseURL,
          api,
        },
      },
    }).concat(localStorageMiddleware),
})
