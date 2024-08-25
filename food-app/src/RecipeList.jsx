import React,{useState,useEffect} from "react";
import RecipeItem from "./RecipeItem";

//List of every recipe returned 

const RecipeList = ({recipes}) =>{

    return(<>
        
        <ol>
            

        </ol>
        <div className="listContainer">
            {recipes.map((thehit,index) => (
                <RecipeItem RecipeItem={thehit} index={index} key={thehit.recipe.shareAs}/> 
            ))}

        </div>
    </>);
};

export default RecipeList;