import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface IInitialState {
  mode: boolean;
}

const initialState: IInitialState = {
  mode: false,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    }
  }
})

export const { changeMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
