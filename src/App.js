import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([])         // Initializing state for recipes.
  const [loading, setLoading] = useState(true)        // Initializing state for loading indicator.


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



  return (
    <div className="App">
      <Header title={"Recipe App"}/>
     
      {loading ? <Loader name= {"Recipe is loading"}/>
        :  <RecipeList recipes={recipes}/>}
    </div>
  );
}

export default App;
