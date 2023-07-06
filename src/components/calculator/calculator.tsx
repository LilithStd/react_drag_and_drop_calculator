import { useAppDispatch, useAppSelector } from '../../store/hook'
import { firstDigit, secondDigit, resultCalculator, prevResult, operator, resultView, setError, setDot, clearCalculator } from '../../store/calculator/calculatorSlice'
import { ACTIONS, DIGITS, OPERATORS } from '../../const/calculator'
import './calculator.scss'
import ResultViewElement from './result-view-element/result-view-element'
import NumberElement from './number-element/number-element'
import OperatorsElement from './operators-element/operators-element'
import ResultElement from './result-element/result-element'
import CalculatorTemplate from '../calculatorTemplate/calculatorTemplate'



export default function Calculator() {
    // const dispatch = useAppDispatch()
    const idElement = useAppSelector(state => state.constructorReducer.draggableItems)
    // const operatorStatus = useAppSelector(state => state.calculatorReducer.operator)
    // const firstNumber = useAppSelector(state => state.calculatorReducer.firstDigit)
    // const secondNumber = useAppSelector(state => state.calculatorReducer.secondDigit)
    // const error = useAppSelector(state => state.calculatorReducer.error)
    // const resultBoolean = useAppSelector(state => state.calculatorReducer.resultBoolean)
    // const resultViewer = useAppSelector(state => state.calculatorReducer.resultView)
    // const modeCalculator = useAppSelector(state => state.constructorReducer.constructorMode)

    // const numberHandler = (number: string) => {
    //     let tempResult = '0'

    //     if (error !== '') {
    //         dispatch(setError(ACTIONS.RESET_ERROR))
    //     }

    //     if (firstNumber === '0' && operatorStatus === '') {
    //         tempResult = number
    //         dispatch(firstDigit(tempResult))
    //     }
    //     if (firstNumber !== '0' && operatorStatus === '' && secondNumber === '0') {
    //         tempResult = `${firstNumber}${number}`
    //         dispatch(firstDigit(tempResult))
    //     }
    //     if (firstNumber !== '0' && operatorStatus !== '' && secondNumber === '0') {
    //         tempResult = number
    //         dispatch(secondDigit(tempResult))
    //     }
    //     if (firstNumber !== '0' && operatorStatus !== '' && secondNumber !== '0') {
    //         tempResult = `${secondNumber}${number}`
    //         dispatch(secondDigit(tempResult))
    //     }
    //     if (resultBoolean && operatorStatus !== '') {
    //         if (secondNumber === '0') {
    //             tempResult = number
    //             dispatch(secondDigit(tempResult))
    //         }
    //         if (secondNumber !== '0') {
    //             console.log('prev result + second number');

    //             tempResult = `${secondNumber}${number}`
    //             dispatch(secondDigit(tempResult))
    //         }
    //         if (number === '.') {
    //             tempResult = `${secondNumber}${number}`
    //             dispatch(secondDigit(tempResult))
    //         }
    //     }

    //     if (number === '.') {
    //         if (firstNumber !== '0' && !firstNumber.includes('.')) {
    //             tempResult = `${firstNumber}${number}`
    //             dispatch(firstDigit(tempResult))
    //         }

    //         if (firstNumber !== '0' && secondNumber !== '0' && !firstNumber.includes('.') && !secondNumber.includes('.')) {
    //             tempResult = `${secondNumber}${number}`
    //             dispatch(secondDigit(tempResult))
    //         }

    //         if (firstNumber === '0' && secondNumber === '0' && operatorStatus === '') {
    //             tempResult = `${firstNumber}${number}`
    //             dispatch(firstDigit(tempResult))
    //         }

    //         if (secondNumber === '0' && firstNumber !== '0' && operatorStatus !== '') {
    //             tempResult = `${secondNumber}${number}`
    //             dispatch(secondDigit(tempResult))
    //         }

    //     }

    //     if (firstNumber.includes('.') && secondNumber === '0' && operatorStatus === '') {
    //         if (number !== '.') {
    //             tempResult = `${firstNumber}${number}`
    //             dispatch(firstDigit(tempResult))
    //         }

    //         if (number === '.') {
    //             tempResult = firstNumber
    //             dispatch(firstDigit(tempResult))
    //         }

    //         if (number === '.' && firstNumber === '0') {
    //             console.log('test');

    //         }

    //     }

    //     if (secondNumber.includes('.') && firstNumber !== '0' && operatorStatus !== '') {
    //         console.log('2nd number');

    //         if (number !== '.') {
    //             tempResult = `${secondNumber}${number}`
    //             dispatch(secondDigit(tempResult))
    //         }
    //         if (number === '.') {
    //             tempResult = secondNumber
    //             dispatch(secondDigit(tempResult))
    //         }
    //     }



    //     dispatch(resultView(tempResult))
    // }

    // const resultHandler = () => {
    //     dispatch(resultCalculator())
    //     dispatch(prevResult(true))
    // }

    // const clearResultHandler = () => {
    //     dispatch(clearCalculator())
    // }

    return (
        <div className='main-container'>
            <div className="container grid-element-calculator">
                {/* <h1 className="visually-hidden">Calculator</h1>
                <div className="block-result"
                    draggable={modeCalculator}
                >{error ? error : resultViewer}</div> */}
                {idElement.find(element => element.id === 'result-element') && idElement.find(element => element.status === true) ? <ResultViewElement disabled /> : <ResultViewElement />}
                {/* <div className="block-operators">
                    {OPERATORS.map((item) => (
                        <button className="operators-item"
                            key={item}
                            onClick={() => {
                                dispatch(operator(item))
                            }}
                        >{item}</button>)
                    )}
                </div> */}
                <OperatorsElement />
                {/* <div className="block-numbers">
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
                </div> */}
                <NumberElement />
                {/* <button className="block-get-result"
                    onClick={() => {
                        resultHandler()
                    }}
                >
                    =
                </button> */}
                <ResultElement />
                {/* <div
                    onDragOver={(e) => {
                        e.preventDefault()
                        console.log('dragOver');

                    }}
                    onDrop={(e) => {
                        e.preventDefault()
                        console.log('drop event ' + e.target);


                    }}
                >пусто блок для теста</div> */}
            </div >
            <CalculatorTemplate />
            {/* <div className="container container-template grid-element-calculator-template">
                <h1 className="visually-hidden">Calculator Template</h1>
                <img src="src/assets/icons/drag_picture.svg" width={50} height={50} alt="drag_place"
                />
                <h2>Drop here</h2>
                <p>any elements from left panel</p>
            </div> */}
        </div>
    )
}

