import React from 'react'
import Imagen from './components/imagen'
import '../css/header.css';
import Menu from './components/menu';
import styled from 'styled-components';
import Header from './components/header';
import Specialoffert from './components/specialoffert';

const MainBody = styled.div`
  margin: auto;
  max-width: 800px;
`;

const DrawList = styled.div`
margin: auto;
display: grid;
grid-template-columns: auto auto auto;
background-color: blue;
align-items: center;
height: auto;
`;


export default function ArtPage() {
 return (
  <>
  <br></br> <br></br>
  <MainBody>
   <Menu></Menu>
   <p id="aboutme">Here are some of my work, fan arts and commissions</p>
   <DrawList>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   <Imagen milink = "https://i.ibb.co/YfPfCV7/4.jpg" titulo="Ralsei"> </Imagen>
   </DrawList>
   </MainBody>
  </>
  )
}
