import React, { useEffect, useState } from 'react'
import './RecipeDetail.scss'
import { fetchRecipesById } from '../../utils/api'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

function RecipeDetail() {
  const [recipe, setRecipe] = useState({})         // Initializing state for recipes.
  const [loading, setLoading] = useState(true)        // Initializing state for loading indicator.
  const [isFavorite, setIsFavorite] = useState(false)
  const { id } = useParams()




  useEffect(() => {                         // Setting up an effect to fetch recipes when the component mounts.

    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipesById(id)         // Fetching recipes data.
        setRecipe(data)                          // Updating the recipes state with fetched data.
        setLoading(false)                         // Turning off loading indicator
      }
      catch {
        setLoading(false)
      }

    }
    fetchRecipesData()
  }, [id])

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('fav')) || []
    const isRecipeFav = fav.some(rec => rec.id === recipe.id)
    setIsFavorite(isRecipeFav)
  }, [recipe])

  const handleToggleFav = () => {
    setIsFavorite(preVal => !preVal)
    const fav = JSON.parse(localStorage.getItem('fav')) || []
    const updateFav = isFavorite ? fav.filter(rec => rec.id !== recipe.id)
      : [...fav, recipe]
    localStorage.setItem('fav', JSON.stringify(updateFav))
  }
  return (

    <div>

      {loading ? <Loader name={"Recipe is loading"} /> :
        <div className='details'>
          <Link to={'/'}> Go Back</Link>
          <div className='header'>
            <h2>{recipe.title}</h2>
            <button
              onClick={handleToggleFav}
              className='favBtn'>{!isFavorite ? '+ Add to Favorties' : '- Remove from Favorties'}</button>
          </div>

          <div className='content'>
            <img className='image' src={recipe.image} alt={recipe.title} />
            <div className='recipeInfo'>
              <span className='tag level'>{recipe.level}</span>
              <span className='tag time'>{recipe.time}</span>
              <span className='tag veg'>{recipe.isVeg ? "veg" : "Non-Veg"}</span>
            </div>

            <div className='tags'>
              {recipe.ingredients.map((ingredients, index) => (
                <span key={index} className='ingredient'>{ingredients} </span>
              ))}
            </div>
            <h2 className='instructions'>Instructions</h2>
            <ol className='instructions'>
              {recipe.ingredients.map((instructions, index) => (
                <li key={index} className='instructions'>{instructions} </li>
              ))}
            </ol>

          </div>

        </div>
      }
    </div>
  )
}

export default RecipeDetail