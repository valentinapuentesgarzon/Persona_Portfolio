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
                                sx={{
                                    height: '200px',
                                    '@media (min-width: 2560px)': {
                                      height: '250px',
                                      width :'300px'
                                    },
                                    '@media (max-width: 1440px)': {
                                        height: '250px',
                                        width :'300px'
                                    },
                                    '@media (max-width: 768px)': {
                                        height: '200px',
                                        width :'300px'
                                    },
                                    '@media (max-width: 425px)': {
                                        height: '100px',
                                    },
                                    '@media (max-width: 375px)': {
                                        height: '200px',
                                        width :'500px'
                                      },
                                    '@media (max-width: 320px)': {
                                        height: '200px',
                                        width :'300px'
                                      },
                                  }}
                                image={item.img}
                                title={item.Name}
                            />
                            <CardContent id='actionsBox'>
                                <h2 id='Neon_text2' className='text-p'>{item.Name}</h2>
                            </CardContent>
                            <CardActions id='actionsBox-btn'>
                                <Button className='Boton'>
                                    <a id='Btn-p' href={item.git} target="_blank"><AiFillGithub/></a>
                                </Button>
                                <Button className='Boton'>
                                    <a id='Btn-p' href={item.web} target="_blank"><MdWebAsset/></a>
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