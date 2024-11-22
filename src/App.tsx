import Header from "./components/header";
import Projects from "./components/projects";
import ThemeSwitcher from "./components/themeSwitcher";
import ProfileCard from "./components/ProfileCrd";
import styles from "./components/app.module.css";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.profileContainer}>
        <ProfileCard
          name="Diana Cuellar"
          title="Frontend Developer"
          profilePicture="./public/profile.png"
          email="diana.lcuellars@gmail.com"
          linkedin="https://www.linkedin.com/in/diana-cuellar/"
          github="https://github.com/dianaCS23"
        />
      </div>
      <AboutMe description="shdksahdjh" />
      <ThemeSwitcher />
      <h2 className={styles.welcomeText}>Welcome to my portfolio</h2>
      <Projects />
    </div>
  );
};

export default App;
