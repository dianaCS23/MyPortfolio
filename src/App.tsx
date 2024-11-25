import Header from "./components/header";
import Projects from "./components/projects";
import ThemeSwitcher from "./components/themeSwitcher";
import ProfileUI from "./UI/ProfileUI";
import DescriptionUI from "./UI/DescriptionUI";
import styles from "./components/app.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.profileContainer}>
        <ProfileUI />
      </div>
      <DescriptionUI />
      <ThemeSwitcher />
      <h2 className={styles.welcomeText}>Welcome to my portfolio</h2>
      <Projects />
    </div>
  );
};

export default App;
