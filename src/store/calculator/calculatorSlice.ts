import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CalculatorState {
  result: number,
  resultView: number,
  firstDigit: number,
  secondDigit: number,
  operator: string,
  prevResult: number,
  resultBoolean: boolean,
}

// Define the initial state using that type
const initialState: CalculatorState = {
  result: 0,
  resultView: 0,
  firstDigit: 0,
  secondDigit: 0,
  operator: '',
  prevResult: 0,
  resultBoolean: false,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     resultView (state, action:PayloadAction<number>) {
      state.resultView = action.payload

    }
  }
})
export default calculatorSlice.reducer