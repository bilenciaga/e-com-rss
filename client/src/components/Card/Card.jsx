import React from 'react'
import './Card.scss'

const Card = ({item}) => {
  return (
      <div className="card">
        <div className="card__img">
          <img src={item.img} className='card__img-main' />
          <img src={item.img2} className='card__img-second' />
        </div>
        <div className="card__title">
          <h2>{item.title}</h2>
        </div>
        <div className="card__prices">
          <h3>¥{item.price}</h3>
        </div>
      </div>
  )
}

export default Card