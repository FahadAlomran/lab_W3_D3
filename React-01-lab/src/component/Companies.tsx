import React from 'react'
interface Companie{
    name:string,
    numberOfEmp:number,
    year:number,
    
}

function Companies(props:Companie) {
  return (
   <>
    <div className='card'>
       <h1>Name of Companie: {props.name}</h1>
        <h3>number Of Emp: {props.numberOfEmp}</h3>
        <h3> year :{props.year}</h3>
        
   </div>
   </>
  )
}

export default Companies