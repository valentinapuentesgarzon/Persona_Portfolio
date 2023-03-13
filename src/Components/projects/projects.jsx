import React from 'react'
import './projects.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import AppPagination from './pagination/Pagination';
import { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";

const projects = () => {
  const [card, setCard] = useState([]);

  return (
    <div className='projects' id='Content'>
      <h2 id='Neon_text'>PROYECTOS</h2>
      <div className="cardBox">
                {card.map(item => {
                    return (

                        <Card id='Card' sx={{ width: 300 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={item.img}
                                title={item.Name}
                            />
                            <CardContent id='actionsBox'>
                                <h2 id='Neon_text2'>{item.Name}</h2>
                            </CardContent>
                            <CardActions id='actionsBox'>
                                <Button id='Btn' className='Boton'>
                                    <AiFillGithub/>
                                </Button>
                                <Button id='Btn' className='Boton'>
                                    <MdWebAsset/>   
                                </Button>
                            </CardActions>
                        </Card>

                    )
                })}

            </div>
            <AppPagination setCard={(p) => setCard(p)}/>
            
    </div>
  )
}

export default projects