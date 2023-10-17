import styles from "../styles/index.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <NavBar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Welcome to the world of ReactJS
          </span>
          <span className={styles.thapatext}>Love with JavaScript</span>
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
        >
          Thapa Technical
        </a>
      </div>
    </header>
  );
};

export default Header;
