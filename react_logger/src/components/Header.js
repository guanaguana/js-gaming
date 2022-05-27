import React from "react"
import Tlacitko from './Button.js'
import { useLocation } from "react-router-dom"

const Header=({onAdd,napis})=>{
    const location=useLocation()
    return(
        <header>
            <h1>Task Manager</h1>
          {location.pathname==="/" && <Tlacitko onClick={onAdd} napis={napis ? "Zavřít" : "Vložit"} />}
            <hr />
        </header>
    )
}
export default Header