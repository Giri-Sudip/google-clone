import React from 'react'
import './Home.css';
import Search from './Search'
import { Link } from 'react-router-dom';
import AppsIcon from "@mui/icons-material/Apps"
import { Avatar } from '@mui/material';
import icon from './icon.png'
const Home = () => {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          <Link to='/about' >About</Link>
          <Link to='/store' >Store</Link>
        </div>
        <div className='home_headerRight'>
          <Link to='/gmail' >Gmail</Link>
          <Link to='/images' >Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className='home_body'>
        <img src={icon} alt='google icon' />
      </div>
      <div className='home_inputContainer'>
      <Search/>
      </div>
  
    </div>
  )
}

export default Home