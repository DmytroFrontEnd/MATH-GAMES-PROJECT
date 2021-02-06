import styles from "./FirstScreen.module.css";
import bgImage from "../../Images/background_image.svg";
import { Link } from "react-scroll";
const FirstScreen = () => {
  return (
    <div id="main" className={styles.firstScreen}>
      <div className={styles.block1}>
        <img className={styles.img} src={bgImage} alt="/" />
      </div>
      <div className={styles.block2}>
        <div className={styles.number1}>2 + 5</div>
        <div className={styles.number2}>3 * 8</div>
        <div className={styles.number3}>2(x + 7)</div>
        <div className={styles.number4}>2/3</div>
        <div className={styles.number5}>&#8730;49</div>
        <div className={styles.number6}>log10</div>
        <div className={styles.number7}>2x + 8</div>
        <div className={styles.number8}>0.1 + 1.9</div>
        <div className={styles.number9}>&#8730;81</div>
        <div className={styles.number10}>y = ? </div>
        <h1 className={styles.text}>Improve your brain</h1>
        <Link smooth={true} duration={1500} className={styles.btn} to="games">
          Start <i className="fas fa-arrow-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default FirstScreen;
