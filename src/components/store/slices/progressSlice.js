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
    setProgress(state, { payload }) {
      state.progress = payload
    },
  },
})

export const { setProgressValues,setProgress } = progressSlice.actions

export default progressSlice.reducer
