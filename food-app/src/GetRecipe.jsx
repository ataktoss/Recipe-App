import React,{useState,useEffect} from "react";
import axios from "axios";
import RecipeList from "./RecipeList";


//Search input,button / Server call 

const GetRecipe = ()  => {

    const [input,setInput] = useState('');
    const [recipeList,setRecipeList] = useState(null);
    const [showList,setShowList] = useState(false);
    
    const [serverError,setServerError] = useState(false);

    const GetInput = (e) =>{
        setInput(e.target.value);
    };
    const GetRecipe = async() =>{
        try{
            
            const response = await axios.get(`http://localhost:5000/food/${input}`);
            console.log(response.data);
            setRecipeList(response.data.hits);
            setShowList(true);
            
        }
        catch(error){
            console.error('Caught error ',error);
            setServerError(true);
        }


    };




    return(<>
        <div className="search-container">
            <h1>Search for a recipe by name or ingredients</h1>
            <input type="text" onChange={GetInput} className="search-bar"/>
            <button onClick={GetRecipe} className="search-button">Get Recipe</button>
            
            {serverError && <h1>Could not find anything, please try again with another food name.</h1>}
            {showList && <RecipeList recipes={recipeList}/>}
        </div>
        
    </>);

};

export default GetRecipe;