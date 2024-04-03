import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: localStorage.getItem('userEmail') || null,
  token: localStorage.getItem('userToken') || null,
  id: localStorage.getItem('userId') || null,
  currentUser: null,
  fullCurrentUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id

      localStorage.setItem('userEmail', action.payload.email)
      localStorage.setItem('userToken', action.payload.token)
      localStorage.setItem('userId', action.payload.id)
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null

      localStorage.removeItem('userEmail')
      localStorage.removeItem('userToken')
      localStorage.removeItem('userId')
    },
    setCurrentUser: (state, action) => {
      console.log(action.payload)
      state.currentUser = action.payload
    },
    setFullCurrentUser: (state, action) => {
      //Весь текущий пользователь с базы, вместе с его курсами
      state.fullCurrentUser = action.payload
    },
  },
})

export const { setUser, removeUser, setCurrentUser, setFullCurrentUser } =
  userSlice.actions

export default userSlice.reducer
