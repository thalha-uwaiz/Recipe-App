import React, { useState } from 'react'
import './Searchbar.scss'

function Searchbar({ SetSearchQuery }) {
    const [searchText, setSearchText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchText)
        setSearchText("")
        SetSearchQuery(searchText)

    }
    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search Recipes'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}

                />
                <button type='submit'>Search</button>

            </form>
        </div>
    )
}

export default Searchbar