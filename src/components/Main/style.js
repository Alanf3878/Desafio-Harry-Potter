import styled from 'styled-components'; 
import Img from "../../images/wallpaper.jpg"

export const Title = styled.h1 
`
border-radius: 15px;
color: #FFFAFA;
padding: 2px;
font-size: 25px;;
width: 250px;
text-align-last: center;
`

export const Text = styled.b
 `
 color: white;
 background-image: linear-gradient(#1D334A, #485461);
 border-radius: 10px;
 padding: 5px;
 width: 250px;
 text-align-last: center;
 cursor: pointer;
 &:hover {
   transform: scale(105%);
 }
 `

 export const Photo = styled.img
 `width: 220px ;
  height:70%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
 `


 export const Container = styled.div
 `
 display: flex;
 align-items: center;
 flex-direction: column;
 width: 300px;
 height: 425px;
 border-radius: 10px;
 justify-content: space-around;
 background-image: url(${Img});

 `

 export const Boxtainer = styled.div 
 `
 display: flex;
 align-items: center;
 flex-direction: column;
 width: 300px;
 height: 450px;
 margin-top: 20px;
 `

 export const Textcontainer = styled.div
 `
 width: 280px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 height: 70px;

 `