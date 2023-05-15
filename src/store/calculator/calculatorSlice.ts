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

    },
    resultCalculator (state)  {
        switch (state.operator) {
            case ('/'):
                state.result = state.firstDigit / state.secondDigit
                state.resultView = state.result
                state.prevResult = state.result
                state.firstDigit = 0
                state.secondDigit = 0
                state.operator = ''
                break
            case ('x'):
                state.result = state.firstDigit * state.secondDigit
                state.resultView = state.result
                state.prevResult = state.result
                state.firstDigit = 0
                state.secondDigit = 0
                state.operator = ''
                break
            case ('-'):
                state.result = state.firstDigit - state.secondDigit
                state.resultView = state.result
                state.prevResult = state.result
                state.firstDigit = 0
                state.secondDigit = 0
                state.operator = ''
                break
            case ('+'):
                state.result = state.firstDigit + state.secondDigit
                state.resultView = state.result
                state.prevResult = state.result
                state.firstDigit = 0
                state.secondDigit = 0
                state.operator = ''
                break
            default:
                
        }
         
    },
    firstDigit (state, action:PayloadAction<number>) {
      state.firstDigit = action.payload

    },
    secondDigit (state, action:PayloadAction<number>) {
      state.secondDigit = action.payload
    },
    prevResult (state) {
      state.resultBoolean = true
    },
    operator (state, action:PayloadAction<string>) {
      state.operator = action.payload
    },
    resultBoolean( state, action: PayloadAction<boolean>) {
      state.resultBoolean = action.payload
    },
  }
})

export const { resultCalculator, firstDigit, secondDigit, prevResult, resultBoolean, operator, resultView} = calculatorSlice.actions

export default calculatorSlice.reducer