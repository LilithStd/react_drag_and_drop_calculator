import { useAppDispatch, useAppSelector } from "../../../store/hook"
import { pickedElement, updateStatusPickedElement } from "../../../store/constructor/constructorSlice"


export default function ResultViewElement({ disabled = false }) {
    const dispatch = useAppDispatch()
    const resultViewer = useAppSelector(state => state.calculatorReducer.resultView)
    const modeCalculator = useAppSelector(state => state.constructorReducer.constructorMode)
    const error = useAppSelector(state => state.calculatorReducer.error)
    const testD = useAppSelector(state => state.constructorReducer.draggableItems)
    const idElement = useAppSelector(state => state.constructorReducer.draggableItems)


    const dragStartHandler = () => {
        if (idElement.find(element => element.id === 'result-view-element')) {
            return
        }
        dispatch(pickedElement({ id: 'result-view-element', status: false }))
    }

    const dragEndHandler = () => {
        console.log('drag end');
        // dispatch(pickedElement({ id: 'result-element', status: true }))
        dispatch(updateStatusPickedElement({ id: 'result-view-element', status: true }))
    }

    return (
        <div className={`block-result ${disabled ? 'disabled-item' : ''}`}
            draggable={modeCalculator}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        >{error ? error : resultViewer}</div>
    )
}
