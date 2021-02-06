import styles from "./Games.module.css";
import MathGame from "./MathGameLink/MathGameLink";
import QuizGame from "./QuizGameLink/QuizGameLink";

const Games = () => {
  return (
    <div className={styles.gamesWindow} id="games">
      <h1 className={styles.choose}>Choose the game:</h1>

      <div id="games" className={styles.games}>
        <MathGame />
        <QuizGame />
      </div>
    </div>
  );
};

export default Games;
