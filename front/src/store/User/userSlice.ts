import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { filterTask } from '../../types/type'

interface UserState {
    numberOfPlayers: number,
    showModalWindow: boolean,
    elimination: boolean,
    difficulty_level: number,
    time_to_do: number,
}

const initialState: UserState = {
  numberOfPlayers: 0,
  showModalWindow: false,
  elimination: true,
  difficulty_level: 2,
  time_to_do: 5
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNumberOfPlayers: (state, action: PayloadAction<number | 0>) => {
        state.numberOfPlayers = action.payload
    },
    ModalWindow: (state, action: PayloadAction<boolean>) => {
        state.showModalWindow = action.payload
    },
    ChangeTaskProperties: (state, action: PayloadAction<filterTask>) => {
        state.elimination = action.payload.elimination,
        state.difficulty_level = action.payload.difficulty_level,
        state.time_to_do = action.payload.time_to_do
    }
  },
})

export const { setNumberOfPlayers, ModalWindow } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user

export default UserSlice.reducer