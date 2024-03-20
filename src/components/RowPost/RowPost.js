import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {imgUrl,API_KEY} from '../../constant/constant'
import axios from '../axios'
function RowPost(props) {
  const [movies, setMovies ] = useState([])
  const [urlId,setUrlId] = useState('')
  
  useEffect(()=>{
  axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
  })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }; 
  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}###`). then (response=>{
    if (response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log('trailer not available')
    }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((firstObj)=>
     <img onClick={()=>handleMovie(firstObj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imgUrl+firstObj.backdrop_path}`} alt="posters" />
        )}
       
        </div>
      { urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost