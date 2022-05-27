import React from "react"
import { Link,useLocation } from "react-router-dom"

const Footer=()=>{
    const location=useLocation()
    return(
        <footer>
           {location.pathname==='/' && <Link to="/about"><img src={require("../files/picardia.png")} alt="picardia" /></Link>}
        </footer>
    )
}

export default Footer