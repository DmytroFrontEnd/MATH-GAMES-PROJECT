import styles from "./Math.module.css";

const FirstScreenMath = (props) => {
  return (
    <div className={styles.mathContainer}>
      <form onSubmit={props.formHandler}>
        <div className="inputData">
          <input
            onChange={props.onChangeInputHandler}
            value={props.inputHandler}
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
export default FirstScreenMath;
