import clsx from "clsx";

import styles from "styles/App.module.css";
import NavBar from "components/NavBar";

function App() {
  return (
    <div className={clsx(styles.appContainer)}>
      <NavBar />
    </div>
  );
}

export default App;
