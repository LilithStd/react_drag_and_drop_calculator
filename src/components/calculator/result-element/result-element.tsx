import { resultCalculator, prevResult } from "../../../store/calculator/calculatorSlice"
import { pickedElement, updateStatusPickedElement } from "../../../store/constructor/constructorSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hook"


export default function ResultElement() {
    const dispatch = useAppDispatch()
    const modeCalculator = useAppSelector(state => state.constructorReducer.constructorMode)
    const idElement = useAppSelector(state => state.constructorReducer.draggableItems)

    const resultHandler = () => {
        dispatch(resultCalculator())
        dispatch(prevResult(true))
    }

    const dragStartHandler = () => {
        if (idElement.find(element => element.id === 'result-element')) {
            return
        }
        dispatch(pickedElement({ id: 'result-element', status: false }))
    }

    const dragEndHandler = () => {
        console.log('drag end');
        // dispatch(pickedElement({ id: 'result-element', status: true }))
        dispatch(updateStatusPickedElement({ id: 'result-element', status: true }))
    }


    return (
        <button className="block-get-result"
            onClick={() => {
                resultHandler()
            }}
            draggable={modeCalculator}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        >
            =
        </button>
    )
}
