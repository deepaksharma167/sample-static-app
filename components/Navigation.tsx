import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import { useState } from "react";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div
        className={styles.menubtn + " " + (showMenu ? styles.close : "")}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className={styles.btnline}></div>
        <div className={styles.btnline}></div>
        <div className={styles.btnline}></div>
      </div>
      <nav className={styles.menu + " " + (showMenu ? styles.show : "")}>
        <div
          className={styles.menubranding + " " + (showMenu ? styles.show : "")}
        >
          <div className={styles.portrait}></div>
        </div>
        <ul className={styles.menunav + " " + (showMenu ? styles.show : "")}>
          <li className={styles.navitem + " " + (showMenu ? styles.show : "")}>
            <Link href="index.html" className={styles.navlink}>
              Home
            </Link>
          </li>
          <li className={styles.navitem + " " + (showMenu ? styles.show : "")}>
            <Link href="about.html" className={styles.navlink}>
              About
            </Link>
          </li>
          <li className={styles.navitem + " " + (showMenu ? styles.show : "")}>
            <Link href="work.html" className={styles.navlink}>
              My Work
            </Link>
          </li>
          <li className={styles.navitem + " " + (showMenu ? styles.show : "")}>
            <Link href="contact.html" className={styles.navlink}>
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
