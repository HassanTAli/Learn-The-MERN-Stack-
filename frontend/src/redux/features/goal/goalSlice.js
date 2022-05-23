import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer