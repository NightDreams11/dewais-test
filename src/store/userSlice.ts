import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IError, IUser } from "../types"

export interface UsersState {
  user: IUser | null
  error: IError | null
  isFetching: boolean
}

const initialState: UsersState = {
  user: null,
  error: null,
  isFetching: false,
}

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    },
    getError: (state, action: PayloadAction<any>) => {
      state.error = action.payload
    },
    toggleIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    },
  },
})

export const { getUser, getError, toggleIsFetching } = usersSlice.actions
