import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Device name='Laptop' price='5000'></Device>
      <Device name='Mobile' price='6000'></Device>
      <Device name='Watch' price='2000'></Device>
      <Person></Person>
      <Person></Person>
      <Student name='Sakib'  grade='7' score='90'></Student>
      <Student name='Rakib'  grade='9' score='98'></Student>
     <Developer></Developer>
      
    </>
  )
}
 function Person(){
  const age=25
  const money=60
  const person={name:'sakib', gge:15}
  return<h3>I am a {person.name} with age:{age+money}</h3>
 }

 function Student (props){
  console.log(props)
  return <div className='student'>
<h3>This is a student</h3>
<p>Name:{props.name}</p>
<p>Age:</p>

  </div>
 }

 function Device(props){
  // console.log(props)
  return<h2>This Device: {props.name}</h2>
 }

 function Developer(){

  const developerStyle={
    margin:'10px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px'
  }
  return(
    <div style={developerStyle}>
      <h5>davo devo</h5>
      <p>coading:</p>
    </div>
  )
 }
export default App
