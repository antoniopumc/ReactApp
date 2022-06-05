import React from 'react'
import styled from 'styled-components';
import corazon from './corazon.svg';
const MenuButton = styled.button`
  background-color:  #ffccff;
  color: #ff6699;
  border: 1pt solid #ff6699;
  width: 80%;
  height: 50px;
  margin: auto;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius:  15px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;  
`;
export default function Menu() {
  function changeBackground(e) {
  e.target.style.background = 'red';
  }
  return (
    <div id="menu">
    <img id="cora"src={corazon}></img>
    <MenuButton className='boton'>HOME</MenuButton>
    <MenuButton className='boton'>MY ART</MenuButton>
    <MenuButton className='boton'>ABOUT ME</MenuButton>
    <MenuButton className='boton'>PRICES</MenuButton>
    <MenuButton className='boton'>RULES</MenuButton>
    <img id="cora"src={corazon}></img>
    </div>
  )
}

