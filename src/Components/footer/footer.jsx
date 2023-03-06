import React from 'react'
import './footer.css'
import Linkedin from '../../assets/About_me/Linkedin.png'
import github from '../../assets/About_me/Github.png'
import Behance from '../../assets/About_me/Behance.png'
import wave from '../../assets/Footer/curve.png'

const footer = () => {
  return (
    <div className='container-f'>
      <div className="icons-f"> 
        <a href="https://www.linkedin.com/in/valentina-puentes-garzon-developer/" target="_blank"><img id='icon-f'src={Linkedin} alt="" /></a>
        <a href="https://github.com/valentinapuentesgarzon" target="_blank"><img id='icon-f'src={github} alt="" /></a>
      </div>


      <p id='text_1'>Portafolio creado con ♥ por Valentina Puentes</p>
      <p id='text_1'>© 2023</p>

      <img src={wave} alt="" />


          
    </div>
  )
}

export default footer