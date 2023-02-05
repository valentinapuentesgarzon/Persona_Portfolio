import React from 'react'
import './home.css'
import Code from '../../assets/Home/space-for-coding.png';
import wave from '../../assets/Home/wave.png';
import Circle from '../../assets/Home/circles.png';

const home = () => {
  return (
    <div className='Container'>
      <div className="container_1">
        <div className="Titles">
          <h3>¡Hola Mundo</h3>
          <h1>Soy Valentina</h1>
          <h2>FRONT END DEVELOPER</h2>
        </div>
        <button> CONTÁCTAME </button>
      </div>
      <div className="container_2">
        <img id='code' src={Code} alt="space_for_coding" />
      </div>
      

    </div>
  )
}

export default home