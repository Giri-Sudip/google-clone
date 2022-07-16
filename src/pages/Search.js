import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Search = ({ hideButtons = false}) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const search = e => {
    e.preventDefault();
    navigate('/search')
  }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search}>Google Search</Button>
          <Button >I am feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">

          <Button className="search_buttonHidden" type="submit" onClick={search}>Google Search</Button>
          <Button className="search_buttonHidden" type="submit" >I am feeling Lucky</Button>

        </div>
      )}

    </form>
  )
}

export default Search