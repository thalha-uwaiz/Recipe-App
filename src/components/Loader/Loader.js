import React from 'react'
import './Loader.scss'
import loaderAnimation from '../../assets/loaderAnimation.svg'

function Loader({ name = "Loading" }) {
    return (
        <div className='loader'>
            <img src={loaderAnimation} alt='Loading Animation ' />
            <div className='title'> {name}</div>
        </div>
    )
}

export default Loader