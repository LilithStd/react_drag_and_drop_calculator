import Calculator from '../components/calculator/calculator'
import CalculatorTemplate from '../components/calculatorTemplate/calculatorTemplate'
import SwitcherModes from '../components/switcherModes/switcherModes'
import './App.scss'

function App() {

  return (
    <>
      {/* <div className='grid-container'> */}
      {/* <div className='ramp ramp-1'>Block 1</div> */}
      {/* <div className=' ramp ramp-2'>Block 2</div>
      <div className='ramp ramp-3'>Block 3</div>
      <div className='ramp ramp-4'>Block 4</div> */}
      {/* </div> */}
      <SwitcherModes />
      <Calculator />
      {/* <CalculatorTemplate /> */}
    </>
  )
}

export default App
