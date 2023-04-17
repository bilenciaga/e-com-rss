import React from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import List from '../../components/List/List'
import './Products.scss'


const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)

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
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="products__left-filter">
          <h2>Sort by</h2>
          <div className="products__left-filterItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="products__left-filterItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort('dsc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="products__right">
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products