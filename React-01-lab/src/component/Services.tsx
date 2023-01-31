import React from 'react'
interface Services{
typ:string
prise:number
}
function Services(props:Services) {
  return (
    <div className='card'>

        
    <h1>typ of Services: {props.typ}</h1>
    <h1>prise: {props.prise}sr</h1>
    

  </div>
  )
}

export default Services