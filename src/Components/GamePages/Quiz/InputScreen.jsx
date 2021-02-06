import styles from "./Quiz.module.css";

const InputScreen = (props) => {
  return (
    <div className={styles.inputScreen}>
      <h1 className={styles.sentence}>
        Let's check your knowledge about{" "}
        <span className={styles.js}>JavaScript</span>
      </h1>
      <form onSubmit={props.hideInput}>
        <div className="inputData">
          <input
            value={props.value}
            onChange={props.inputHandler}
            required
            className="nameInput"
            type="text"
          />
          <label className="nameLabel">
            <span className="nameLabelContent">Your Name:</span>
          </label>
        </div>
        <button className="btnStart">START</button>
      </form>
    </div>
  );
};
export default InputScreen;
