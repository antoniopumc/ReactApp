import React from 'react'
import Imagen from './components/imagen'
import '../css/header.css';
import Menu from './components/menu';
import styled from 'styled-components';
import Header from './components/header';
import Specialoffert from './components/specialoffert';

const MainBody = styled.div`
  margin: auto;
  max-width: 1000px;
  background-color: #ffccff;
  border: 5px solid #c4f6ea;
`;

export default function HomePage() {
  return (
<>
<MainBody>
<Header milink = "https://i.ibb.co/ZTZs70x/mainicon.png"  titulo="Ralsei"></Header>
 <Menu></Menu>
 <Specialoffert imgpromotion="https://i.ibb.co/X3dTjQZ/277896323-671664560720593-8433831703008317902-n.png"
 promotiondesp="Tu oc en forma de conejito" price={"20$"}></Specialoffert>
 </MainBody>
</>
   
  )
}
