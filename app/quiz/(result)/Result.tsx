import Link from "next/link";
import styles from "./Result.module.css";
import { IResultProps } from "../../../types";

export default function Result({ points, count }: IResultProps) {
  return (
    <div className={styles.container}>
      <p> Number of questions : {count} </p>
      <p> Number of correct answers : {points} </p>
      <Link href="/" className={styles.btn}>
        OK
      </Link>
    </div>
  );
}
