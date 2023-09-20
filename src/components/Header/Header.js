import React from 'react'
import './Header.scss'
import Searchbar from '../Searchbar/Searchbar'

function Header({title = 'My App'}) {
  return (
    <div className='header'>
        <div className='title'>{title}</div>
        <Searchbar /> 



    </div>
  )
}

export default Header