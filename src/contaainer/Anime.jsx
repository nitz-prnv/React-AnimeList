import React from 'react';
import {Card, Typography} from '@material-ui/core'
import './Anime.css'
const Anime =({title,image,details})=>{
    
    return(
        <div classname='container'>
        <Card className='card'>
          <h1>{title}</h1>  
          <img src={image} alt=''/> 
          <Typography>{details}</Typography>
      </Card>
    </div>

    )
}
export default Anime