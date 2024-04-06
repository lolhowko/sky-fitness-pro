import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
  password: null,
  progress: null,
}

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === userSlice.actions.initializeUserFromLocalStorage.type) {
    const storedEmail = localStorage.getItem('email')
    const storedToken = localStorage.getItem('token')
    const storedId = localStorage.getItem('id')
    const storedPassword = localStorage.getItem('password')
    const storedProgress = localStorage.getItem('progress')

    if (
      storedEmail &&
      storedToken &&
      storedId &&
      storedPassword &&
      storedProgress
    ) {
      store.dispatch(
        userSlice.actions.setUser({
          email: storedEmail,
          token: storedToken,
          id: storedId,
          password: storedPassword,
          progress: storedProgress,
        })
      )
    }
  }

  return next(action)
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.password = action.payload.password
      localStorage.setItem('email', state.email)
      localStorage.setItem('token', state.token)
      localStorage.setItem('id', state.id)
      localStorage.setItem('password', state.password)
      localStorage.setItem('progress', state.progress)
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      state.password = null
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('password')
      localStorage.removeItem('progress')
    },

    setEmail(state, action) {
      state.email = action.payload.email
      localStorage.setItem('email', state.email)
    },

    setPassword(state, action) {
      state.password = action.payload.password
      localStorage.setItem('password', state.password)
    },

    setProgress(state, action) {
      state.progress = action.payload.progress
      localStorage.setItem('progress', state.progress)
    },

    initializeUserFromLocalStorage() {
      // Пустное действие, middleware будет обрабатывать это действие
    },
  },
})

export const {
  setUser,
  removeUser,
  initializeUserFromLocalStorage,
  setEmail,
  setPassword,
  setProgress,
} = userSlice.actions
export default userSlice.reducer
export const userReducer = userSlice.reducer
export { localStorageMiddleware }
