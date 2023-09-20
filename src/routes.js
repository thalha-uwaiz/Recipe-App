import {                                                    // import react router dom
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import RecipeDetail from "./components/RecipeDetails/RecipeDetail";


const router = createBrowserRouter([                      //import from react router page
    {
        path: "/",
        element: <App/>,
    }, 

    {
        path: "/recipe/:id",
        element: <RecipeDetail/>,
    }, 
   
]);


const MyRoutes = () => 
    <RouterProvider router={router} />


export default MyRoutes;