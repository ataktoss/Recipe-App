import React,{useEffect,useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Recipe full info

const RecipeDetails = () =>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const {recipe} = location.state;


    return(<>
        <div>
            <button onClick={() => navigate('/')} className="Return-Homepage">Return to Homepage</button>
        </div>
        <div className="recipe-details">
            <div className="recipe-head">
                <h1 className="recipe-name">{recipe.label}</h1>
                <img src={recipe.image} alt={recipe.label} className="recipe-image"/>
                <h4>Calories : {recipe.calories.toFixed(0)}</h4>
            </div>
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ing,idx)=>(
                    <div>
                        <li key={idx}>{ing.text}</li>
                        
                        <img src={ing.image} className="ingredient-image" alt={ing.text}/>
                    </div>
                    
                ))}
            </ul>
            <p>Full recipe details by {recipe.source} can be found here :</p>
            <button className="recipe-link" onClick={() => window.open(recipe.url, '_blank')}>Full Recipe</button>
        </div>
    
    </>);
};

export default RecipeDetails;