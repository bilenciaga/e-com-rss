import './HomeSlider.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {

  const data = [
    'https://balenciaga.dam.kering.com/m/3132061efe6ae6ae/Large-Home_Balenciaga_Summer23_campaign_Look11_2600x1300px-2x1.jpg',
    'https://balenciaga.dam.kering.com/m/d61ed02cef62042/Large-Home_Balenciaga_Summer23_Campaign_Look14_2600x1300px-2x1.jpg',
    'https://balenciaga.dam.kering.com/m/595f5abf08f93ffe/Large-Home_Balenciaga_Summer23_Campaign_Look15_2600x1300px-2x1.jpg',
  ];

  const settings = { 
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade:true,
  }


  return (
    <div className='slider'>
        <Slider {...settings}>
          <div>
            <img src={data[0]} />
          </div>
          <div>
            <img src={data[1]} />
          </div>
          <div>
            <img src={data[2]} />
          </div>
        </Slider>
    </div>
  )
}

export default HomeSlider