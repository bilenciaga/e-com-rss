import React from 'react'
import './HomeProducts.scss'
import { Link } from 'react-router-dom'

const HomeProducts = () => {
  const data = [
    {
      id:1,
      img:'https://balenciaga.dam.kering.com/m/60566c0ff934a14a/Large-Home_Balenciaga_Summer23_Campaign_Look10_2600x1300px-2x1.jpg',
      title:'shop women',
    },
    {
      id:2,
      img:'https://balenciaga.dam.kering.com/m/4aa5c9826a4817e/Large-Home_Balenciaga_Summer23_Campaign_Look23_2600x1300px-2x1.jpg',
      title:'shop men',
    },
    {
      id:3,
      img:'https://balenciaga.dam.kering.com/m/5dbaa5b89e7b2940/Large-HP-45_RAVER_WHITE_0002_2600x1300px-2x1.jpg',
      title:'shop bag',
    },
    {
      id:4,
      img:'https://balenciaga.dam.kering.com/m/60215824a0d6ce05/Large-Home-0000s_0003_13_3XL_YELLOW_0003_V05_DEF_RVB.jpg',
      title:'shop sneaker',
    },
  ]
  return (
    <div>
      {
      data.map(item => (
        <Link to={`/products/${item.id}`}>
          <div className='homeProducts'>
            <div className="homeProducts__image">
              <img src={item.img}></img>
            </div>
            <div className="homeProducts__button">
              <button>
                {item.title}
              </button>
            </div>
          </div>
        </Link>
      ))
      }
    </div>
  )
}

export default HomeProducts