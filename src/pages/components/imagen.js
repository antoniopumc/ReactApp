import '../../css/header.css';
import styled from 'styled-components';
import React from 'react'

const Imagenes = styled.img`
width: 200px;
height: 200px;
margin: auto;
padding-bottom: 30px;
`

export default function  Imagen ({milink,titulo}) {
  return (
    <Imagenes src={milink} alt={titulo}></Imagenes> 
  )
}

