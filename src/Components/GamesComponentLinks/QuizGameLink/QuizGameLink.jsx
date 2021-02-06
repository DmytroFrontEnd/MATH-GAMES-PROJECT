import styles from "./QuizGameLink.module.css";
import gameStyle from "../Games.module.css";

import quizBackground from "../../../Images/quiz_background.svg";
import { Link } from "react-scroll";
const QuizGame = () => {
  return (
    <div className={gameStyle.quizGame}>
      <Link
        offset={-60}
        className={styles.links}
        to="quiz"
        smooth={true}
        duration={1500}
      >
        <img className={styles.quizBackground} src={quizBackground} alt="/" />
        <h2 className={styles.name}>Quiz Game</h2>
      </Link>
    </div>
  );
};
export default QuizGame;
