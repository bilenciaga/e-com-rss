import React from 'react'
import Card from '../Card/Card'
import './Sum23Products.scss'
import { Link } from 'react-router-dom'

const Sum23Products = () => {
  const data = [
    {
      id:1,
      img:'https://balenciaga.dam.kering.com/m/7422f39263d62a0/eCom-745172TOS151000_G.jpg?v=1',
      img2:'https://balenciaga.dam.kering.com/m/365a302b39b1a9fc/eCom-745172TOS151000_J.jpg?v=1',
      title:'Medium Fit Trousers in Black',
      price:'731,500'
    },
    {
      id:2,
      img:'https://balenciaga.dam.kering.com/m/64571c8812fd36b5/eCom-744983TOS141000_G.jpg?v=2',
      img2:'https://balenciaga.dam.kering.com/m/5bca13b42893effa/eCom-744983TOS141000_H.jpg?v=2',
      title:'Men Oversized Biker Jacket in Black',
      price:'731,500'
    },
    {
      id:3,
      img:'https://balenciaga.dam.kering.com/m/684d3f6378927e37/eCom-746148TNV575630_G.jpg?v=2',
      img2:'https://balenciaga.dam.kering.com/m/725a1e602a89fb50/eCom-746148TNV575630_H.jpg?v=2',
      title:'Women Knot Gown in Pink ',
      price:'499,400'
    },
    {
      id:4,
      img:'https://balenciaga.dam.kering.com/m/212c339a8bcefd58/eCom-746552TNV436840_G.jpg?v=1',
      img2:'https://balenciaga.dam.kering.com/m/27e63dae138ffc38/eCom-746552TNV436840_H.jpg?v=2',
      title:'Women Camden Pantaleggings in Pink ',
      price:'499,400'
    }
  ]
  return (
    <div className='sum23Products'>
      <div className="sum23Products__title">
        <h1>Summer 23</h1>
      </div>
      <div className="sum23Products__itemCard">
        {data.map(item => (
          <Link to={`/products/${item.id}`}>
            <Card item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  )

}

export default Sum23Products