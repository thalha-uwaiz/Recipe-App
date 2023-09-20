import React from 'react'
import './RecipeList.scss'
import { Link } from 'react-router-dom'

function RecipeList({ recipes = [] }) {
    return (
        <div className='recipeList'>
            <h3 className='title'> Check out these Recipes</h3>
            <div className='list'>
                {recipes.map(recipe =>
                    <Link 
                    to={`/recipe/${recipe.id}`}
                    className='linkItem'
                     key={recipe.id}>
                        <div  className='cardContainer'>
                            <div className='cardHeading'>
                                {recipe.title}
                            </div>

                            <div className='recipeInfo'>
                                <span className='tag level'>{recipe.level}</span>
                                <span className='tag time'>{recipe.time}</span>
                                <span className='tag veg'>{recipe.isVeg ? "veg" : "Non-Veg"}</span>
                            </div>

                            <img className='image'
                                src={recipe.image}
                                alt={recipe.title}
                            />



                        </div>
                    </Link>
                )}


            </div>
        </div>

    )
}

export default RecipeList