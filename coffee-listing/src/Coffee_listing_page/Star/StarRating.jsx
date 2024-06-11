import React from 'react';
import filledStarSrc from '../../assets/image-icon/Star_fill.svg';
import emptyStarSrc from '../../assets/image-icon/Star.svg';

const StarRating = ({ rating }) => {
  const totalStars =1 ;
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? filledStarSrc : emptyStarSrc}
        alt={i < rating ? 'Filled Star' : 'Empty Star'}
        className="star" // You might want to add some CSS to size these appropriately
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;