import styles from "./MathGameLink.module.css";
import gameStyle from "../Games.module.css";
import mathBackground from "../../../Images/math_background.svg";
import { Link } from "react-scroll";
const MathGame = () => {
  return (
    <div className={gameStyle.mathGame}>
      <Link
        offset={-100}
        className={styles.links}
        to="math"
        smooth={true}
        duration={1500}
      >
        <img className={styles.mathBackground} src={mathBackground} alt="/" />
        <h2 className={styles.name}>Math Game</h2>
      </Link>
    </div>
  );
};
export default MathGame;
