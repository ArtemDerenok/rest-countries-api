import { useAppSelector } from "../redux/hooks";
import styles from "./App.module.scss";
import Header from "./Header/Header";

function App() {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  return (
    <div
      className={`${styles.container} ${
        isDarkMode ? styles.darkBackground : null
      }`}
    >
      <Header />
    </div>
  );
}

export default App;
