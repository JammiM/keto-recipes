import "./App.css";
import Categories from "../src/components/categories/Categories";
import styles from "./components/categories/cat.module.css";

function App() {
  return (
    <div className="App">
      <Categories className={styles.h4} />
    </div>
  );
}

export default App;
