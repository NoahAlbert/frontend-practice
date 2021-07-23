import React from 'react'
import heroImage from '../images/ramen_shop.png'

const MainImage = () => {
     return (
          <div className="image-container">
               <img
                    className="main-image"
                    src={heroImage}
                    alt="Cartoon Japanese street ramen shop with 2 people sitting inside"
               />
          </div>
     )
}

export default MainImage
