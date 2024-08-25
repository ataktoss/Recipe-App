import React from "react";

const FoodList = ({foodArray}) =>{




    return(<>
        
        <h1>{foodArray[4].food.label}</h1>

        <ol>
            {foodArray.map((thehint, index) => (
            <li key={index}>{thehint.food.label}
            <img src={thehint.food.image}/>
            </li>
             ))}
        </ol>
        
        
    </>);

};

export default FoodList;