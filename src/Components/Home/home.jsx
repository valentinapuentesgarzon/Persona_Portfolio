import React from 'react'
import './home.css'
import Code from '../../assets/Home/space-for-coding.png';
import wave from '../../assets/Home/wave.png';
import Circle from '../../assets/Home/circles.png';
import Blossom_blue from '../../assets/Home/blossom_blue.png';
import Blossom_Pink from '../../assets/Home/blossom_pink.png';

const home = () => {
  return (
    <div className='Container'>
      <div className="container_1">
        <div className="Titles">
          <h3>¡Hola Mundo!</h3>
          <h1>SOY VALENTINA</h1>
          <h2>FRONT END DEVELOPER</h2>
        </div>
        <button id='Btn'> CONTÁCTAME </button>
      </div>
      <div className="container_2">
        <img id='code' src={Code} alt="space_for_coding" />
      </div>
      <div className="figure">
        <img id='wave' src={wave} alt="" />
      </div>
      <div className="figure_2">
        <img id='Circle' src={Circle} alt="" />
      </div>
      <div className="figure_3">
        <img  src={Blossom_blue} alt="" />
      </div>
      <div className="figure_4">
        <img  src={Blossom_Pink} alt="" />
      </div>

    </div>
  )
}

export default home 