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

// Get User Data
export const getGoals = createAsyncThunk(
  'goals/getAll',
  async (_, ThunkAPI) => {
    try {
      const token = ThunkAPI.getState().auth.user.token
      return await goalService.getGoals(token)
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

// Delete user goal
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, ThunkAPI) => {
    try {
      const token = ThunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
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
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(payload)
      })

      .addCase(createGoal.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.message = payload
      })
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGoals.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = payload
      })

      .addCase(getGoals.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.message = payload
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })

      .addCase(deleteGoal.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.message = payload
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
