import React from 'react'

const Products = () => {
  return (
    <div className='products'>
      <div className="products__left">
        <div className="products__left-filter">
          <h2>Product Categories</h2>
          <div className="products__left-filterItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="products__left-filterItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="products__left-filterItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="products__left-filter">
          <h2>Filter by price</h2>
          <div className="products__left-filterItem">
            <span>0</span>
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>
        <div className="products__left-filter">
          <h2>Sort by</h2>
          <div className="products__left-filterItem">
            <input type="radio" id='asc' value='asc' name='price' />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="products__left-filterItem">
            <input type="radio" id='desc' value='desc' name='price' />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="products__right">
        
      </div>
    </div>
  )
}

export default Products