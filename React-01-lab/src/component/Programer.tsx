import React from 'react'
interface Programers{
    name:string,
    language:string,
    exp:number,
    company:string
}

function Programer(props:Programers) {
  return (
    <>
     <div className='card'>

        
        <h1>Name: {props.name}</h1>
        <h3>language: {props.language}</h3>
        <h3> exp :{props.exp}</h3>
        <h3> company:{props.company}</h3>

      </div>
      </>
  )
}

export default Programer