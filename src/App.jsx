import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [className, setClassName] = useState(styles.theme);

  useEffect(() => {
    if (theme === "light") {
      setClassName(styles.light);
    } else {
      setClassName(styles.dark);
    }
  }, [theme]);

  function getDefaultTheme() {
    const currentHour = new Date().getHours();
    return currentHour >= 18 || currentHour < 6 ? "dark" : "light";
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.firstViewContainer} ${className}`}>
        <div className={styles.navbar}>
          <img
            src={`/${theme}/logo.svg`}
            alt="The Parent Company Official Logo"
            srcset=""
            className={styles.logo}
          />
          <img
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            src={`/${theme}/sun.png`}
            alt=""
            className={styles.sun}
          />
        </div>
        <div className={styles.firstViewContent}>
          <img
            src={`/${theme}/sparkles.png`}
            className={styles.sparkles}
            alt=""
            srcset=""
          />
          <p className={styles.firstViewContentText}>
            The Parent Company,
            <br />
            The Parent of Future🪐
          </p>
          <p className={styles.firstViewContentTagline}>
            We are coming soon, Until then find hidden surprises.
          </p>
          <div className={styles.firstViewButtons}>
            <button className={styles.followUs}>Follow Us</button>
            <button className={styles.instagramButton}>
              <img src="/ig.jpg" alt="" />
            </button>
          </div>
        </div>
        <img src={`/${theme}/cw.png`} alt="" className={styles.clouds} />
      </div>
    </div>
  );
};

export default App;
