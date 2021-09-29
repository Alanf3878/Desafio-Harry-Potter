import React from 'react'
import Data from './Date'
import styled from 'styled-components'; 
import Img from "../../images/rock.jpg"
const Divs = styled.div
`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  background-image: url(${Img});
  align-items: center;
  background-repeat: repeat;
  background-size: 50%;
  margin-top: 20px;
  border-radius: 20px;
  border: solid #1D334A 2px;
`
export default function Main({character}){
   return(
       <Divs>            
         {character.map(item =>
             <Data item = {item}
             />)}
       </Divs>
   )
}

