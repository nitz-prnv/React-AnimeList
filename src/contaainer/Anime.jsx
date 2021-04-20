import React from 'react';
import {Card, Typography} from '@material-ui/core'
import './Anime.css'
const Anime =({title,image,details,episode,rating,more})=>{
    
    return(
        <div classname='container'>
        <Card className='card'>
          <h1>{title}</h1>  
          <img src={image} alt=''/> 
          <Typography>{details}
          <div>{""}</div>
            <div> <b>Number of Episodes :</b>&nbsp;{episode}</div>
            <div> <b> Ratings :</b>&nbsp;{rating}🌟</div>
            for more information <a href={more}> click here</a>
            </Typography>
          
      </Card>
    </div>

    )
}
export default Anime