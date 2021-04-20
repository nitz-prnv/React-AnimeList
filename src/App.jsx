import React,{useEffect, useState} from 'react';
import  {TextField,Button} from '@material-ui/core';
//importing Anime component
import Anime from './contaainer/Anime';
import './App.css';

 const App=()=>{

const[search,setsearch]=useState('');
const [query,setQuery]=useState('');
const[Lists,setlist]=useState([])
useEffect(()=>{
  getAnime();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[query])

const getAnime = async ()=>{
  const response= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=members&genre=0&genre_exclude=12`);
  const data = await response.json();
  console.log(data)
  setlist(data.results);
  
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
      <form onSubmit={getQuery} style={{marginTop:"5px"}}>
      <TextField variant="standard" value={search} color="secondary" onChange={UpdateSearch}/>
      <Button type='submit' variant="outlined" color="secondary">
       search
      </Button>
      </form>

  <div className='container'>
  { 
    Lists.map(
    list =>(
   <Anime key={list.mal_id} title={list.title} image={list.image_url} details={list.synopsis} episode={list.episodes} rating={list.score} more={list.url}/>
    )
  )}
  </div>
  </div>
)
}
export default App


