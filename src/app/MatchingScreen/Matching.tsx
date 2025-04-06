import styles from "./MatchingScreen.module.css";
import { useEffect } from "react";

const Matching = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO: Integrate redirect or result screen logic
      console.log("Matching complete!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.message}>Matching your pawfect friend...</div>
      <div className={styles.icons}></div>

      <div className={styles.tennisBallSpinner}>
        <div className={styles.ball}></div>
      </div>

      {/* <div className={styles.note}></div> */}
    </div>
  );
};

export default Matching;
