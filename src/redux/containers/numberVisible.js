import React from "react"
import { connect } from 'react-redux'

function Number({count}){
    console.log(count)
    return(
        <span>{count}</span>    
    )
}

const mapstateToProps = (state)=>{
    return state
}
const NumberVisible = connect(mapstateToProps)(Number)
export default NumberVisible