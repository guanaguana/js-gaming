import { Link } from "react-router-dom"
import React from "react"

const About=()=>{
    return(
        <div>
            <Link to="/"><img src={require("../files/thelook.png")} alt="thelook" /></Link>
        </div>
    )
}
export default About