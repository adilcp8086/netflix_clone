import React, { useState } from 'react'
import instance from '../Instance';
import { useEffect } from 'react';
import './Row.css'

function Row({title,fetchurl}) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [allmovies,setallmovies]=useState ([]) 

  const fetchData=async()=>{
    const response=await instance.get(fetchurl)
    const {data}=response
    setallmovies(data.results)
  }
  useEffect(()=>{
    fetchData()
  },{})
  console.log(allmovies)
  return (
    <div className='row'>
      <h1 style={{color:'white'}}>{title}</h1>
    
    <div className='movie-row'>{allmovies?.map(item=>(
      <img className='movie' src={`${base_url}${item.poster_path}`} alt="" />
    
    ))
}
    </div>
    </div>
  )
}

export default Row