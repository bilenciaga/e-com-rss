import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">

        <div className="navbar__left">
          <div className="navbar__item">
            <Link className='link' to ='/products/1'>Women</Link>
          </div>
          <div className="navbar__item">
            <Link className='link' to ='/products/2'>Men</Link>
          </div>
          <div className="navbar__item">
            <Link className='link' to ='/products/2'>Bag</Link>
          </div>
          <div className="navbar__item">
            <SearchIcon />
          </div>
        </div>

        <div className="navbar__center">
          <Link className='link' to='/'>BSIANSTORE</Link>
        </div>

        <div className="navbar__right">
        <div className="navbar__item">
            <span>EN</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="navbar__right-icons">
            <PersonOutlineIcon />
            <div className="navbar__right-cartIcon">
              <WorkOutlineOutlinedIcon />
              <span>0</span>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar