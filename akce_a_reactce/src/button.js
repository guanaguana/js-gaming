const Button=({text})=>{
    const onClick=()=>{
            console.log("wenomechainsama");
    }

    return(
        <button onClick={onClick}>{text}</button>
    )

}

Button.defaultProps={
    text:"wifenlooof"
}

export default Button