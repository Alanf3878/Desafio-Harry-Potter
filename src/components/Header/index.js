import React from 'react'
import * as S from "./style"

export function Header(){
   return(
       <S.Nav>
           <S.Title>Cards Harry Potter</S.Title>
           <S.Boxitem>
               <S.Item>Sonserina</S.Item>
               <S.Item>Corvinal</S.Item>
               <S.Item>Grifinória</S.Item>
               <S.Item>Argo Filch</S.Item>
           </S.Boxitem>
       </S.Nav>
   )
}