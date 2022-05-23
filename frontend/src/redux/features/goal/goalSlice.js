import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './goalService'

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

// create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, ThunkAPI) => {
    try {
      const token = ThunkAPI.getState().auth.user.token

      return await goalService.createGoal(goalData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return ThunkAPI.rejectWithValue(message)
    }
  }
)

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
