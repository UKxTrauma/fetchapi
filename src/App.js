import React, { useState, useEffect } from "react";
import Content from "./components/content";
import './App.css';


export default function App() {
  const [errorMsg, setErrorMsg] = useState('')
  const [anime, setAnime] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      
      try {
        setErrorMsg('')
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        console.log(response)
        console.log(data)
        setAnime(data.data)
      } catch (error) {
        setErrorMsg("Oops, something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  },[]);
  return (
    <Content errorMsg={errorMsg} anime={anime} />
  )
}