import React from "react";
import Recipes from "./keto-recipes";

function ListOfRecipes() {
  return (
    <div>
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
            <li
              key={id}
              class="p-1 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 m-10"
            >
              <div>
                <img alt={recipe} src={image}></img>
              </div>
              <div>
                <h4 class="text-xl font-medium text-black">{recipe}</h4>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Difficulty : {difficulty}
                </span>{" "}
                |<span>Serves: {serving} people</span> |
                <span>Prep time : {prep_time_in_minutes} minutes</span> |
                <span>Cook time : {cook_time_in_minutes} minutes</span> |
                <span>Calories : {calories} </span> |
                <span>Fat : {fat_in_grams} grams</span> |
                <span>Carbs : {carbohydrates_in_grams} grams</span> |
                <span>Protein : {protein_in_grams} grams</span> |
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {category.category}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfRecipes;
