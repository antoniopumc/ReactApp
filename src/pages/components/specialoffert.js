import React from 'react'
import styled from 'styled-components';

const Marco = styled.div`
margin: auto;
max-width: 600px;
display: grid;
grid-template-columns: auto;

`;


const ImgPromotion = styled.img`
max-width: 300px;
max-height: 400px;
margin-left: auto;
margin-right: auto;
`
const Promotion = styled.div`
text-align: center;
`
const Titulo = styled.h3`
color:#f02d6e;
font-size: 20px;
`
const Span = styled.span`
color:black;
font-size: 16px;
`



export default function Specialoffert({imgpromotion , promotiondesp , price}) {
  return (
    <>
    <Marco>
    <Promotion>
    <Titulo>Special Comissions <br></br><Span>{promotiondesp} al costo de {price}</Span></Titulo>
    </Promotion>
    <ImgPromotion src={imgpromotion}></ImgPromotion>
    </Marco>
    </>
  )
}
