import React from 'react'
import './about_me.css'
import Avatar from '../../assets/About_me/Avatar.png'
import Linkedin from '../../assets/About_me/Linkedin.png'
import github from '../../assets/About_me/Github.png'
import Blossom_blue from '../../assets/Home/blossom_blue.png';
import Blossom_Pink from '../../assets/Home/blossom_pink.png';
import curve_left_1 from '../../assets/About_me/curve_left_1.png'
import curve_left_2 from '../../assets/About_me/curve_left_2.png'
import circle_left_1 from '../../assets/About_me/circle_left_1.png';
import CV from '../../assets/About_me/CV/CV.VALENTINA.PUENTES.GARZÓN.pdf';



const about_me = () => {
  return (
    <div id='Box' className='about_me'>

      <h2 id='Neon_text'>SOBRE MI</h2>

      <div className="section">

        <div className="section_1">
        <img id='Avatar'src={Avatar} alt="" />
        </div>
        
        <div className="section_2">
          <div className="titles">
          <h3 id='Neon_text2'>VALENTINA PUENTES</h3>
            <p>¡Hola! Soy desarrolladora Front end en continuo aprendizaje. He tenido la oportunidad de crear plataformas web como E-commerce, landing page y administrativas, garantizando las funcionalidades de selección de productos, dashboard de administrador (CRUD), y diseño de la interfaz basado en la experiencia de usuario. <br/><br/>
            Tengo conocimientos en JavaScript, React, Node Js, HTML, CSS, Bootstrap, Figma, y Adobe XD. Soy una persona creativa, adaptable, proactiva, de pensamiento crítico e innovador, y buenas habilidades de trabajo en equipo, baso mi flujo de trabajo metodologías ágiles como SCRUM y Design Thinking.
            </p>

          </div>

          <div className="sub_section_2">
            <a id= 'Btn' className='Btn-a' href={CV} download>Descargar CV</a>
            <div className="icons"> 
              <a href="https://www.linkedin.com/in/valentina-puentes-garzon-developer/" target="_blank"><img id='icon' src={Linkedin} alt="" /></a>
              <a href="https://github.com/valentinapuentesgarzon" target="_blank"><img  id='icon' src={github} alt="" /></a>

            </div>
          </div>
        </div>
      </div>

      <div className="figure_11">
        <img id= 'Blossom'  src={Blossom_blue} alt="" />
      </div>
      <div className="figure_12">
        <img id= 'Blossom'  src={Blossom_Pink} alt="" />
      </div>

      <div className="figure_13">
        <img id= 'Blossom'  src={Blossom_blue} alt="" />
      </div>

      <div className="figure_14">
        <img id='circle_2' src={circle_left_1} alt="" />
      </div>

      <div className="figure_15">
        <img  id='curve' src={curve_left_1} alt="" />
      </div>

      <div className="figure_16">
        <img id='curve' src={curve_left_2} alt="" />
      </div>

      <div className="figure_17">
        <img  id='circle_2' src={circle_left_1} alt="" />
      </div>

    </div>
  )
}

export default about_me