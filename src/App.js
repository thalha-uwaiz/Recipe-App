import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([])         // Initializing state for recipes.
  const [loading, setLoading] = useState(true)        // Initializing state for loading indicator.
  const [searchQuery, SetSearchQuery] = useState()


  useEffect(() => {                         // Setting up an effect to fetch recipes when the component mounts.

    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipes()         // Fetching recipes data.
        setRecipes(data)                          // Updating the recipes state with fetched data.
        setLoading(false)                         // Turning off loading indicator
      }
      catch {
        setLoading(false)
      }

    }
    fetchRecipesData()
  }, [])

  const filterRecipe = searchQuery
    ? recipes.filter(rec => rec.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : recipes;

  const recipesToDisplay = filterRecipe;




  return (
    <div className="App">
      <Header title={"Recipe App"} SetSearchQuery={SetSearchQuery} />

      {loading ? <Loader name={"Recipe is loading"} />
        : <RecipeList recipes={recipesToDisplay} />}
    </div>
  );
}

export default App;
