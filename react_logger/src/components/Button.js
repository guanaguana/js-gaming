import React from "react"

const Button = ({onClick,napis})=>{

    return(
        <button onClick={onClick}>{napis}</button>
    )
}

export default Button;