import React from 'react'
import StarRating from '../Star/StarRating'
import './card.css'

function CoffeeCard({picture, name, pricing, rating,votes,popular, available}) {
  return (
    <div className='card-conaner'>
      <div className='card'>
        <img className='picture' src={picture} alt={name} />
        <div className="priceAndnameinfo">
            <p className='name'>{name}</p>
            <p className='pricing'>{pricing}</p>
        </div>
        <div className="ratingAndvotes">
            <div className='rating'>
              <StarRating   rating={rating} />
           <p className='votes'>{votes ? `${votes} (votes)` : 'No rating'}</p>
            </div>
            <div className='stock'>
            {!available && <span className='outOf-stock'>Sold Out</span>}
            </div>
        </div>
       
        
       
        {popular && <span className='popular'>Popular</span>}
        

      </div>
    </div>
  )
}

export default CoffeeCard