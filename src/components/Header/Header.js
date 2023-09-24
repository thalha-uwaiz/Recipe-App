import React from 'react'
import './Header.scss'
import Searchbar from '../Searchbar/Searchbar'

function Header({title = 'My App', SetSearchQuery}) {
  return (
    <div className='header'>
        <div className='title'>{title}</div>
        <Searchbar SetSearchQuery = {SetSearchQuery} /> 



    </div>
  )
}

export default Header