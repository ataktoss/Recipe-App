import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

//Individual recipe container

const RecipeItem = ({RecipeItem,index}) =>{
    const navigate = useNavigate();

    const handleViewDetails= () =>{
        navigate(`/recipe/${index}`,{state:{recipe:RecipeItem.recipe}})
    };
    


    return(<>
        <div className="container">
            <h1>{RecipeItem.recipe.label}</h1>
            <div className="separator"></div>
            <div className="content">
                <div className="left">
                    <ol>
                        {RecipeItem.recipe.ingredients.map((ing,idx) => (
                        <li key={idx}>{ing.food}</li>
                        ))}
                    </ol>
                </div>
                <div className="right">
                    <img src={RecipeItem.recipe.image}/>
                </div>
                <button onClick={handleViewDetails}>View Details</button>
            </div>
        </div>
        
    </>);

};

export default RecipeItem;