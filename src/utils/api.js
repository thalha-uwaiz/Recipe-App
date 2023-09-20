//api url and end points
const BASE_URL = 'https://api-recipe.vercel.app/';          // Define the base API URL.
const END_POINTS = {                                        // Define API endpoints.
    recipes: "recipes",
    recipesId: "recipes/:id"
}

//api specific functions
export const fetchRecipes = async() => {                       // Function to fetch recipes
    const url = `${BASE_URL}${END_POINTS.recipes}`
    return await fetchData(url)
}

export const fetchRecipesById = async(id) => {                 // Function to fetch recipes by ID.
    const url = `${BASE_URL}${END_POINTS.recipesId}`.replace(`:id`, id)   //set recipes id in dynamic
    return await fetchData(url)
}




//api helper function
async function fetchData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.log('response failed')
        }
        return await response.json()


    }
    catch (error) {
        console.log(error)

    }
}