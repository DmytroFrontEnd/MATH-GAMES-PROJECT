import styles from "./Math.module.css";

const SecondScreenMath = (props) => {
  return (
    <div style={props.secondStyles} className={styles.secondScreen}>
      <div className={styles.questions}>
        <div className={styles.question}>{props.num}</div>
      </div>
      <div className={styles.answers}>
        {props.allAnswers.map((i) => {
          return (
            <div
              key={Math.random()}
              onClick={props.questionHandler}
              className={styles.answer}
            >
              {i}
            </div>
          );
        })}
      </div>
      <div className={styles.counter}>{props.counter}/20</div>
    </div>
  );
};
export default SecondScreenMath;
