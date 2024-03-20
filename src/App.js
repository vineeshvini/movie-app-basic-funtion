// import logo from './logo.svg';
import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {orginals,action, trending, comedy, romantic, documentaries  }from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className='bodys' >
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title ='Chalachithram'/>
      <RowPost url={trending} title ='Trending' isSmall/>

      <RowPost url={action } title= 'Action' isSmall />
      <RowPost url={comedy } title= 'Comedy' isSmall />
      <RowPost url={romantic } title= 'Romantic' isSmall />
      <RowPost url={documentaries } title= 'Documentaries' isSmall />


    </div>
  ); 
}

export default App;
