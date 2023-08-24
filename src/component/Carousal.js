import React from 'react'

export const Carousal = () => {
  return (
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div class="carousel-inner" id="carousal">

  <div class ="carousel-caption" style ={{zIndex:"10"}}>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-dark" type="submit">Search</button>
    </form>
    </div>
    <div class="carousel-item active">
      <img src="https://cdn.sanity.io/images/qa41whrn/prod/220d439f03d6a9ad631caaefe81f21e83a881fff-2880x1040.jpg?w=2160&q=80&auto=format" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/2880x1040/?menshoes" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/2880x1040/?shoes" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
