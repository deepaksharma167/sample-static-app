import Link from "next/link";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <>
      <main id="home">
        <h1 className={styles.lgheading}>
          Deepak <span className="text-secondary">Sharma</span>
        </h1>
        <h2 className={styles.smheading}>
          Web Developer, Programmer, DevOps Engineer, Full Stack Developer &
          Entrepreneur{" "}
        </h2>
        <div className="icons">
          <Link href="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </Link>
          <a href="#!">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    </>
  );
}
