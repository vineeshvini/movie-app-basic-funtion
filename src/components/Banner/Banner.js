import React, {useEffect, useState}from 'react'
import{API_KEY} from '../../constant/constant'
import { imgUrl } from '../../constant/constant'
import axios from '../axios'
import './Banner.css'

function Banner() {
 const [movie,setMovie] = useState()
  useEffect(() => {
   axios.get (`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{ 
    if(response.data.results.length > 0){
      const randomIndex = Math.floor(Math.random()* response.data.results.length);
      setMovie(response.data.results[randomIndex]); 
    }
 

    
   }) 
   
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path: ""})`  }}
    className='Banner'>
        <div className="content">
            <h1 className="tittle">{movie ?movie.title:""}</h1>
            <div className="Banner-Button">
              <button className="button">Play</button>
              <button className="button">My List</button>  
            </div>
            <h1 className="description">{movie ? movie.overview: ""}</h1>
        </div>
         <div className="fade">
          


         </div>
    </div>
  )
}

export default Banner