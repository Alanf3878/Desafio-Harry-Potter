
import styled from 'styled-components';
import Img from "../../images/rock.jpg"

 export const Nav = styled.div
`
background-image: url(${Img});
background-size: 50%;
background-position-x: center;
display: flex;
border: solid #1D334A 2px;
margin-top: 20px;

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

`
export const Item = styled.li
`
cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`
