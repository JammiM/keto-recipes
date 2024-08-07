import React from "react";
import categories from "./cat";

function Categories() {
  return (
    <section className="catsection">
      <h3>Recipes</h3>
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
