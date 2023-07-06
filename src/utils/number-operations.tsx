import { ACTIONS } from "../const/calculator"
import { setError, firstDigit, secondDigit, resultView } from "../store/calculator/calculatorSlice"
import { useAppDispatch, useAppSelector } from "../store/hook"



export const NumberOperations = (number: string) => {
    const dispatch = useAppDispatch()
    const operatorStatus = useAppSelector(state => state.calculatorReducer.operator)
    const firstNumber = useAppSelector(state => state.calculatorReducer.firstDigit)
    const secondNumber = useAppSelector(state => state.calculatorReducer.secondDigit)
    const error = useAppSelector(state => state.calculatorReducer.error)
    const resultBoolean = useAppSelector(state => state.calculatorReducer.resultBoolean)

    let tempResult = '0'

    if (error !== '') {
        dispatch(setError(ACTIONS.RESET_ERROR))
    }

    if (firstNumber === '0' && operatorStatus === '') {
        tempResult = number
        dispatch(firstDigit(tempResult))
    }
    if (firstNumber !== '0' && operatorStatus === '' && secondNumber === '0') {
        tempResult = `${firstNumber}${number}`
        dispatch(firstDigit(tempResult))
    }
    if (firstNumber !== '0' && operatorStatus !== '' && secondNumber === '0') {
        tempResult = number
        dispatch(secondDigit(tempResult))
    }
    if (firstNumber !== '0' && operatorStatus !== '' && secondNumber !== '0') {
        tempResult = `${secondNumber}${number}`
        dispatch(secondDigit(tempResult))
    }
    if (resultBoolean && operatorStatus !== '') {
        if (secondNumber === '0') {
            tempResult = number
            dispatch(secondDigit(tempResult))
        }
        if (secondNumber !== '0') {
            tempResult = `${secondNumber}${number}`
            dispatch(secondDigit(tempResult))
        }
        if (number === '.') {
            tempResult = `${secondNumber}${number}`
            dispatch(secondDigit(tempResult))
        }
    }

    if (number === '.') {
        if (firstNumber !== '0' && !firstNumber.includes('.')) {
            tempResult = `${firstNumber}${number}`
            dispatch(firstDigit(tempResult))
        }

        if (firstNumber !== '0' && secondNumber !== '0' && !firstNumber.includes('.') && !secondNumber.includes('.')) {
            tempResult = `${secondNumber}${number}`
            dispatch(secondDigit(tempResult))
        }

        if (firstNumber === '0' && secondNumber === '0' && operatorStatus === '') {
            tempResult = `${firstNumber}${number}`
            dispatch(firstDigit(tempResult))
        }

        if (secondNumber === '0' && firstNumber !== '0' && operatorStatus !== '') {
            tempResult = `${secondNumber}${number}`
            dispatch(secondDigit(tempResult))
        }

    }

    if (firstNumber.includes('.') && secondNumber === '0' && operatorStatus === '') {
        if (number !== '.') {
            tempResult = `${firstNumber}${number}`
            dispatch(firstDigit(tempResult))
        }

        if (number === '.') {
            tempResult = firstNumber
            dispatch(firstDigit(tempResult))
        }

    }

    if (secondNumber.includes('.') && firstNumber !== '0' && operatorStatus !== '') {
        if (number !== '.') {
            tempResult = `${secondNumber}${number}`
            dispatch(secondDigit(tempResult))
        }
        if (number === '.') {
            tempResult = secondNumber
            dispatch(secondDigit(tempResult))
        }
    }



    dispatch(resultView(tempResult))
}

