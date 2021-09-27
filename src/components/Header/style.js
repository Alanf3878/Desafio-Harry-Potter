
import styled from 'styled-components';
import Img from "../../images/rock.jpg"

 export const Nav = styled.div
`
background-image: url(${Img});
background-size: 50%;
background-position-x: center;
display: flex;
border-radius: 20px;
border: solid #1D334A 2px;
width: 90%;

`

export const Title = styled.h1
`
color: white;
font-size: 80px;
@media (max-width: 1150px) {
  font-size:50px;
}
@media (max-width: 930px) {
  font-size: 30px;
}

`

export const Boxitem = styled.h1
`
color: white;
font-size: 28px;
display: flex;
align-items: center;
list-style: none;
justify-content: space-evenly;
width: 500px;
@media (max-width: 1150px) {
  font-size: 25px;
}
@media (max-width: 806px) {
  display: none;
}

`

export const Item = styled.li
`
cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`