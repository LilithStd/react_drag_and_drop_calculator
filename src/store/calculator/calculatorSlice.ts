import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CalculatorState {
  result: number,
  resultView: number,
  firstDigit: string,
  secondDigit: string,
  operator: string,
  prevResult: string,
  resultBoolean: boolean,
  dotBoolean: boolean,
  error: string
}

// Define the initial state using that type
const initialState: CalculatorState = {
  result: 0,
  resultView: 0,
  firstDigit: '0',
  secondDigit: '0',
  operator: '',
  prevResult: '',
  resultBoolean: false,
  dotBoolean:false,
  error:''
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
      if(state.firstDigit === '0') {
        state.firstDigit = state.prevResult
      }
      const firstDigit = parseFloat(state.firstDigit)
      const secondDigit = parseFloat(state.secondDigit)

        switch (state.operator) {
            case ('/'):
                if(state.secondDigit === '0') {
                  state.error = "Error"
                  state.firstDigit = '0'
                  state.secondDigit = '0'
                  state.operator = ''
                  break
                }
                state.result = firstDigit / secondDigit
                state.resultView = state.result
                state.prevResult = state.result.toString()
                state.firstDigit = '0'
                state.secondDigit = '0'
                state.operator = ''
                state.error = ''
                break
            case ('x'):
                state.result = firstDigit * secondDigit
                state.resultView = state.result
                state.prevResult = state.result.toString()
                state.firstDigit = '0'
                state.secondDigit = '0'
                state.operator = ''
                break
            case ('-'):
                state.result = firstDigit - secondDigit
                state.resultView = state.result
                state.prevResult = state.result.toString()
                state.firstDigit = '0'
                state.secondDigit = '0'
                state.operator = ''
                break
            case ('+'):
                state.result = firstDigit + secondDigit
                state.resultView = state.result
                state.prevResult = state.result.toString()
                state.firstDigit = '0'
                state.secondDigit = '0'
                state.operator = ''
                break
            default:
                
        }
         
    },
    firstDigit (state, action:PayloadAction<string>) {
      state.firstDigit = action.payload

    },
    secondDigit (state, action:PayloadAction<string>) {
      state.secondDigit = action.payload
    },
    prevResult (state, action: PayloadAction<boolean>) {
      state.resultBoolean = action.payload
    },
    operator (state, action:PayloadAction<string>) {
      state.operator = action.payload
    },
    resultBoolean( state, action: PayloadAction<boolean>) {
      state.resultBoolean = action.payload
    },
    setError (state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setDot (state, action:PayloadAction<boolean>) {
      state.dotBoolean = action.payload
    },
    clearCalculator (state) {
      state.firstDigit = '0',
      state.secondDigit = '0',
      state.operator = '',
      state.prevResult = '0',
      state.error = '',
      state.result = 0,
      state.resultView = 0,
      state.resultBoolean = false,
      state.dotBoolean = false
    }
  }
})

export const { resultCalculator, firstDigit, secondDigit, prevResult, resultBoolean, operator, resultView, setError, setDot, clearCalculator} = calculatorSlice.actions

export default calculatorSlice.reducer