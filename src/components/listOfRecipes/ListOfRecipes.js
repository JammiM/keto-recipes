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
              className="p-1 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 m-10"
            >
              <div>
                <img alt={recipe} src={image}></img>
              </div>
              <div>
                <h4 className="text-xl font-medium text-black">{recipe}</h4>

                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-1">
                  {difficulty}
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                  Serves {serving} people
                </span>
                {cook_time_in_minutes === 0 ? (
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                    Prep time : {prep_time_in_minutes} Minutes
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                    Prep time : {prep_time_in_minutes + cook_time_in_minutes}{" "}
                    Minutes
                  </span>
                )}
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                  {calories} Calories
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                  {fat_in_grams} grams of Fat
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                  {carbohydrates_in_grams} grams of Carbs
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                  {protein_in_grams} grams of Protein
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 m-1">
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
