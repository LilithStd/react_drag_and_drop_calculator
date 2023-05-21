import { useAppDispatch, useAppSelector } from '../../store/hook'
import { firstDigit, secondDigit, resultCalculator, prevResult, operator, resultView, setError } from '../../store/calculator/calculatorSlice'
import { ACTIONS, DIGITS, OPERATORS } from '../../const/calculator'
import './calculator.scss'


export const Calculator = () => {
    const dispatch = useAppDispatch()
    const operatorStatus = useAppSelector(state => state.calculatorReducer.operator)
    const firstNumber = useAppSelector(state => state.calculatorReducer.firstDigit)
    const secondNumber = useAppSelector(state => state.calculatorReducer.secondDigit)
    // const previousResult = useAppSelector(state => state.calculatorReducer.prevResult)
    const error = useAppSelector(state => state.calculatorReducer.error)
    const resultBoolean = useAppSelector(state => state.calculatorReducer.resultBoolean)
    const resultViewer = useAppSelector(state => state.calculatorReducer.resultView)

    const numberHandler = (number: number) => {
        let tempResult = 0

        if (error !== '') {
            dispatch(setError(ACTIONS.RESET_ERROR))
        }

        if (firstNumber === 0 && operatorStatus === '') {
            tempResult = number
            dispatch(firstDigit(tempResult))
        }
        if (firstNumber !== 0 && operatorStatus === '' && secondNumber === 0) {
            tempResult = Number(`${firstNumber}${number}`)
            dispatch(firstDigit(tempResult))

        }
        if (firstNumber !== 0 && operatorStatus !== '' && secondNumber === 0) {
            tempResult = number
            dispatch(secondDigit(tempResult))
        }
        if (firstNumber !== 0 && operatorStatus !== '' && secondNumber !== 0) {
            tempResult = Number(`${secondNumber}${number}`)
            dispatch(secondDigit(tempResult))
        }
        if (resultBoolean && operatorStatus !== '') {
            tempResult = Number(`${secondNumber}${number}`)
            dispatch(secondDigit(tempResult))
        }
        dispatch(resultView(tempResult))
    }

    const resultHandler = () => {
        dispatch(resultCalculator())
        dispatch(prevResult(true))
        console.log(error);
        console.log(resultBoolean);

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
                <button className="numbers-item">,</button>
                <button className="numbers-item">C</button>
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

