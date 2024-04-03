import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  progressValues: [],
}

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgressValues(state, action) {
      state.progressValues = action.payload
    },
  },
})

export const { setProgressValues } = progressSlice.actions

export default progressSlice.reducer
