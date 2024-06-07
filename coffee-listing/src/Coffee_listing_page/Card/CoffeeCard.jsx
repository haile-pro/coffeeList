import React from 'react'
import StarRating from '../Star/StarRating'
import './card.css'

function CoffeeCard({picture, name, pricing, rating,votes,popular, available}) {
  return (
    <div>
      <div className='card'>
        <img className='picture' src={picture} alt={name} />
        <p className='name'>{name}</p>
        <p className='pricing'>{pricing}</p>
        <StarRating   rating={rating} />
        <p className='votes'>{votes}(votes)</p>
        {popular && <span className='popular'>Popular</span>}
        {!available && <span className='outOf-stock'>Stock Out</span>}

      </div>
    </div>
  )
}

export default CoffeeCard