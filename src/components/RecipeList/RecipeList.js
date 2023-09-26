import React, { useEffect, useState } from 'react'
import './RecipeList.scss'
import { Link } from 'react-router-dom'

function RecipeList({ recipes = [] }) {
    const [filterData, setFilterData] = useState(recipes)

    useEffect(() => {
        setFilterData(recipes)
    }, [recipes])

    const renderNoRecipes = () => {
        if (filterData.length === 0)
            return <div className='noRecipes'>No Recipes Found, Serach for different item</div>
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        if (value === '') {
            setFilterData(recipes);
        }
        else {
            const filtered = recipes.filter((recipe) => {
                if (value === 'veg') {
                    return recipe.isVeg;
                } else if (value === 'non-veg') {
                    return !recipe.isVeg
                } else {
                    return recipe.level === value
                }
            });
            setFilterData(filtered)
        }


    }




    return (
        <div className='recipeList'>
            <div className='header'>
                <h3 className='title'> Check out these Recipes</h3>
                <select onChange={handleFilter} name='filter' id='filter'>
                    <option value="">All</option>
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non Veg</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>

                </select>
            </div>

            <div className='list'>
                {filterData.map(recipe =>
                    <Link
                        to={`/recipe/${recipe.id}`}
                        className='linkItem'
                        key={recipe.id}>
                        <div className='cardContainer'>
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

            {renderNoRecipes()}






        </div>

    )
}

export default RecipeList