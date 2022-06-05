import React, { Component } from 'react';
import '../../css/imagenes.css'
import styled from 'styled-components';
import '../../css/header.css'
import corazon from './corazon.svg';
const Icon = styled.img`
  width: 150px;
  height: 150px;
  border: 5px solid #555;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  padding-bottom: -20px;
`;

const Cabezal = styled.div`
  border-bottom:5px solid #c4f6ea;
  background-color:#ffcccc;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
`
const Desp = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
`


export default function Header({ milink,titulo}) {
  return (
    <Cabezal>
      <br></br>
    <Icon src={milink} alt={titulo}></Icon>
   
    <p id="aboutme">  <img id="cora"src={corazon}></img>Hi there!!! <span id="negritas">Im FucsicaDemon</span>   <img id="cora"src={corazon}></img>
    <br></br>
      <span id="comopen">-OPEN COMMISSIONS-</span></p>
    </Cabezal>
  )
}
