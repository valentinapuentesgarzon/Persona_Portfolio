import React from 'react'
import './about_me.css'
import Avatar from '../../assets/About_me/Avatar.png'
import Linkedin from '../../assets/About_me/Linkedin.png'
import github from '../../assets/About_me/Github.png'
import Behance from '../../assets/About_me/Behance.png'
import Blossom_blue from '../../assets/Home/blossom_blue.png';
import Blossom_Pink from '../../assets/Home/blossom_pink.png';
import curve_left_1 from '../../assets/About_me/curve_left_1.png'
import curve_left_2 from '../../assets/About_me/curve_left_2.png'
import circle_left_1 from '../../assets/About_me/circle_left_1.png'



const about_me = () => {
  return (
    <div id='Box'>

      <h2 id='Neon_text'>SOBRE MI</h2>

      <div className="section">

        <div className="section_1">
        <img id='Avatar'src={Avatar} alt="" />
        </div>
        
        <div className="section_2">
          <div className="titles">
          <h3 id='Neon_text2'>VALENTINA PUENTES</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam sint nihil rerum ex, eaque ab! Iure delectus assumenda culpa sunt! Dolore magni modi voluptas perspiciatis ex nobis delectus rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo quidem pariatur veniam neque dolore, quia aliquid dolorum! Placeat aspernatur, a debitis veniam autem eum maiores iusto. Reiciendis, excepturi ut. </p>
          </div>

          <div className="sub_section_2">
            <button id='Btn'> Descargar CV</button>
            <div className="icons"> 
              <img id='icon'src={Linkedin} alt="" />
              <img id='icon'src={github} alt="" />
              <img id='icon'src={Behance} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="figure_11">
        <img  src={Blossom_blue} alt="" />
      </div>
      <div className="figure_12">
        <img  src={Blossom_Pink} alt="" />
      </div>

      <div className="figure_13">
        <img  src={Blossom_blue} alt="" />
      </div>

      <div className="figure_14">
        <img  src={circle_left_1} alt="" />
      </div>

      <div className="figure_15">
        <img  id='curve_1' src={curve_left_1} alt="" />
      </div>

      <div className="figure_16">
        <img src={curve_left_2} alt="" />
      </div>

      <div className="figure_17">
        <img  id='circle_2' src={circle_left_1} alt="" />
      </div>

    </div>
  )
}

export default about_me