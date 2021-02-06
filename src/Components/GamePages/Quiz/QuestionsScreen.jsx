import { questions } from "./questions";
import styles from "./Quiz.module.css";

const QuestionScreen = (props) => {
  return (
    <div style={props.styles} className={styles.questionScreen}>
      <div className={styles.question}>{questions[props.element].question}</div>
      <div className={styles.answers}>
        {questions[props.element].options.map((answer) => {
          return (
            <div
              className={styles.answerOption}
              onClick={() => props.nextQuestion(answer)}
              key={answer.answer}
            >
              {answer.answer}
            </div>
          );
        })}
      </div>
      <div>
        <span className={styles.numOfQuestion}>{props.element + 1}</span>/15
      </div>
    </div>
  );
};
export default QuestionScreen;
