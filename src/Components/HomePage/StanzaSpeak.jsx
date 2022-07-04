import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./StanzaSpeak.css"
import data from '../../data';


const StanzaSpeak=()=>{
    return(
        
        <div  className='top'>
            <h1 className='heading'>#StanzaSpeak</h1>

       <Slider autoplay={false}  
       dots={true} 
       slidesToShow={3} 
      
       >
        
        {data.map((item)=>(

            <div key={item} className='slider'>
                <img src={item} alt="loading " className='img'/>
            </div>
        ))}
           
       </Slider>

        </div>
        
    )
}
export default StanzaSpeak;