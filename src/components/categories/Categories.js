import React from "react";
import categories from "./cat";

function Categories() {
  return (
    <section>
      <h3>Categories</h3>
      <ul>
        {categories.map((single) => {
          const { id, category } = single;
          return (
            <li key={id}>
              <a href={category}>{category.replace("Recipes", "")}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Categories;
