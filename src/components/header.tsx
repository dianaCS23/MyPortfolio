import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Portfolio</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
