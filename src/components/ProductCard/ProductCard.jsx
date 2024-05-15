import React from 'react'
import './ProductCard.css'

const ProductCard = ({ data = {} }) => {
  return (
    <div className='course-items'>
        <div className='course-item-img-container'>
          <img className='course-item-image' src={data.image} alt="" />
        </div>
        <div className="course-item-info">
          <div className="course-item-name-rating">
            <p>{data.name}</p>
          </div>
          <p className="course-item-desc">{data.mentor}</p>
          <p className="course-item-price">{data.date}</p>
        </div>
      </div>
  )
}

export default ProductCard

 