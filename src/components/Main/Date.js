import React from 'react';
import * as S from "./style"
const Data = ({item}) => {
    return ( 
       <S.Boxtainer>
          <S.Container>
        <S.Title>{item.name}</S.Title>
        <S.Photo src={item.image}/>
        <S.Textcontainer>
        <S.Text>{item.house}</S.Text>
        <S.Text>{item.actor}</S.Text>
        </S.Textcontainer>
        </S.Container>
        </S.Boxtainer>
 );
}
export default Data ;
