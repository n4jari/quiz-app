import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h2>The number of questions is 10.</h2>
        <p>Categories of questions:</p>
        <ul className={styles.categories}>
          <li>1-3  Geography</li>
          <li>4-6  sports</li>
          <li>7-9  scientific</li>
          <li>10-12  Historical</li>
        </ul>
        <Link href="/quiz" className={styles.btn}>
          START
        </Link>
      </div>

      <footer className={styles.social}>
        <p>
          Created by
          <Link href={"https://github.com/n4jari"} target="_blank">
            N4JARI
          </Link>
        </p>
      </footer>
    </main>
  );
}
