import "./App.css";
import Categories from "../src/components/categories/Categories";
import styles from "./components/categories/cat.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import footerStyles from "./components/footer/footer.module.css";
import headerStyles from "./components/header/header.module.css";
// import Hero from "./components/hero/Hero";

import ListOfRecipes from "./components/listOfRecipes/ListOfRecipes";
function App() {
  return (
    <div className="parent text-center bg-gray-50 flex flex-col h-screen">
      <Header className={headerStyles} />
      <main className="flex-1 flex">
        <div className="sidebar-1 p-4">
          Placeholder Sidebar
          <Categories className={styles} />
        </div>
        <div className="content flex-1">
          <ListOfRecipes />
        </div>
        <div className="sidebar-2  p-4">Placeholder Sidebar</div>
      </main>
      <Footer className={footerStyles} />
    </div>
  );
}

export default App;
