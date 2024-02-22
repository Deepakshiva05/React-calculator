import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';


function App() {
  
  const[value,setValue]=useState('');

  return (
    <>
    <Navbar/>
    <section id='calc'>
      <div className="container mb-5">
        <div className="col-lg-12 col-md-12 bg-black p-4 rounded" >
        <div>
          <input type='text'id='screen'value={value} ></input>
        </div>
        <div className="div">
          <input type='button' value='C'id='main' onClick={e=>setValue('')}/>
          <input type='button' value='D'id='main' onClick={e=>setValue( value.slice(0,-1))}/>
          <input type='button' value='-' id='main' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='/' id='main'onClick={e=>setValue( value+ e.target.value)}/>
        </div>
        <div className="div">
          <input type='button' value='7' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='8' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='9' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='*'id='main' onClick={e=>setValue( value+ e.target.value)}/>
        </div>
        <div className="div">
          <input type='button' value='4' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='5' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='6' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='+' id='main'  onClick={e=>setValue( value+ e.target.value)}/>
        </div>
        <div className="div">
          <input type='button' value='1' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='2' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='3' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='%' id='main' onClick={e=>setValue( value+ e.target.value)}/>
        </div>
        <div className="div">
          <input type='button' value='.'id='main' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value='0' onClick={e=>setValue( value+ e.target.value)}/>
          <input type='button' value=','id='main' onClick={e=>setValue( value+ e.target.value)}/>          
          <input type='button' value='=' id='main' onClick={e=>setValue(eval(value))}/>

        </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default App
