import "./App.css";
import Categories from "../src/components/categories/Categories";
import styles from "./components/categories/cat.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import footerStyles from "./components/footer/footer.module.css";
import headerStyles from "./components/header/header.module.css";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <main>
      <Header className={headerStyles} />
      <Hero />
      <Categories className={styles} />
      <Footer className={footerStyles} />
    </main>
  );
}

export default App;
