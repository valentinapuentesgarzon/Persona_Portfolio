import React from 'react'
import './contact.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Avatar_2 from '../../assets/Contact/Avatar_2.png'
import curve_1 from '../../assets/Contact/curve_1.png'
import curve_2 from '../../assets/Contact/curve_2.png'
import circle from '../../assets/Contact/circle.png'
import Blossom_blue from '../../assets/Home/blossom_blue.png';
import Blossom_Pink from '../../assets/Home/blossom_pink.png';
import { useRef } from 'react';






function contact() {
  
  return (
    <div className='Container_c' id='contact'>
      <div className="container_c1">
        <div className="Title">
          <h2 id='Neon_text'>CONTACTO</h2>
          <p id='message'>¡Tomemos un café virtual! <br></br> Hablemos de proyectos, ofertas o solo intercambiemos conocimientos</p>
        </div>
        
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  id='message'>NOMBRE</Form.Label>
          <Form.Control name='nombre' id='input'type="text" placeholder="Escribe tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label name='correo' id='message'>CORREO</Form.Label>
          <Form.Control name='correo' id='input' type="email" placeholder="Escribe tu correo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id='message'>ASUNTO</Form.Label>
          <Form.Control name='asunto' id='input' type="text" placeholder="Escribe tu asunto" />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label id='message'>MENSAJE</Form.Label>
          <Form.Control name='mensaje' id='input_m' as="textarea" rows={5} placeholder="Escribe tu mensaje"/>
        </Form.Group>

        <div className="BTN_c">
          <Button id='Btn' type="submit">
            Enviar
          </Button>
        </div>

      </Form>
    </div>

    <div className="container_c2">
      <img id='Avatar_2'src={Avatar_2} alt="Avatar" />
    </div>

    <div className="figure_20">
      <img  id='curve_1' src={curve_1} alt="" />
    </div>

    <div className="figure_21">
      <img  id='curve_2' src={curve_2} alt="" />
    </div>

    <div className="figure_22">
      <img  id='circle-c' src={circle} alt="" />
    </div>

    <div className="figure_9">
        <img  src={Blossom_Pink} alt="" />
      </div>

      <div className="figure_10">
        <img  src={Blossom_blue} alt="" />
      </div>

    

  

  </div>
  )
}

export default contact