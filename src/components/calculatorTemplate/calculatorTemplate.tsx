import './calculatorTemplate.scss'

export default function CalculatorTemplate() {
  return (
    <div className="container container-template grid-element-calculator-template">
      <h1 className="visually-hidden">Calculator Template</h1>
      <img src="src/assets/icons/drag_picture.svg" width={50} height={50} alt="drag_place" />
      <h2>Drag here</h2>
      <p>any elements from left panel</p>
    </div>
  )
}
