import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Programer from './component/Programer'
import Companies from './component/Companies'
import Services from './component/Services'
function App() {
  

  return (
  <>
  <div className='contenr'>
    <Programer name='Fahad' language='Html, CSS, Javascrept' exp={15} company="STC"/>
    <Programer name='Ali' language='Html, CSS, ' exp={5} company="alem"/>
    <Programer name='Saed' language='Html, CSS, Javascrept , java' exp={6} company="SDAI"/>

    <Companies name='STC' numberOfEmp={500} year={2010}/>
    <Companies name='SDAI' numberOfEmp={1900} year={2006}/>
    <Companies name='alem' numberOfEmp={900} year={2009}/>

    <Services typ='coding' prise={2000}/>
    <Services typ='desing' prise={4000}/>
    <Services typ='planing' prise={6000}/>

</div>
 </>
  

  )
}

export default App
