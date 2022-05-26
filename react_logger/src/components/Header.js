import React from "react"
import Tlacitko from './Button.js';

const Header=({onAdd,napis})=>{
    return(
        <header>
            <h1>Task Manager</h1>
            <Tlacitko onClick={onAdd} napis={napis ? "Zavřít" : "Vložit"} />
            <hr />
        </header>
    )
}
export default Header