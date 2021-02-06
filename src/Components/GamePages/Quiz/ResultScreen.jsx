import styles from "./Quiz.module.css";
const ResultScreen = (props) => {
  return (
    <div>
      <h1 className={styles.congratulations}>{props.congratulation}</h1>
      <div className={styles.resultScreen}>
        <i className="fas fa-trophy"></i>
        <h1>{props.result}</h1>
      </div>
      <button onClick={props.tryAgain} className={styles.tryAgain}>
        Try Again
      </button>
    </div>
  );
};
export default ResultScreen;
