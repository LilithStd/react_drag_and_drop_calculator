import { ACTIONS, DIGITS } from "../../../const/calculator"
import { setError, firstDigit, secondDigit, resultView, clearCalculator } from "../../../store/calculator/calculatorSlice"
import { pickedElement, updateStatusPickedElement } from "../../../store/constructor/constructorSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hook"


export default function NumberElement() {
    const dispatch = useAppDispatch()
    const operatorStatus = useAppSelector(state => state.calculatorReducer.operator)
    const firstNumber = useAppSelector(state => state.calculatorReducer.firstDigit)
    const secondNumber = useAppSelector(state => state.calculatorReducer.secondDigit)
    const error = useAppSelector(state => state.calculatorReducer.error)
    const resultBoolean = useAppSelector(state => state.calculatorReducer.resultBoolean)
    const modeCalculator = useAppSelector(state => state.constructorReducer.constructorMode)
    const idElement = useAppSelector(state => state.constructorReducer.draggableItems)

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
            if (secondNumber === '0') {
                tempResult = number
                dispatch(secondDigit(tempResult))
            }
            if (secondNumber !== '0') {
                console.log('prev result + second number');

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

            if (number === '.' && firstNumber === '0') {
                console.log('test');

            }

        }

        if (secondNumber.includes('.') && firstNumber !== '0' && operatorStatus !== '') {
            console.log('2nd number');

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

    const clearResultHandler = () => {
        dispatch(clearCalculator())
    }

    const dragStartHandler = () => {
        if (idElement.find(element => element.id === 'numbers-element')) {
            return
        }
        dispatch(pickedElement({ id: 'numbers-element', status: false }))
    }

    const dragEndHandler = () => {
        console.log('drag end');
        // dispatch(pickedElement({ id: 'result-element', status: true }))
        dispatch(updateStatusPickedElement({ id: 'numbers-element', status: true }))
    }

    return (
        <div className="block-numbers"
            onDragStart={dragStartHandler}
            draggable={modeCalculator}
            onDragEnd={dragEndHandler}
        >
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
    )
}
