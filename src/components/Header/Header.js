import React from 'react'
import './Header.scss'
import Searchbar from '../Searchbar/Searchbar'

function Header({ title = 'My App', SetSearchQuery }) {
  return (
    <div className='header'>
      <div className='title'>{title}</div>
      <div className='rightSection'>
        <Searchbar SetSearchQuery={SetSearchQuery} />
        <button className='clear'
          onClick={() => SetSearchQuery('')}>Clear</button>
      </div>




    </div>
  )
}

export default Header