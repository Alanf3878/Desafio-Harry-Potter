import React, { useEffect, useState } from 'react'
import Main from "../components/Main"
import {Header} from "../components/Header"
import {Footer} from "../components/footer"
import "./index.css"
export default function Index() {
  const [character, setcharacter] = useState([])   
  useEffect( () => {
   handleGetUserData()
  }, [])
  async function handleGetUserData(){
    const response = await fetch("http://hp-api.herokuapp.com/api/characters")
    const data = await response.json()
    setcharacter(data)
  }
  return( 
    <div className = "Background">
      <Header/>
      <Main character = {character}/>
      <Footer/>
    </div>
    
  )
}
