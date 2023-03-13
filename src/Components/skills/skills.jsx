import React from 'react'
import './skills.css'
import Carrousel from './Carrousel/Carrousel'
import triangule from '../../assets/Skills/triangule.png'
import circle_1 from '../../assets/Skills/circle_1.png'
import Elipse from '../../assets/Skills/Elipse.png'
import Blossom_blue from '../../assets/Home/blossom_blue.png';
import Blossom_Pink from '../../assets/Home/blossom_pink.png';





const skills = () => {
  return (
    <div id='Content' className='skills'>
      <h2 id='Neon_text'>HABILIDADES</h2>
      <Carrousel/>
      <div className="figure_5">
        <img id='triangule' src={triangule} alt="" />
      </div>
      <div className="figure_6">
        <img id='circle_1' src={circle_1} alt="" />
      </div>

      <div className="figure_7">
        <img src={Elipse} alt="" />
      </div>

      <div className="figure_8">
        <img src={circle_1} alt="" />
      </div>

      <div className="figure_9">
        <img  src={Blossom_blue} alt="" />
      </div>

      <div className="figure_10">
        <img  src={Blossom_Pink} alt="" />
      </div>



    </div>
  )
}

export default skills