import React from "react";
import Recipes from "./keto-recipes";

let styles = {
  singleRecipeItem: {
    background: "#3399FF",
    border: "1px solid blue",
    padding: "10px",
    width: "80%",
    fontFamily: "Roboto Condensed, sans-serif",
    margin: "0.5em",
    listStyle: "none",
  },
};

function ListOfRecipes() {
  return (
    <div>
      List Of Recipes
      <ul>
        {Recipes.map((single) => {
          const {
            id,
            recipe,
            image,
            difficulty,
            serving,
            prep_time_in_minutes,
            cook_time_in_minutes,
            calories,
            fat_in_grams,
            carbohydrates_in_grams,
            protein_in_grams,
            category,
          } = single;
          return (
            <li key={id} style={styles.singleRecipeItem}>
              {/* // <li className="singleRecipeItem" key={id} style={{ width: "80%" }}> */}
              <h4>{recipe}</h4>
              <img
                alt={recipe}
                src={image}
                style={{ height: "30%", width: "30%" }}
              ></img>
              <span>Difficulty : {difficulty}</span> |
              <span>Serves: {serving} people</span> |
              <span>Prep time : {prep_time_in_minutes} minutes</span> |
              <span>Cook time : {cook_time_in_minutes} minutes</span> |
              <span>Calories : {calories} </span> |
              <span>Fat : {fat_in_grams} grams</span> |
              <span>Carbs : {carbohydrates_in_grams} grams</span> |
              <span>Protein : {protein_in_grams} grams</span> |
              <span>
                Category: {category.category} : {category.id}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfRecipes;
