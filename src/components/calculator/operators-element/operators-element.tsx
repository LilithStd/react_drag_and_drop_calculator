import { OPERATORS } from "../../../const/calculator"
import { operator } from "../../../store/calculator/calculatorSlice"
import { pickedElement, updateStatusPickedElement } from "../../../store/constructor/constructorSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hook"


export default function OperatorsElement() {
    const dispatch = useAppDispatch()
    const modeCalculator = useAppSelector(state => state.constructorReducer.constructorMode)
    const idElement = useAppSelector(state => state.constructorReducer.draggableItems)

    const dragStartHandler = () => {
        if (idElement.find(element => element.id === 'operators-element')) {
            console.log('find object');
            return
        }
        dispatch(pickedElement({ id: 'operators-element', status: false }))
    }

    const dragEndHandler = () => {
        console.log('drag end');
        // dispatch(pickedElement({ id: 'result-element', status: true }))
        dispatch(updateStatusPickedElement({ id: 'operators-element', status: true }))
    }

    return (
        <div className="block-operators"
            draggable={modeCalculator}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        >
            {OPERATORS.map((item) => (
                <button className="operators-item"
                    key={item}
                    onClick={() => {
                        dispatch(operator(item))
                    }}
                >{item}</button>)
            )}
        </div>
    )
}
