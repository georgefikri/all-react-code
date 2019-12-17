import React from "react"

function Display(props){
    return (
        <ul>
            {
                props.loading === true ? 
                <h1>loading...</h1>
                :
                props.all.map((item)=>{
                   return ( <li key={item.id}>{item.name}</li>)
                })
                
            }
        </ul>
    )
}

export default Display 