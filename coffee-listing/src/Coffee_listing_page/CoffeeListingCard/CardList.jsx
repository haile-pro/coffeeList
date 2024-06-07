import React, { useEffect, useState } from 'react';
import CoffeeCard from '../Card/CoffeeCard';
import { fetchCoffeeData } from '../../apiData/fetchData';
import './CardList.css';
import vector from '../../assets/image-icon/vector.svg';

function CardList() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoffeeData = async () => {
      try {
        const data = await fetchCoffeeData();
        setCoffeeList(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCoffeeData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='coffe-list'>
      <div className='banner'>
      </div>
      <div className='all-coffe-and-text'>
        <div className='home-text'>
          <img className='vector-image' src={vector} alt="" />
          <h1>Our Collection</h1>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='span-stayle'>
            <span
              className={`all-span ${!showAvailable ? 'selected' : ''}`}
              onClick={() => setShowAvailable(false)}
            >
              All Products
            </span>
            <span
              className={`all-span ${showAvailable ? 'selected' : ''}`}
              onClick={() => setShowAvailable(true)}
            >
              Available Now
            </span>
          </div>
        </div>
        <div className='map-coffeeList'>
          {coffeeList
            .filter(coffee => !showAvailable || coffee.available)
            .map(coffee => (
              <CoffeeCard
                key={coffee.id}
                picture={coffee.image}
                name={coffee.name}
                pricing={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;