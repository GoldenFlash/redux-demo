import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'
 function Count (e){
     console.log(e)
    return(
        <button onClick={()=>{
            e.dispatch({
                type:"add"
            })
        }}>
            +1
        </button> 
    )
}
export default connect()(Count)