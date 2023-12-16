import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import './banner.css'

function Banner({fetchurl}) {
  const base_url =  "https://image.tmdb.org/t/p/original";
  console.log(fetchurl)
  const [movieDetails,setmovieDetails]=useState([])
  const fetchData = async()=>{
    const response = await instance.get(fetchurl)
    const {data} =response
    setmovieDetails(data.results[Math.floor(Math.random()*data.results.length)])
  }
  useEffect(()=> {
    fetchData();

  },[])
  return (
    <div>
      <div style={{height:"600px",
      backgroundPosition:"center",
      backgroundSize:"cover",
      marginTop:"20px",
      margin:"10px",
      backgroundImage:`url(${base_url}${movieDetails.backdrop_path})`}}>
        <div className='banner_content' style={{background:"transparent",color:"white"}}>
          <h2>{movieDetails.name}</h2>
          <button className='btn btn-danger'>Play <i class="fa-solid fa-play bg-transparent"></i></button>
          <button className='btn border-white ms-3 more'>More Info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
          <h5>{movieDetails.overview}</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner