import { useAppDispatch, useAppSelector } from '../../store/hook'
import { firstDigit, secondDigit, resultCalculator, prevResult, operator, resultView, setError, setDot, clearCalculator } from '../../store/calculator/calculatorSlice'
import { ACTIONS, DIGITS, OPERATORS } from '../../const/calculator'
import './calculator.scss'


export const Calculator = () => {
    const dispatch = useAppDispatch()
    const operatorStatus = useAppSelector(state => state.calculatorReducer.operator)
    const firstNumber = useAppSelector(state => state.calculatorReducer.firstDigit)
    const secondNumber = useAppSelector(state => state.calculatorReducer.secondDigit)
    const error = useAppSelector(state => state.calculatorReducer.error)
    const resultBoolean = useAppSelector(state => state.calculatorReducer.resultBoolean)
    const resultViewer = useAppSelector(state => state.calculatorReducer.resultView)

    const numberHandler = (number: string) => {
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
            tempResult = `${secondNumber}${number}`

            dispatch(secondDigit(tempResult))
        }

        if (number === '.') {
            if (firstNumber !== '0' && !firstNumber.includes('.')) {
                tempResult = `${firstNumber}${number}`
                console.log(tempResult);

                dispatch(firstDigit(tempResult))
            }

            if (firstNumber !== '0' && secondNumber !== '0' && !firstNumber.includes('.') && !secondNumber.includes('.')) {
                tempResult = `${secondNumber}${number}`
                console.log(tempResult);

                dispatch(secondDigit(tempResult))
            }



        }


        if (firstNumber.includes('.') && secondNumber === '0' && operatorStatus === '') {
            tempResult = `${firstNumber}${number}`
            console.log(tempResult);

            dispatch(firstDigit(tempResult))
        }

        if (secondNumber.includes('.') && firstNumber !== '0' && operatorStatus !== '') {
            tempResult = `${secondNumber}${number}`
            console.log(tempResult);

            dispatch(secondDigit(tempResult))
        }

        dispatch(resultView(parseFloat(tempResult)))
    }

    const resultHandler = () => {
        dispatch(resultCalculator())
        dispatch(prevResult(true))
    }

    const clearResultHandler = () => {
        dispatch(clearCalculator())
    }

    return (
        <div className="container">
            <h1 className="visually-hidden">Calculator</h1>
            <div className="block-result">{error ? error : resultViewer}</div>
            <div className="block-operators">
                {OPERATORS.map((item) => (
                    <button className="operators-item"
                        key={item}
                        onClick={() => {
                            dispatch(operator(item))
                        }}
                    >{item}</button>)
                )}
            </div>
            <div className="block-numbers">
                {DIGITS.map((item) => (
                    <button className="numbers-item"
                        key={item}
                        onClick={() => {
                            numberHandler(item)
                        }}>{item}</button>
                ))}

                <button className="numbers-item"
                    onClick={() => {
                        clearResultHandler()
                    }}
                >C</button>
            </div>
            <button className="block-get-result"
                onClick={() => {
                    resultHandler()
                }}
            >
                =
            </button>
        </div >
    )
}

