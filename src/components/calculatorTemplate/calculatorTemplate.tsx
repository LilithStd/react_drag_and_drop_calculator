import React, { useState } from 'react';
import './calculatorTemplate.scss'
import ResultViewElement from '../calculator/result-view-element/result-view-element';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { pickedElement } from '../../store/constructor/constructorSlice';
import NumberElement from '../calculator/number-element/number-element';
import OperatorsElement from '../calculator/operators-element/operators-element';
import ResultElement from '../calculator/result-element/result-element';

export default function CalculatorTemplate() {
  const [drop, setDrop] = useState(false)
  const dispatch = useAppDispatch()
  const idElement = useAppSelector(state => state.constructorReducer.draggableItems)

  return (
    <div className="container container-template grid-element-calculator-template">
      <h1 className="visually-hidden">Calculator Template</h1>
      <div className='container-result'
        onDragOver={(e) => {
          e.preventDefault()

        }}
      >

      </div>
      {idElement.find(element => element.id === 'result-view-element') && idElement.find(element => element.status === true) ? <ResultViewElement disabled={true} /> : ''}
      {/* <div className="container-operator"> */}
      {idElement.find(element => element.id === 'operators-element') && idElement.find(element => element.status === true) ? <OperatorsElement /> : ''}
      {/* </div> */}
      {/* <div className="container-number"> */}
      {idElement.find(element => element.id === 'numbers-element') && idElement.find(element => element.status === true) ? <NumberElement /> : ''}
      {/* </div> */}
      {idElement.find(element => element.id === 'result-element') && idElement.find(element => element.status === true) ? <ResultElement /> : ''}
      {
        idElement.length > 0 && idElement.some(element => element.status === true) ? '' : (
          <div className="block-template">
            <img src="src/assets/icons/drag_picture.svg" width={50} height={50} alt="drag_place"
              onDragOver={(e) => {
                e.preventDefault()

              }}
            // onDrop={() => {
            //   setDrop(
            //     true
            //   )
            // }}
            />
            <h2>Drag here</h2>
            <p>any elements from left panel</p>
          </div>
        )
      }


    </div>
  )
}
