import { useState } from 'react'
import './switcherModes.scss'




export default function SwitcherModes() {
    const [active, setActive] = useState({ id: '1' })

    return (
        <div className="switcher-container grid-element-switcher">
            <div className={`runtime switcher-item ${active.id === '1' ? 'switcher-active' : ''} `}
                onClick={() => {
                    setActive(
                        { id: '1' }
                    )
                }}
            >
                <img className="icons" src={`src/assets/icons/${active.id === '1' ? 'eye-active.svg' : 'eye-inactive.svg'}`} width={40} height={40} alt="Runtime mode" />
                <p className="switcher-item-title" >Runtime</p>
            </div>
            <div className={`constructor switcher-item ${active.id === '2' ? 'switcher-active' : ''} `}
                onClick={() => {
                    setActive(
                        { id: '2' }
                    )
                }}
            >
                <img className="icons" src={`src/assets/icons/${active.id === '2' ? 'selector-active.svg' : 'selector-inactive.svg '}`} width={40} height={40} alt="Selector mode" />
                <p className="switcher-item-title">Constructor</p>
            </div>
        </div>
    )
}
