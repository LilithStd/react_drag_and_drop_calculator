import './switcherModes.scss'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { constructorMode, mode, pickedElement } from '../../store/constructor/constructorSlice'
import { CONSTRUCTOR_MODE } from '../../const/calculator'




export default function SwitcherModes() {
    const dispatch = useAppDispatch()
    const statusConstructor = useAppSelector(state => state.constructorReducer.mode)

    const switchModeCalcalatorHandler = (mode: boolean) => {
        dispatch(constructorMode(mode))
    }

    const statusCalculatorHandler = (status: string) => {
        dispatch(mode(status))
    }


    return (
        <div className="switcher-container grid-element-switcher">
            <div className={`runtime switcher-item ${statusConstructor === CONSTRUCTOR_MODE.RUNTIME ? 'switcher-active' : ''} `}
                onClick={() => {
                    statusCalculatorHandler(CONSTRUCTOR_MODE.RUNTIME)
                    switchModeCalcalatorHandler(false)
                }}
            >
                <img className="icons" src={`src/assets/icons/${statusConstructor === CONSTRUCTOR_MODE.RUNTIME ? 'eye-active.svg' : 'eye-inactive.svg'}`} width={40} height={40} alt="Runtime mode" />
                <p className="switcher-item-title" >Runtime</p>
            </div>
            <div className={`constructor switcher-item ${statusConstructor === CONSTRUCTOR_MODE.CONSTRUCTOR ? 'switcher-active' : ''} `}
                onClick={() => {
                    statusCalculatorHandler(CONSTRUCTOR_MODE.CONSTRUCTOR)
                    switchModeCalcalatorHandler(true)
                }}
            >
                <img className="icons" src={`src/assets/icons/${statusConstructor === CONSTRUCTOR_MODE.CONSTRUCTOR ? 'selector-active.svg' : 'selector-inactive.svg '}`} width={40} height={40} alt="Selector mode" />
                <p className="switcher-item-title">Constructor</p>
            </div>
        </div>
    )
}
