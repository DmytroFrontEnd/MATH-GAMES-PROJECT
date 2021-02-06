import styles from "./Math.module.css";

const ThirdScreenMath = (props) => {
  return (
    <div>
      <h1 className="sentence">{props.sentence}</h1>
      <div className="thirdScreen">
        <i className="fas fa-trophy"></i>
        <h1 className={styles.record}>{props.allRigthAnswers}</h1>
      </div>
      <button onClick={props.formHandler} className="tryAgain">
        Try Again
      </button>
    </div>
  );
};
export default ThirdScreenMath;
