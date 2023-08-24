import React from 'react'
import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'
import { Card } from '../component/Card'
import { Carousal } from '../component/Carousal'


export const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className="row">
        <div className="col-4">
          <div className='m-3 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?shoes" price="Rs 1000" title="PUMA"/></div>
      
          <div className='m-3 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?shoes" price="Rs 8000" title="RedTape"/></div>
        </div>
        <div className="col-4">
          <div className='m-2 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?shoes" price="Rs 5000" title="Adidas"/></div>
          <div className='m-3 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?shoes" price="Rs 3000" title="Nike"/></div>
        </div>
        <div className="col-4">
          <div className='m-3 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?menshoes" price="Rs 1000" title="campus"/></div>
          <div className='m-3 mt-3'><Card picture="https://source.unsplash.com/random/2880x1040/?womenshoes" price="Rs 7000" title="jordan"/></div>
        </div>
      </div>
      



      <div><Footer /></div>
    </div>
  )
}
