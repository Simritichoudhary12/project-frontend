import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Card } from './Card';

import axios from "axios";
import { useEffect } from 'react';
export const Shoes = () => {

  const [shoes,setShoes]=useState(null);
    useEffect(()=>{
  
const fn  =async()=>{


  const getData= async ()=>{
    const data = await axios.get("http://localhost:1234/shoes/get");
    console.log("data is ",data);
    setShoes(data.data.doc)
  }
  
  getData() ;
  //  try{
  //   const resu= await axios.post("http://localhost:1234/shoes",{
  //     "shoesname": "jordan",
  //     "url": "https://n1.sdlcdn.com/imgs/g/2/d/Puma-Men-Essential-Runner-IDP-SDL8090…",
  //     "price":"2000"
  //     })
    
  //     console.log(resu)
  //  }
  //  catch(err)
  //  {
  //   console .log ("err",err)
  //  }
  
}


fn()

    },[])
  return (
    <div>
        
        <Navbar/>
         
  {
    shoes?.map((e)=>{
      return  <Card  picture="https://source.unsplash.com/random/2880x1040/?shoes"/*e={e}*//>
    })
  }
        
        
    </div>
  )
}
