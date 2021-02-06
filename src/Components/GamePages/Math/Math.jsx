import { useState, useEffect } from "react";
import FirstScreenMath from "./FirstScreenMath";
import styles from "./Math.module.css";
import SecondScreenMath from "./SecondScreenMath";
import ThirdScreenMath from "./ThirdScreenMath";
const MathGameScreen = () => {
  const [form, setForm] = useState(true);
  const formHandler = (e) => {
    e.preventDefault();
    setForm(false);
  };

  let questionsNumber1 = Math.trunc(Math.random() * 20 + 1);
  let questionsNumber2 = Math.trunc(Math.random() * 20 + 1);
  let righAnswer = questionsNumber1 + questionsNumber2;
  let wrongOption1 = righAnswer - Math.trunc(Math.random() * 20 + 1);
  let wrongOption2 = righAnswer + Math.trunc(Math.random() * 20 + 1);
  let wrongOption3 = righAnswer + Math.trunc(Math.random() * 20 + 1);
  let fullQuestion = `${questionsNumber1} + ${questionsNumber2} = ?`;
  let [num, setNum] = useState(fullQuestion);
  let [result, setResult] = useState(righAnswer);
  let [wrongAnswer1, setWrongAnswer1] = useState(wrongOption1);
  let [wrongAnswer2, setWrongAnswer2] = useState(wrongOption2);
  let [wrongAnswer3, setWrongAnswer3] = useState(wrongOption3);
  let [allRigthAnswers, setAllRightAnswers] = useState(0);
  let [counter, setCounter] = useState(0);
  const [inputHandler, setInputHandler] = useState("");
  const [showThirdScreen, setShowThirdScreen] = useState(true);
  let [sentence, setSentence] = useState("");
  let allAnswers = [result, wrongAnswer1, wrongAnswer2, wrongAnswer3];
  let shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  shuffle(allAnswers);
  const onChangeInputHandler = (e) => {
    setInputHandler(() => e.target.value);
  };
  let questionHandler = (e) => {
    questionsNumber1 = Math.trunc(Math.random() * 20 + 1);
    questionsNumber2 = Math.trunc(Math.random() * 20 + 1);
    fullQuestion = `${questionsNumber1} + ${questionsNumber2} = ?`;
    righAnswer = questionsNumber1 + questionsNumber2;
    wrongOption1 = righAnswer - Math.trunc(Math.random() * 10 + 1);
    wrongOption2 = righAnswer + Math.trunc(Math.random() * 20 + 1);
    wrongOption3 = righAnswer - Math.trunc(Math.random() * 20 + 1);
    setNum(() => fullQuestion);
    setResult(() => righAnswer);
    setWrongAnswer1(() => wrongOption1);
    setWrongAnswer2(() => wrongOption2);
    setWrongAnswer3(() => wrongOption3);

    if (Number(e.currentTarget.textContent) === result) {
      setAllRightAnswers((prev) => prev + 1);
    }
    allRigthAnswers < 15
      ? setSentence(`${inputHandler} it's great , but you can better`)
      : setSentence(`${inputHandler} it's awesome ,your math is realy good`);
  };

  useEffect(() => {
    setCounter((prev) => prev + 1);

    if (counter === 20) {
      setShowThirdScreen(false);
    }
    // eslint-disable-next-line
  }, [num]);
  const tryAgainHandler = () => {
    setShowThirdScreen(true);
    setCounter(1);
    setAllRightAnswers(0);
  };
  const secondStyles = {
    display: showThirdScreen ? "flex" : "none",
  };

  return (
    <div id="math" className="gameContainer">
      <div>
        <h1 className={styles.calc}>
          Try to answer as quickly as possible{" "}
          <i className="fas fa-calculator"></i>
        </h1>
      </div>
      {form ? (
        <FirstScreenMath
          onChangeInputHandler={onChangeInputHandler}
          inputHandler={inputHandler}
          formHandler={formHandler}
        />
      ) : (
        <SecondScreenMath
          secondStyles={secondStyles}
          num={num}
          allAnswers={allAnswers}
          questionHandler={questionHandler}
          counter={counter}
        />
      )}
      {!showThirdScreen ? (
        <ThirdScreenMath
          formHandler={tryAgainHandler}
          sentence={sentence}
          allRigthAnswers={allRigthAnswers}
        />
      ) : null}
    </div>
  );
};

export default MathGameScreen;
