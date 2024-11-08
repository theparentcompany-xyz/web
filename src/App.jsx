import { useEffect, useState } from "react";
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
                        alt="Hoomans Project Official Logo"
                        srcSet=""
                        className={styles.logo}
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
                        srcSet=""
                    />
                    <p className={styles.firstViewContentText}>
                        The Hoomans Project:
                        <br />
                        For Humans, By Hoomans.
                    </p>
                    <p className={styles.firstViewContentTagline}>
                        Empowering Hoomans to Imagine, Innovate, and Shape the Future.
                    </p>
                    <div className={styles.firstViewButtons}>
                        <a
                            href="https://www.instagram.com/hoomans.project/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles.followUs}>Follow Us</button>
                        </a>
                        <a
                            href="https://www.instagram.com/hoomans.project/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles.instagramButton}>
                                <img src="/ig.jpg" alt="" />
                            </button>
                        </a>
                    </div>

                    <p className={styles.projectsHeading}>Ongoing Projects</p>

                    <div className={styles.card}>
                        <img src={`/dark/cimg.png`} alt="Card Image" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>MakeMyPass</h3>
                            <p className={styles.cardDescription}>
                                Unforgettable Moments Commence with Tickets in your Digital Grasp.
                                At MakeMyPass, Anticipation Meets Convenience, without the Chaos of
                                Pass Logistics!
                            </p>
                            <div className={styles.cardLinks}>
                                <a
                                    href="https://makemypass.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardLink}
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://www.instagram.com/makemypass/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardLink}
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={`/${theme}/cw.png`}
                    alt=""
                    className={styles.clouds}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                />
            </div>
        </div>
    );
};

export default App;
