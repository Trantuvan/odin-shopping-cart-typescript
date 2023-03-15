import clsx from "clsx";

import styles from "styles/App.module.css";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { HomePage } from "pages";

function App() {
  return (
    <div className={clsx(styles.appContainer)}>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
