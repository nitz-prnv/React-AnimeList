import React,{useEffect, useState} from 'react';
import  {TextField} from '@material-ui/core';
//importing Anime component
import Anime from './contaainer/Anime';
import './App.css';

const api = require('gogoanime');

 const App=()=>{

const[search,setsearch]=useState('');
const [query,setQuery]=useState('');
const[Lists,setlist]=useState([])
useEffect(()=>{
  getAnime();
  getY();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[query])

const getAnime = async ()=>{
  const response= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=members&genre=0&genre_exclude=12`);
  const data = await response.json();
  setlist(data.results);
  
}
const getY = async ()=>{
  const response= await api.animeEpisodeHandler('actors-songs-connection-episode-9')
  const data = await response.json();
  console.log(data);
  
}

const UpdateSearch = e =>{
  
  setsearch(e.target.value)
}

const getQuery = e=>{
  e.preventDefault();
  setQuery(search);

}

return(
  <div className='App'>
      <form onSubmit={getQuery}>
      <TextField value={search} onChange={UpdateSearch}/>
      <button type='submit'>
       search
      </button>
      </form>

  <div className='container'>
  { 
    Lists.map(
    list =>(
   <Anime key={list.mal_id} title={list.title} image={list.image_url} details={list.synopsis}/>
    )
  )}
  </div>
  </div>
)
}
export default App


