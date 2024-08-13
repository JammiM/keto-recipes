import React from "react";
import categories from "./cat";

function Categories() {
  return (
    <section>
      <h3>Recipes</h3>
      <ul className="w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {categories.map((single) => {
          const { id, category } = single;
          return (
            <li
              key={id}
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              <a href={id}>{category.replace("Recipes", "")}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Categories;
